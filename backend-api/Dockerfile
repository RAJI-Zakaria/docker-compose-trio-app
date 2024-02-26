FROM node:alpine3.19

WORKDIR /app
COPY package*.json ./

RUN npm install
COPY . .

# Install Python and pip
RUN apk add --no-cache python3 py3-pip

# Create and activate a virtual environment
RUN python3 -m venv /venv
ENV PATH="/venv/bin:$PATH"

# Install wait-for-it inside the virtual environment
RUN pip install wait-for-it

ENV PORT=3001
EXPOSE ${PORT}

CMD ["npm", "start"]
