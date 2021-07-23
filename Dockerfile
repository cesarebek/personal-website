FROM node:14-alpine AS builder

WORKDIR /app

COPY ./package.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginxinc/nginx-unprivileged 

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


