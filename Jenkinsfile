pipeline {
  agent any
  stages {
    stage('Build Image') {
      steps {
        sh 'docker build . -t npm-test'
      }
    }

    stage('Run Container on 8079') {
      steps {
        sh '''docker kill $(docker ps -q)
docker run -p 8079:8079 -d npm-test'''
      }
    }

  }
}