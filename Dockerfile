FROM node:latest as base

# source code directory
WORKDIR /usr/src
COPY package.json /usr/src
RUN npm install
COPY . /usr/src

FROM base as dev
# Start the bot.
CMD ["npm", "run", "dev"]

FROM base as prod 
CMD ["npm", "run", "start"]