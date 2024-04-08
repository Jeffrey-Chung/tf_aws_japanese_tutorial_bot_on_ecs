variable "bucket_name" {
  default = "tf-aws-japanese-language-bot-files-bucket"
}
variable "region" {
  default = "ap-southeast-2"
}
variable "docker_file" {
  default = "docker-compose.yml"
}
variable "ecr_repo_name" {
  default = "tf-aws-japanese-tutorial-bot-ecr-repo"
}
variable "ecs_cluster_name" {
  default = "tf-aws-japanese-tutorial-bot-ecs-cluster"
}
variable "ecs_task_name" {
  default = "tf-aws-japanese-tutorial-bot-ecs-task"
}
variable "container_and_host_port" {
  default = "5000" # May be separated for container and host ports
}