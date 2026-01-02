# Deploy Arxis Documentation

## Prerequisites

- Node.js 18+
- GitHub Pages configured for the repository
- Custom domain (docs.avila.inc) configured in DNS

## DNS Configuration

Add the following DNS records:

```
Type: CNAME
Name: docs.avila.inc
Value: avilaops.github.io
```

Or if using the root domain:

```
Type: A
Name: @
Values:
  185.199.108.153
  185.199.109.153
  185.199.110.153
  185.199.111.153
```

## Deployment Steps

### 1. Install Dependencies

```bash
cd docs
npm install
```

### 2. Build the Site

```bash
npm run build
```

This creates optimized production files in the `build/` directory.

### 3. Test Locally

```bash
npm run serve
```

Visit http://localhost:3000 to test the production build.

### 4. Deploy to GitHub Pages

```bash
npm run deploy
```

This will:
- Build the site
- Push to the `gh-pages` branch
- Trigger GitHub Pages deployment

### 5. Verify Deployment

After a few minutes, visit:
- https://docs.avila.inc (custom domain)
- https://avilaops.github.io/arxis-core/docs (GitHub Pages URL)

## GitHub Pages Configuration

1. Go to repository Settings → Pages
2. Set source to `gh-pages` branch
3. Set custom domain to `docs.avila.inc`
4. Enable HTTPS

## Continuous Deployment (Optional)

Create `.github/workflows/deploy-docs.yml`:

```yaml
name: Deploy Documentation

on:
  push:
    branches:
      - main
    paths:
      - 'docs/**'

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install dependencies
        run: |
          cd docs
          npm ci

      - name: Build site
        run: |
          cd docs
          npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./docs/build
          cname: docs.avila.inc
```

## Updating Documentation

### Workflow

1. Edit markdown files in `docs/` directory
2. Test locally: `npm start`
3. Commit changes
4. Deploy: `npm run deploy`

### Best Practices

- Write clear, concise documentation
- Include code examples
- Add images to `static/img/`
- Keep sidebar structure organized
- Test all links before deploying

## Troubleshooting

### Build Errors

```bash
# Clear cache
npm run clear

# Rebuild
npm run build
```

### Deploy Failures

```bash
# Check git configuration
git config --global user.email "nicolas@avila.inc"
git config --global user.name "Nicolas Avila"

# Verify remote
git remote -v

# Retry deploy
npm run deploy
```

### DNS Issues

- Wait 24-48 hours for DNS propagation
- Verify DNS with: `nslookup docs.avila.inc`
- Check GitHub Pages status in repository settings

## Performance Optimization

The build process automatically:
- Minifies CSS and JavaScript
- Optimizes images
- Generates static HTML
- Creates search index
- Enables compression

## Monitoring

Monitor site performance at:
- Google Analytics (if configured)
- GitHub Pages insights
- Uptime monitoring service

## Maintenance

- Update dependencies: `npm update`
- Security audit: `npm audit`
- Check for broken links regularly
- Update content as packages evolve

## Support

For deployment issues:
- Email: nicolas@avila.inc
- GitHub Issues: https://github.com/avilaops/arxis-core/issues
