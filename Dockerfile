FROM node:latest as base

# source code directory
WORKDIR /usr/src
COPY package.json /usr/src
RUN npm install
COPY . /usr/src

# Image for running dev environment
# uses the nodemon command to auto-save changes to code
FROM base as dev
# Start the bot.
CMD ["npm", "run", "dev"]

# Image for running in prod environment
FROM base as prod 
CMD ["npm", "run", "start"]