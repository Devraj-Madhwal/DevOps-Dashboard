pipeline {
 agent any

 stages {

 stage('Clone Code') {
 steps {
 git 'https://github.com/Devraj-Madhwal/devops-dashboard.git'
 }
 }

 stage('Build Docker Image') {
 steps {
 sh 'docker build -t devraj1446/devops-dashboard .'
 }
 }

 stage('Push Docker Image') {
 steps {
 sh 'docker push devraj1446/devops-dashboard'
 }
 }

 stage('Deploy to Kubernetes') {
 steps {
 sh 'kubectl apply -f deployment.yaml'
 }
 }

 }

}
