FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . ./

RUN npm run build


FROM nginx:1.29.1-alpine

COPY --from=builder /app/_site /usr/share/nginx/html
