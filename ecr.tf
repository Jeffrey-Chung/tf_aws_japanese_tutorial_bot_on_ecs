resource "aws_ecr_repository" "bot_ecr_repo" {
  name = var.ecr_repo_name

  image_scanning_configuration {
    scan_on_push = true
  }
}