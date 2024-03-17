# Configure the AWS provider to ap-southeast-2 for Sydney deploys
provider "aws" {
    region = "ap-southeast-2"
}

terraform {
  required_version = ">= 1.0.0,< 2.0.0"

  required_providers {
    aws = {
        source = "hashicorp/aws"
        version = "~> 4.0"
    }
  }

    backend "s3" {
    bucket         = "tf-aws-japanese-language-bot-state-bucket"
    key            = "terraform.tfstate"
    region         = "ap-southeast-2"
    encrypt        = true
    dynamodb_table = "terraform-state-lock"
    #role_arn = "arn:aws:iam::663790350014:role/GitHubAction-AssumeRoleWithAction"
  }
  
}
