# Build stage
FROM node:18-alpine AS build

# Working directory for build
WORKDIR /wang_wei_final_site

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm ci

# Copy source code and build
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy React build output to Nginx default html folder
COPY --from=build /wang_wei_final_site/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
