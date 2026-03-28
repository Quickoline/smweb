#!/usr/bin/env bash
# Run on the VPS as root AFTER DNS A records point to this server (see hostinger-dns.txt).
#
# Prereqs: PM2 running API on 5000 and Next.js on 3001; nginx HTTP vhosts enabled.
# Optional: remove IP-only default sites so Certbot can bind server names on port 80:
#   rm -f /etc/nginx/sites-enabled/default
#
# Usage:
#   export CERTBOT_EMAIL=you@elizble.com
#   export SMPLACE=/var/www/smplace
#   export SMWEB=/var/www/smweb
#   bash deploy/certbot-elizble.sh

set -euo pipefail
export DEBIAN_FRONTEND=noninteractive

EMAIL="${CERTBOT_EMAIL:-admin@elizble.com}"
SMPLACE="${SMPLACE:-/var/www/smplace}"
SMWEB="${SMWEB:-/var/www/smweb}"

apt-get update -y
apt-get install -y certbot python3-certbot-nginx

if [[ -f "$SMPLACE/deploy/nginx-api-elizble.conf" ]]; then
  cp "$SMPLACE/deploy/nginx-api-elizble.conf" /etc/nginx/sites-available/api-elizble
  ln -sf /etc/nginx/sites-available/api-elizble /etc/nginx/sites-enabled/api-elizble
fi
if [[ -f "$SMWEB/deploy/nginx-web-elizble.conf" ]]; then
  cp "$SMWEB/deploy/nginx-web-elizble.conf" /etc/nginx/sites-available/web-elizble
  ln -sf /etc/nginx/sites-available/web-elizble /etc/nginx/sites-enabled/web-elizble
fi

nginx -t
systemctl reload nginx
command -v ufw >/dev/null 2>&1 && ufw allow 'Nginx Full' comment 'HTTP/HTTPS' || true

certbot --nginx \
  --agree-tos \
  --non-interactive \
  --email "$EMAIL" \
  -d api.elizble.com \
  -d elizble.com \
  -d www.elizble.com \
  -d elizble.in \
  -d www.elizble.in \
  -d smweb.elizble.com \
  --redirect

systemctl reload nginx
echo ""
echo "Set BASE_URL=https://api.elizble.com in $SMPLACE/.env and: pm2 restart smplace-api --update-env"
echo "HTTPS: https://api.elizble.com  https://elizble.com  https://elizble.in  https://smweb.elizble.com"
