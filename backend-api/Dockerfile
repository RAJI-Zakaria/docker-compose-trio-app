FROM node:alpine3.19

WORKDIR /app
COPY package*.json ./

RUN npm install
COPY . .

ENV PORT=3001
EXPOSE ${PORT}

CMD ["node", "index.js"]
