This file documents the HTTP security headers served by Netlify for miamishluchim.com.

What this repo sets (via `/_headers`)

- Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
- Content-Security-Policy: default-src 'self' https:; script-src 'self' https://cdnjs.cloudflare.com; style-src 'self' https://fonts.googleapis.com https://cdnjs.cloudflare.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self'; object-src 'none'; frame-src 'self' https://www.google.com https://maps.google.com; frame-ancestors 'self'; base-uri 'self'; form-action 'self'
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: geolocation=(), microphone=(), camera=()
- X-Frame-Options: SAMEORIGIN

Notes
- Netlify reads `/_headers` at deploy time and serves these headers as HTTP response headers. GitHub Pages does not support this file — if you host on GitHub Pages the headers will not be applied.
- Cross-Origin-Embedder-Policy / Cross-Origin-Opener-Policy / Cross-Origin-Resource-Policy are intentionally omitted to avoid blocking third-party scripts/embeds (Google Maps etc.). If you need cross-origin isolation for advanced features, re-enable them and ensure all third-party assets include compatible CORP/CORS headers.

How to test locally with Netlify Dev

1. Install Netlify CLI:

```bash
npm install -g netlify-cli
```

2. Run the dev server from the repo root:

```bash
netlify dev
```

3. Visit the printed local URL (usually http://localhost:8888). In DevTools -> Network, inspect the response headers for the page and confirm the headers above are present.

How to test deployed site

Use curl to fetch headers from the deployed site:

```bash
curl -I https://miamishluchim.com
```

Look for the headers listed above in the response.

If Snyk or other scanners still report missing headers after deploying to Netlify, double-check that the custom domain is configured and that Netlify is serving the built site (not an external proxy).