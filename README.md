# npm-hello-world
Basic Docker NPM Hello World Website


docker build -t npm-hello-world:latest .

docker rm --force npm-hello-world
docker run --name npm-hello-world -d -p 8079:8079 npm-hello-world:latest
