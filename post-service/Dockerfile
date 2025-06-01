FROM node:18
WORKDIR /app

# Copy only package files first to leverage Docker caching
COPY post-service/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the service code
COPY post-service/ .

EXPOSE 3001
CMD ["npm", "start"]
