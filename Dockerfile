# Build Stage
FROM node:24-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Runtime Stage (Using NGINX)
FROM nginx:1.28.0-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

