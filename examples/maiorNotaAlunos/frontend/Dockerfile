FROM nginx
COPY nginx.conf /etc/nginx/
COPY dist /usr/share/nginx/html


FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
WORKDIR /usr/share/nginx/html
COPY dist/new-core-angular .