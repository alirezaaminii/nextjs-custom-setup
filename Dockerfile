FROM node:12

WORKDIR /app

COPY . .

RUN PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=1 npm install --loglevel=error --no-audit && \
  npm run --if-present build

CMD ["npm", "start"]