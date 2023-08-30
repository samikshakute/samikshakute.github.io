FROM nginx:alpine
COPY . /usr/share/nginx/html
LABEL org.opencontainers.image.source=https://github.com/samikshakute/samikshakute.github.io
EXPOSE 80
