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
        sh '''docker kill $(docker ps -q) || true && docker rm $(docker ps -a -q) || true
npm_test_log=$(docker run -p 8079:8079 -d npm-test)
logs=$(docker logs $npm_test_log)'''
      }
    }

  }
}