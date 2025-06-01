FROM node:18
WORKDIR /app

# Copy only package files first to leverage Docker caching
COPY user-service/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the service code
COPY user-service/ .

EXPOSE 3002
CMD ["npm", "start"]
