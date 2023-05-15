pipeline{
    agent any

    //  tools{
    //     maven 'MAVEN'
    // } 

    // environment{
    //     PATH = "/usr/local/Cellar/maven/3.9.0/libexec:${PATH}"
    //     DOCKER_IMAGE = 'bansalc73/calc_dev_ops123:latest'
    //     CONTAINER_NAME = 'calc_container'
    //     PORTS = '8080:80'
    // }

    stages{
        stage('Clone Git'){
            steps{
                git 'https://github.com/bansalc73/bookMyBuddy'
            }
        }
        stage('Build Frontend Image') {
            steps {
                // Build the frontend Docker image
                sh 'docker build -t frontend-image .'
            }
        }
         stage('Build Backend Image') {
            steps {
                // Build the frontend Docker image
                sh 'docker build -t backend-image ./api'
            }
        }

    }
  

}

