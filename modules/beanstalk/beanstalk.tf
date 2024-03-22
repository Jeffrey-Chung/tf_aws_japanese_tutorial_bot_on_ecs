resource "aws_elastic_beanstalk_application" "japanese_language_bot" {
  name        = var.beanstalk_application_name
  description = var.beanstalk_application_description
}

resource "aws_elastic_beanstalk_environment" "beanstalk_environment" {
  name                = var.beanstalk_application_name
  application         = var.beanstalk_application_name
  solution_stack_name = "64bit Amazon Linux 2016.03 v2.1.6 running Docker 1.11.2"

  source_bundle {
    s3_bucket  = aws_s3_bucket.jchung_s3_bucket.id
    s3_key     = aws_s3_bucket_object.docker_compose_file.id
  }
}