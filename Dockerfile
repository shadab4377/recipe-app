# Use the official Node.js runtime as the base image
FROM node:12 as build-stage

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the Angular app
RUN npm run build --prod

# Use a smaller image for serving the app
FROM nginx:alpine

# Copy the build artifacts from the build stage to the Nginx public directory
COPY --from=build-stage /app/dist/recipe-app /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
