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
		stage('Deploy') {
			steps {
				sh 'npm install'
				sh 'npm run test'
				sh 'npm install'
				sh 'npm run test'
				sh 'npm install'
				sh 'npm run test'
				sh 'npm install'
				sh 'npm run test'
			}
		}
	}
}
