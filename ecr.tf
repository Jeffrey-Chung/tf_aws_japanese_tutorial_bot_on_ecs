# Defining an ECR Repository to store Docker Image
# Scans the image for vulnerabilities on each push
resource "aws_ecr_repository" "bot_ecr_repo" {
  name = var.ecr_repo_name

  image_scanning_configuration {
    scan_on_push = true
  }
}