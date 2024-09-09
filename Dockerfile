# Stage 1: Build the React app
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy all source code into the working directory
COPY . .

# Build the app for production
RUN npm run build

# Stage 2: Serve the built app with a production server
FROM nginx:alpine


# Copy the build files from the first stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the port that Nginx will run on
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
