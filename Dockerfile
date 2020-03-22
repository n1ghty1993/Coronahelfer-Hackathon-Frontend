FROM node:latest AS build

WORKDIR /app
COPY . /app
RUN REACT_APP_SERVER_URL=http://localhost:3000 yarn install 
RUN yarn build



FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
