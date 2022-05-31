FROM node:15.13-alpine as builder
COPY front_end ./
RUN npm install
ENV PATH="./front_end/node_modules/.bin:$PATH"
RUN npm run build
CMD [ "npm", "run", "start" ]