#reomove all images
docker rmi -f $(docker images -q)