pipeline {
	agent any
	stages {
		stage('Build') {
			steps {
				sh 'npm install'
			}
		}	   
		stage('Test') {
			steps {
				sh 'npm run test'
			}
		}
		stage('Show') {
			steps {
				sh 'bash -c ls node_modules'
			}
		}
		stage('Deploy') {
			steps {
				sh 'forever -w restart /var/lib/jenkins/workspace/SA_P1_main/app.js'
			}
		}
	}
}
