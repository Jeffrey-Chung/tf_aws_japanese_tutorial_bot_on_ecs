module "ec2" {
  source = "./modules/ec2"
}

module "beanstalk" {
  source = "./modules/beanstalk"
}

module "ecs" {
  source = "./modules/ecs"
}