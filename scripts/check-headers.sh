#!/usr/bin/env bash
# Quick header check script for miamishluchim.com
# Usage: ./scripts/check-headers.sh [url]
URL=${1:-https://miamishluchim.com}

echo "Checking headers for $URL"

curl -I -s "$URL" | egrep -i 'Strict-Transport-Security|Content-Security-Policy|X-Frame-Options|X-Content-Type-Options|Referrer-Policy|Permissions-Policy' || true

# Exit with success
exit 0
