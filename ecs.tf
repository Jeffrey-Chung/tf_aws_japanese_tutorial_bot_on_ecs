# Creating an ECS cluster to run the container from ECR
resource "aws_ecs_cluster" "bot_ecs_cluster" {
  name = var.ecs_cluster_name
}

/**Defines the blueprint/instructions on running the container
 Using Fargate to learn how to orchestrate the containers, 
 rather than EC2, which is sufficient for this use case since we are only running 1 container
**/
resource "aws_ecs_task_definition" "bot_ecs_task" {
  family                   = var.ecs_task_name # Name your task
  container_definitions    = <<DEFINITION
  [
    {
      "name": ${var.ecs_task_name},
      "image": "${aws_ecr_repository.bot_ecr_repo.repository_url}",
      "essential": "true",
      "portMappings": [
        {
          "containerPort": ${var.container_and_host_port},
          "hostPort": ${var.container_and_host_port}
        }
      ],
      "memory": "512",
      "cpu": "256"
    }
  ]
  DEFINITION
  requires_compatibilities = ["FARGATE"] # use Fargate for container orchestration
  network_mode             = "awsvpc"    # add the AWS VPN network mode as this is required for Fargate
  memory                   = 512         # Specify the memory to be 512MB, required for Fargate
  cpu                      = 256         # Specify the CPU to require 256MB, required for Fargate
}