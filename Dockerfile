FROM node:14-alpine as builder

# copy the package.json to install dependencies
COPY package.json package-lock.json ./

# Install the dependencies and make the folder
RUN npm install && mkdir /nextjs-ui && mv ./node_modules ./nextjs-ui

WORKDIR /nextjs-ui

COPY . .

# Build the project and copy the files
RUN npm run build


FROM nginx:stable-alpine

#!/bin/sh

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
# COPY fullchain.pem /tmp/fullchain.pem
# COPY privkey.pem /tmp/privkey.pem

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/* \
  && mkdir /usr/share/nginx/html/travel-planner

# Copy from the stahg 1
COPY --from=builder /nextjs-ui/out /usr/share/nginx/html/
COPY --from=builder /nextjs-ui/out /usr/share/nginx/html/travel-planner/

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
#ENTRYPOINT ["npm","run","dev"]
