pipeline{
    agent any

    //  tools{
    //     maven 'MAVEN'
    // } 

    // environment {
        // DOCKER_USERNAME = 'bansalc73'
        // DOCKER_PASSWORD = 'bansalc73'
        // registryCredential = 'docker_creds'
        // registry_backend = 'pratikahirrao/backend'
        // registry_frontend = 'pratikahirrao/frontend'
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
          stage('Push Images to DockerHub') {
            steps {

                withCredentials([usernamePassword(credentialsId: 'docker_HUb', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                    sh 'docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD'
                    sh 'docker tag frontend-image bansalc73/frontend-image:latest'
                    sh 'docker push bansalc73/frontend-image:latest'
                    sh 'docker tag backend-image bansalc73/backend-image:latest'
                    sh 'docker push bansalc73/backend-image:latest'
                }

                // sh 'docker login -u %DOCKER_USERNAME% -p %DOCKER_PASSWORD%'
                // sh 'docker push  bansalc73/backend'
                // sh 'docker push pratikahirrao/frontend'
              
            }
        }

    }
  

}

