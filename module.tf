module "EC2" {
  source = "./modules/EC2"
}

module "beanstalk" {
  source = "./modules/beanstalk"
}

module "ECS" {
  source = "./modules/ECS"
}