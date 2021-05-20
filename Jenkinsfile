pipeline {
  agent any
  stages {
    stage('Cloning Git') {
      steps {
        git 'https://github.com/bashirusuleman/personal_website.git'
      }
    }

    stage('Building image') {
      steps {
        script {
          dockerImage = docker.build registry + ":$BUILD_NUMBER"
        }

        archiveArtifacts(artifacts: 'target/*.jar', fingerprint: true)
      }
    }

    stage('Deploy Image') {
      steps {
        script {
          docker.withRegistry( '', registryCredential ) {
            dockerImage.push()
          }
        }

      }
    }

    stage('Remove Image Unused Image') {
      steps {
        sh 'docker rmi $registry:$BUILD_NUMBER'
      }
    }

  }
  environment {
    registry = 'exbashorun/personalwebsite'
    registryCredential = 'dockerhub'
    dockerImage = ''
  }
}