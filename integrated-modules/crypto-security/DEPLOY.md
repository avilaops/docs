# 🚀 Guia de Deploy - AVX Crypto Security Docs

**Copyright © 2025 Nícolas Ávila - Todos os Direitos Reservados**

Este guia explica como fazer o deploy da documentação AVX para produção.

---

## 📋 Pré-requisitos

- [ ] Servidor web (Nginx, Apache, ou similar)
- [ ] Domínio configurado (docs.avila.inc)
- [ ] Certificado SSL/TLS
- [ ] Acesso SSH ao servidor

---

## 🌐 Opções de Deployment

### Opção 1: Hospedagem Estática Tradicional

#### 1. Preparar os Arquivos

```powershell
# Comprimir a pasta docs
Compress-Archive -Path "docs\*" -DestinationPath "avx-docs.zip"
```

#### 2. Upload para o Servidor

```bash
# Via SCP
scp avx-docs.zip user@docs.avila.inc:/var/www/

# Ou via FTP/SFTP
# Use seu cliente FTP preferido
```

#### 3. Extrair no Servidor

```bash
ssh user@docs.avila.inc
cd /var/www/
unzip avx-docs.zip -d html/
```

#### 4. Configurar Nginx

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name docs.avila.inc;
    
    # Redirect to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name docs.avila.inc;
    
    # SSL Configuration
    ssl_certificate /etc/letsencrypt/live/docs.avila.inc/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/docs.avila.inc/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    
    # Document Root
    root /var/www/html;
    index index.html;
    
    # Compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
    gzip_min_length 256;
    
    # Caching
    location ~* \.(js|css|png|jpg|jpeg|gif|svg|ico)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # HTML files - no cache
    location ~* \.html$ {
        add_header Cache-Control "no-cache, must-revalidate";
    }
    
    # Security Headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:;" always;
    
    # Error Pages
    error_page 404 /index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

#### 5. Reiniciar Nginx

```bash
sudo nginx -t
sudo systemctl restart nginx
```

---

### Opção 2: Netlify

#### 1. Criar `netlify.toml`

```toml
[build]
  publish = "docs"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "SAMEORIGIN"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

#### 2. Deploy

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod --dir=docs
```

---

### Opção 3: GitHub Pages

#### 1. Criar Repositório

```bash
git init
git add .
git commit -m "Initial commit: AVX Crypto Security Docs"
git branch -M main
git remote add origin https://github.com/avilaops/avx-docs.git
git push -u origin main
```

#### 2. Configurar GitHub Pages

1. Vá para Settings > Pages
2. Source: Deploy from a branch
3. Branch: main / docs
4. Save

#### 3. Configurar Domínio Customizado

1. Adicionar arquivo `CNAME` em `docs/`:
```
docs.avila.inc
```

2. Configurar DNS:
```
CNAME docs.avila.inc -> avilaops.github.io
```

---

### Opção 4: Vercel

#### 1. Criar `vercel.json`

```json
{
  "version": 2,
  "builds": [
    {
      "src": "docs/**",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/docs/$1"
    }
  ],
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

#### 2. Deploy

```bash
# Instalar Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

---

### Opção 5: Azure Static Web Apps

#### 1. Criar `staticwebapp.config.json`

```json
{
  "routes": [
    {
      "route": "/assets/*",
      "headers": {
        "Cache-Control": "public, max-age=31536000, immutable"
      }
    },
    {
      "route": "/*",
      "serve": "/index.html",
      "statusCode": 200
    }
  ],
  "responseOverrides": {
    "404": {
      "rewrite": "/index.html",
      "statusCode": 200
    }
  }
}
```

#### 2. Deploy via Azure CLI

```bash
az staticwebapp create \
  --name avx-docs \
  --resource-group avx-resources \
  --source docs \
  --location "East US" \
  --branch main
```

---

## 🔒 Segurança

### SSL/TLS

Use **Let's Encrypt** para certificados gratuitos:

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d docs.avila.inc
```

### Firewall

Configure o firewall para permitir apenas HTTP/HTTPS:

```bash
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable
```

### Headers de Segurança

Garanta que os seguintes headers estejam configurados:

- `X-Frame-Options: SAMEORIGIN`
- `X-Content-Type-Options: nosniff`
- `X-XSS-Protection: 1; mode=block`
- `Content-Security-Policy`
- `Strict-Transport-Security`

---

## 📊 Monitoramento

### Google Analytics (Opcional)

Adicione antes do `</head>` em todas as páginas:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Uptime Monitoring

Use serviços como:
- UptimeRobot
- Pingdom
- StatusCake

---

## 🚀 CI/CD Automation

### GitHub Actions

Crie `.github/workflows/deploy.yml`:

```yaml
name: Deploy Docs

on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Deploy to Server
        uses: appleboy/scp-action@master
        with:
          host: ${{ secrets.HOST }}
          username: ${{ secrets.USERNAME }}
          key: ${{ secrets.SSH_KEY }}
          source: "docs/*"
          target: "/var/www/html/"
```

---

## ✅ Checklist de Deploy

Antes de fazer deploy em produção:

- [ ] Testar localmente com `serve-docs.ps1`
- [ ] Validar HTML (W3C Validator)
- [ ] Validar CSS (W3C CSS Validator)
- [ ] Testar JavaScript (sem erros no console)
- [ ] Verificar responsividade (mobile, tablet, desktop)
- [ ] Testar todos os 11 idiomas
- [ ] Testar tema light e dark
- [ ] Verificar todos os links
- [ ] Otimizar imagens
- [ ] Testar performance (Google Lighthouse)
- [ ] Configurar SSL/TLS
- [ ] Configurar headers de segurança
- [ ] Configurar cache
- [ ] Configurar compression (gzip/brotli)
- [ ] Testar em diferentes navegadores
- [ ] Configurar monitoring
- [ ] Fazer backup dos arquivos

---

## 🔄 Atualização da Documentação

### Processo de Atualização:

1. Fazer alterações localmente
2. Testar com `serve-docs.ps1`
3. Commit e push para repositório
4. Deploy automático via CI/CD (ou manual)
5. Validar em produção
6. Invalidar cache se necessário

### Invalidar Cache (Nginx):

```bash
# Recarregar configuração
sudo nginx -s reload

# Limpar cache do navegador via headers
# Adicionar timestamp nos nomes de arquivos
# Ou usar query string: style.css?v=2.0
```

---

## 📞 Suporte

Para problemas de deploy, entre em contato:

- **Email**: nicolas@avila.inc
- **Suporte Técnico**: support@avila.inc

---

**Desenvolvido com tecnologia proprietária AVX**

© 2025 Avila Inc. Todos os direitos reservados.
