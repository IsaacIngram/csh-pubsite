# Build the static Astro site
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# Serve it with an unprivileged nginx image (OpenShift/OKD run containers
# as an arbitrary, non-root UID from the root group - this image already
# supports that out of the box).
FROM nginxinc/nginx-unprivileged:1.27-alpine
COPY --chown=nginx:0 nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build --chown=nginx:0 /app/dist /usr/share/nginx/html

EXPOSE 8080
