pipeline {
    agent {
        docker {
            image "node:alpine"
            args "--network=skynet"
        }
    }
    stages {
        stage("Build") {
            steps {
                sh "apt install alpine"
                sh "npm install"
            }
        }
        stage("Test"){
            steps {
                sh "npx cypress run"
            }
        }
    }
}