# Build stage
FROM node:18-alpine AS build

# Use assignment-required working directory
WORKDIR /wang_wei_final_site

COPY package.json package-lock.json* ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
WORKDIR /wang_wei_final_site
COPY --from=build /wang_wei_final_site/build .
EXPOSE 5575
CMD ["nginx", "-g", "daemon off;"]
