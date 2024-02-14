#reomove all containers
docker rm -f $(docker ps -a -q)