#stage 1: build ur angular application
FROM node:20 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

#stage 2 Serve the app using Nginx
FROM nginx:alpine
COPY --from=build /app/dist/food-delivery-app /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]