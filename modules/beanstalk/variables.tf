variable "bucket_name" {
  default = "tf-aws-japanese-language-bot-files-bucket"
}
variable "region" {
  default = "ap-southeast-2"
}
variable "docker_file" {
  default = "docker-compose.yml"
}
variable "beanstalk_application_name" {
  default = "japanese_language_bot"
}
variable "beanstalk_application_description" {
  default = "Bot that assigns resources for Japanese Language Classes"
}