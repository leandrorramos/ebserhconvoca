# Nuxt 3 Minimal Starter

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.


## Deploy application
Após subir (git ou FTP) o projeto completo no www do servidor, siga os passos abaixo:
```bash
#navegue ate a raiz da aplicação

#dependencias
npm install

#build da aplicação
npm run build

#PM2
pm2 start 

#checar processo do pm2
pm2 status
pm2 monit

#verificar se o processo está escutando a porta correta:
netstat -putan

```

## configuração de proxy reverso apache

```bash
    #sites-availables: nome-app.conf
    #caminho_completo é de acordo com as configurações do seu servidor
    <VirtualHost *:80>
    ServerName nome.dominio.br

    DocumentRoot /caminho_completo/www/raiz_app/
    ProxyPreserveHost On
    ProxyPass / http://nome.dominio.br:3000/
    ProxyPassReverse / http://nome.dominio.br:3000/
    
    <Directory /caminho_completo/www/raiz_app>
        Allow from all
        Options -MultiViews
    </Directory>

    CustomLog "/caminho_completo/log/apache2/nome-app.Access.log" combined
    ErrorLog "/caminho_completo/log/apache2/nome-app.Error.log"

    </VirtualHost>

```