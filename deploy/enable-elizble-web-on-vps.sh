#!/usr/bin/env bash
# Run on the VPS as root. Enables the marketing site on port 80 for elizble.com (and names in nginx-web-elizble.conf).
# Requires: PM2 app "smweb" listening on 127.0.0.1:3001 (see ecosystem.config.cjs).

set -euo pipefail
SMWEB="${SMWEB:-/var/www/smweb}"

if [[ ! -f "$SMWEB/deploy/nginx-web-elizble.conf" ]]; then
  echo "Missing $SMWEB/deploy/nginx-web-elizble.conf — git pull in $SMWEB first."
  exit 1
fi

cp "$SMWEB/deploy/nginx-web-elizble.conf" /etc/nginx/sites-available/web-elizble
ln -sf /etc/nginx/sites-available/web-elizble /etc/nginx/sites-enabled/web-elizble

# Ubuntu default site serves /var/www/html and often yields 404 for /
rm -f /etc/nginx/sites-enabled/default

nginx -t
systemctl reload nginx

echo "OK. On the server, check Next.js: curl -sS -o /dev/null -w '%{http_code}' http://127.0.0.1:3001/"
echo "Check nginx routing: curl -sS -H 'Host: elizble.com' -o /dev/null -w '%{http_code}' http://127.0.0.1/"
echo "Public: http://elizble.com/  (after DNS A record points to this server)"
