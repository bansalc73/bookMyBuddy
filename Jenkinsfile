pipeline{
    agent any
    environment{
        MONGO="mongodb+srv://chirag:chirag@cluster0.xxq7wug.mongodb.net/doctor_app?retryWrites=true&w=majority"
        JWT="a1cd158e2b34d47af6d0b446f59a326849f0dd8eb7ac51244f4ab4c1cb99552b9f856a8fb488f20fdbf0d489fc93b4d94fb71148a1bd24e2386a6c71e4d8a3cd"
    }
    stages{
        stage('Clone Git'){
            steps{
                git 'https://github.com/bansalc73/bookMyBuddy'
            }
        }
        stage('Testing'){
            steps{
                dir('api'){
                    sh "npm install"
                    sh "npm test"
                }
            }
        }
        stage('Build Frontend Image') {
            steps {
                sh 'docker build -t frontend-image .'
            }
        }
         stage('Build Backend Image') {
            steps {
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
            }
        }
        stage('Ansible Deployment') {
            steps {
                script { 
                    sh 'ansible-playbook -i inventory-k8 playbook-k8.yml'
                }
            }
        }
    }
}

