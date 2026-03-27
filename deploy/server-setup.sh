#!/usr/bin/env bash
# Run on the VPS as root after SSH login (once).
set -euo pipefail
export DEBIAN_FRONTEND=noninteractive

APP_DIR="${APP_DIR:-/var/www/smweb}"
REPO="${REPO:-https://github.com/Quickoline/smweb.git}"

apt-get update -y
apt-get -y --fix-broken install || true
apt-get install -y git nginx curl ca-certificates gnupg

if ! command -v node >/dev/null 2>&1; then
  curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
  apt-get install -y nodejs
fi
command -v npm >/dev/null
npm install -g pm2

mkdir -p "$(dirname "$APP_DIR")"
if [[ ! -d "$APP_DIR/.git" ]]; then
  git clone "$REPO" "$APP_DIR"
else
  (cd "$APP_DIR" && git pull origin main)
fi

cd "$APP_DIR"
npm ci
npm run build

pm2 delete smweb 2>/dev/null || true
# Free port if a stray node/next still holds it (e.g. duplicate start)
fuser -k 3001/tcp 2>/dev/null || true
pm2 start ecosystem.config.cjs
pm2 save
env PATH="$PATH" pm2 startup systemd -u root --hp /root || true

if [[ -f deploy/nginx-smweb.conf ]]; then
  cp deploy/nginx-smweb.conf /etc/nginx/sites-available/smweb
  ln -sf /etc/nginx/sites-available/smweb /etc/nginx/sites-enabled/smweb
  nginx -t && systemctl reload nginx
fi

echo "Done. Next.js: http://127.0.0.1:3001  public: http://$(hostname -I | awk '{print $1}'):8080/"
