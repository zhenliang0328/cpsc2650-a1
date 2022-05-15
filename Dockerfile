FROM node:6.10.3

# Create app durectory
RUN mkdir -p /usr/src/a1
WORKDIR /usr/src/a1

# Install app dpendencies
COPY package.json /usr/src/a1/
RUN npm install

# Bundle app source
COPY . /usr/src/a1
EXPOSE 3000
CMD ["npm", "start"]