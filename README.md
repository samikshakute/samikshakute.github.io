# samikshakute.github.io
My personal website repository.

[![Docker Image](https://img.shields.io/badge/Docker%20Image-ghcr.io%2Fsamikshakute%2Fportfolio--app-blue)](https://github.com/samikshakute/samikshakute.github.io/pkgs/container/portfolio-app)


## Running the Containerized Portfolio Locally

To run my portfolio locally using Docker, follow these steps:

1. **Install Docker:** If you haven't already, [install Docker](https://docs.docker.com/get-docker/) on your machine.

2. **Pull the Docker Image:** Open a terminal and run the following command to pull the containerized portfolio image:

   ```bash
   docker pull ghcr.io/samikshakute/portfolio-app:latest

3. **Run the Container:** Start a Docker container with the following command:

   ```bash
   docker run -d -p 8080:80 ghcr.io/samikshakute/portfolio-app:latest

4. **Access the Portfolio:** Open your web browser and navigate to http://localhost:8080 to view your containerized portfolio.
5. **Stop the Container:** When you're done, you can stop the container using the following command:
   ```bash
   docker stop CONTAINER_ID
  Replace CONTAINER_ID with the actual container ID (you can find it using docker ps).
  


