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
				sh 'cd SA_Practica1'
				sh 'sudo ansible-playbook test.yaml'
				sh 'sudo ansible-playbook production.yaml'
			}
		}
	}
}
