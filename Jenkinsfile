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
    }

}

