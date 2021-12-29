pipeline {
    agent {
        docker {
            image "cypress/base"
        }
    }
    stages {
        stage("Build") {
            steps {
                sh "npm install"                
            }
        }
        stage("Test"){
            steps {
                sh "npm run test:ci"
            }
        }
    }
}