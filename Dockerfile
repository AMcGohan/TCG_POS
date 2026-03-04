FROM node:20-alpine

WORKDIR /usr/src/app

# Copy dependency manifests from workspace root
COPY package*.json ./

RUN npm install

# Copy rest of the workspace
COPY . .

EXPOSE 4200

CMD ["npx", "ng", "serve", "--host", "0.0.0.0", "--poll=2000"]