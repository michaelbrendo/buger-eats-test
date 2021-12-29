# BUGER EATS TEST :bug::hamburger:

## How to run the test
```bash
npm run test
```

***

## Technology:
- [Nodejs](https://github.com/nodesource/distributions/blob/master/README.md)
- [Cypress](https://www.cypress.io/)
- [Docker](https://docs.docker.com/engine/install/) *Optional for jenkins
    - [Jenkins doc](https://www.jenkins.io/doc/book/installing/docker/)

***

## Optional for jenkins
```bash
#Create the bridge networks
docker network create network-jenkins

#Create volume
docker volume create jenkins-data

#Get docker image
docker pull jenkinsci/blueocean

#Run docker image
docker container run --name jenkins-blueocean --detach \
  --network skynet -u root \
  --volume jenkins-data:/var/jenkins_home \
  --volume /var/run/docker.sock:/var/run/docker.sock \
  --publish 8080:8080 --publish 50000:50000 jenkinsci/blueocean

#Checking if everything is alright
#Should return the expected container
docker ps

#Access localhost
#You will see "Unlock Jenkins"
#Proceed with the remaining steps presented on the page and start using Jenkins 
'http://localhost:8080'
```

***

## Create a job in Jenkins
to do.

## Credits
Fernando Papito and Michael Brendo.