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