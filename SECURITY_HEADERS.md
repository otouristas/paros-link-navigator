# Security Headers Configuration

This document outlines the security headers that should be configured at the server/hosting level for optimal security.

## Required HTTP Headers

Configure these headers at your hosting provider (Netlify, Vercel, Cloudflare, etc.):

### 1. Content-Security-Policy (CSP)
```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://cdn.gpteng.co; style-src 'self' 'unsafe-inline'; img-src 'self' data: https: blob:; font-src 'self' data:; connect-src 'self' https://www.google-analytics.com https://*.supabase.co https://hotelssifnos.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self';
```

### 2. Strict-Transport-Security (HSTS)
```
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```

### 3. Cross-Origin-Opener-Policy (COOP)
```
Cross-Origin-Opener-Policy: same-origin
```

### 4. X-Frame-Options
```
X-Frame-Options: DENY
```
(Note: This is covered by CSP `frame-ancestors 'none'`, but included for older browser support)

### 5. X-Content-Type-Options
```
X-Content-Type-Options: nosniff
```

### 6. Referrer-Policy
```
Referrer-Policy: strict-origin-when-cross-origin
```

## Hosting Provider Configuration

### Netlify
Create or update `netlify.toml`:
```toml
[[headers]]
  for = "/*"
  [headers.values]
    Content-Security-Policy = "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://cdn.gpteng.co; style-src 'self' 'unsafe-inline'; img-src 'self' data: https: blob:; font-src 'self' data:; connect-src 'self' https://www.google-analytics.com https://*.supabase.co https://hotelssifnos.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self';"
    Strict-Transport-Security = "max-age=31536000; includeSubDomains; preload"
    Cross-Origin-Opener-Policy = "same-origin"
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

### Vercel
Create or update `vercel.json`:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://cdn.gpteng.co; style-src 'self' 'unsafe-inline'; img-src 'self' data: https: blob:; font-src 'self' data:; connect-src 'self' https://www.google-analytics.com https://*.supabase.co https://hotelssifnos.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self';"
        },
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=31536000; includeSubDomains; preload"
        },
        {
          "key": "Cross-Origin-Opener-Policy",
          "value": "same-origin"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        }
      ]
    }
  ]
}
```

### Cloudflare
Configure via Cloudflare Dashboard:
1. Go to Security > WAF > Custom Rules
2. Or use Page Rules to add headers
3. Or use Workers to add headers programmatically

### Apache (.htaccess)
```apache
<IfModule mod_headers.c>
  Header set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://cdn.gpteng.co; style-src 'self' 'unsafe-inline'; img-src 'self' data: https: blob:; font-src 'self' data:; connect-src 'self' https://www.google-analytics.com https://*.supabase.co https://hotelssifnos.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self';"
  Header set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
  Header set Cross-Origin-Opener-Policy "same-origin"
  Header set X-Frame-Options "DENY"
  Header set X-Content-Type-Options "nosniff"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>
```

### Nginx
```nginx
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://cdn.gpteng.co; style-src 'self' 'unsafe-inline'; img-src 'self' data: https: blob:; font-src 'self' data:; connect-src 'self' https://www.google-analytics.com https://*.supabase.co https://hotelssifnos.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self';" always;
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
add_header Cross-Origin-Opener-Policy "same-origin" always;
add_header X-Frame-Options "DENY" always;
add_header X-Content-Type-Options "nosniff" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
```

## Testing

After configuring headers, test using:
- [Security Headers](https://securityheaders.com/)
- [Mozilla Observatory](https://observatory.mozilla.org/)
- Browser DevTools Network tab

## Notes

- The CSP meta tag in `index.html` provides basic protection but HTTP headers are preferred
- HSTS requires HTTPS to be properly configured
- Some headers may need adjustment based on your specific hosting setup
- Test thoroughly after implementing to ensure all functionality works correctly

