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
				sh 'ansible-playbook test.yaml'
				sh 'ansible-playbook production.yaml'
			}
		}
	}
}
