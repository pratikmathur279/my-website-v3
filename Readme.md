docker build -f Dockerfile.dev -t my-website:dev .

docker build --no-cache -f Dockerfile.production -t my-website:production .

docker run -p 3010:3010 my-website:production
