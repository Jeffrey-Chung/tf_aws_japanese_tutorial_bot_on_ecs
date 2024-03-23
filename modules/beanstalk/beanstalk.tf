resource "aws_elastic_beanstalk_application" "japanese_language_bot" {
  name        = var.beanstalk_application_name
  description = var.beanstalk_application_description
}

resource "aws_elastic_beanstalk_application_version" "default" {
  name        = "tf-test-version-label"
  application = var.beanstalk_application_name
  description = var.beanstalk_application_description
  bucket      = aws_s3_bucket.jchung_s3_bucket.id
  key         = aws_s3_object.docker_compose_file.id
}

resource "aws_elastic_beanstalk_environment" "beanstalk_environment" {
  name                = var.beanstalk_application_name
  application         = var.beanstalk_application_name
  solution_stack_name = "64bit Amazon Linux 2023 v4.2.2 running Docker"
}