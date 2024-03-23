resource "aws_elastic_beanstalk_application" "japanese_language_bot" {
  name        = var.beanstalk_application_name
  description = var.beanstalk_application_description
}

resource "aws_elastic_beanstalk_application_version" "japanese_language_bot_version" {
  name        = var.beanstalk_version_label
  application = aws_elastic_beanstalk_application.japanese_language_bot.name
  description = var.beanstalk_application_description
  bucket      = aws_s3_bucket.jchung_s3_bucket.id
  key         = aws_s3_object.docker_compose_file.id
}

resource "aws_elastic_beanstalk_environment" "beanstalk_environment" {
  name                = var.beanstalk_environment_name
  application         = aws_elastic_beanstalk_application.japanese_language_bot.name
  solution_stack_name = "64bit Amazon Linux 2023 v4.2.2 running Docker"

  setting {
      namespace = "aws:autoscaling:launchconfiguration"
      name      = "IamInstanceProfile"
      value     = "arn:aws:iam::663790350014:role/GitHubActions-japanese-language-bot"
    }
}