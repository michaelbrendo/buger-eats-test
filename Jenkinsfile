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
                sh "npm install"
                sh "npm install cypress"
            }
        }
        stage("Test"){
            steps {
                sh "npx cypress run"
            }
        }
    }
}