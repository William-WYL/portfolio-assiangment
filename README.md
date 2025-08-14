# Portfolio Site - Deployment Guide

This guide explains how to build and run your portfolio site using Docker.

## 🛠 Prerequisites

1. **Docker installed on your machine**
2. **Node.js installed (for local build, optional)**

## 🚀 Build and Run the Portfolio Site with Docker

### 1. Pull the Pre-Built Docker Image

Open a terminal in the project root and run:

```bash
docker pull williamwyl/portfolio-assignment:latest
```

### 2. Run the Docker Container

This command runs the container and maps it to localhost:5575:

```bash
docker run -d -p 5575:80 --name wang_wei_coding_assignment14 williamwyl/portfolio-assignment:latest
```

### 3. Open the Portfolio Site in Your Browser

Go to:

http://127.0.0.1:5575

You should see your portfolio site running.

## 🛑 Stopping and Removing the Container

To stop the running container:

```bash
docker stop wang_wei_coding_assignment14
```

To remove it:

```bash
docker rm wang_wei_coding_assignment14
```

## 📦 About This Portfolio Site

- Built with React + TypeScript
- Uses your custom component library
- Dockerized for easy deployment
- CI/CD pipeline with GitHub Actions for code quality and automated builds

## 📁 Container Details

- Container name: `wang_wei_coding_assignment14`
- Working directory in container: `/wang_wei_final_site`
- Site runs at: `localhost:5575`
