FROM node:20-alpine

WORKDIR /usr/src/app

# Copy dependency manifests
COPY package*.json ./

RUN npm install

# Copy rest of the app
COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]