variable "region" {
  default = "ap-southeast-2"
}

variable "ami" {
  default = "ami-080785a633a551d87"
}

variable "instance_type" {
  default = "t2.micro"
}

variable "security_group_name" {
  default = "japanese_language_bot_security_group"
}