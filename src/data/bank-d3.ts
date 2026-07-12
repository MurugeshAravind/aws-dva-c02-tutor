import { SET3_D3_QUESTIONS } from "./mock-set-3";
import { SET4_D3_QUESTIONS } from "./mock-set-4";
import type { Concept } from "../types";

export const D3_CONCEPTS: Concept[] = [
  {
    name: "CodeDeploy strategies & appspec",
    explanation: "CodeDeploy automates releases. All-at-once shifts everything immediately (fast, risky); canary shifts a small slice first then the rest after a wait; linear shifts equal increments on a schedule. The appspec.yml file defines deployment lifecycle hooks (and for Lambda, the version/alias and hooks).",
    questions: [
      { t: "s", q: "Which CodeDeploy configuration shifts ALL traffic to the new version at once?", o: ["All-at-once", "Canary", "Linear", "Rolling with batches"], c: [0], e: ["All-at-once cuts over immediately.", "Canary shifts a portion first.", "Linear shifts in equal steps.", "Batches shift gradually too."] },
      { t: "s", q: "Which deployment shifts a small percentage first, waits, then shifts the rest?", o: ["Canary", "Linear", "All-at-once", "Blue/green only"], c: [0], e: ["Canary = small slice, bake, then remainder.", "Linear shifts equal increments repeatedly.", "All-at-once does no gradual shift.", "Blue/green is an environment strategy, not this traffic pattern."] },
      { t: "s", q: "Which file defines CodeDeploy lifecycle hooks (e.g., for a Lambda deployment)?", o: ["appspec.yml", "buildspec.yml", "template.yaml", "pipeline.json"], c: [0], e: ["appspec.yml drives CodeDeploy.", "buildspec.yml is for CodeBuild.", "template.yaml is CloudFormation/SAM.", "There's no standard pipeline.json hook file."] },
      { t: "s", q: "A CodeDeploy canary deployment shifts 10% of traffic initially. If an alarm triggers during the bake period, what happens?", o: ["CodeDeploy automatically rolls back to the previous version", "The remaining 90% is shifted regardless", "Deployment is paused but not rolled back", "An SNS notification is sent and deployment continues"], c: [0], e: ["CodeDeploy integrated with CloudWatch alarms automatically rolls back on alarm.", "Deployment would not proceed when an alarm fires.", "It rolls back, not just pauses.", "It rolls back; continuing is the wrong behavior."] },
      { t: "s", q: "Which CodeDeploy lifecycle hook runs BEFORE traffic is shifted to a new Lambda version?", o: ["BeforeAllowTraffic", "AfterAllowTraffic", "ApplicationStart", "ValidateService"], c: [0], e: ["BeforeAllowTraffic runs validation before routing traffic to the new version.", "AfterAllowTraffic runs after the shift.", "ApplicationStart is an EC2/on-premises hook.", "ValidateService is also an EC2/on-premises hook."] },
      { t: "m", q: "Which statements about CodeDeploy deployment groups are correct? (choose two)", o: ["A deployment group targets instances via tags or ASG names", "Deployment configurations control traffic-shift speed", "Each deployment group can only have one revision at a time", "appspec.yml is stored in the deployment group configuration", "Deployment groups are only for EC2, not Lambda"], c: [0, 1], e: ["Tags and ASG names select the deployment targets.", "Deployment configurations (all-at-once, canary, etc.) govern traffic shifting.", "Groups can have multiple in-flight deployments.", "appspec.yml is part of the application revision, not the group config.", "CodeDeploy supports EC2, on-premises, Lambda, and ECS."] },
    ],
  },
  {
    name: "CloudFormation, SAM & CodeBuild",
    explanation: "Infrastructure as code on AWS centers on CloudFormation. SAM is a shorthand layer: the Transform macro expands SAM's concise syntax into full CloudFormation resources at deploy time. CodeBuild uses buildspec.yml to define build phases and commands. Knowing which file belongs to which service is a frequent exam point.",
    questions: [
      { t: "s", q: "What does the SAM Transform macro do?", o: ["Expands SAM shorthand into full CloudFormation resources", "Deploys without using CloudFormation", "Runs your unit tests", "Creates a CI/CD pipeline automatically"], c: [0], e: ["Transform turns SAM syntax into standard CloudFormation.", "SAM deploys via CloudFormation under the hood.", "It doesn't run tests.", "It doesn't build pipelines."] },
      { t: "s", q: "Which file defines build commands and phases for CodeBuild?", o: ["buildspec.yml", "appspec.yml", "template.yaml", "Dockerfile"], c: [0], e: ["buildspec.yml is CodeBuild's definition file.", "appspec.yml is CodeDeploy.", "template.yaml is CFN/SAM.", "A Dockerfile builds an image, not the CodeBuild phases."] },
      { t: "s", q: "A CloudFormation stack update fails midway. What happens to already-changed resources by default?", o: ["CloudFormation rolls back to the previous working state", "The partial update is kept as-is", "All resources are deleted", "You must manually revert changes"], c: [0], e: ["CloudFormation rolls back the entire stack on failure by default.", "Partial updates are not retained.", "Resources aren't deleted; they're restored.", "Manual revert is not required — CFN handles it."] },
      { t: "s", q: "Which CloudFormation resource property prevents a stack from accidentally deleting a production database?", o: ["DeletionPolicy: Retain", "DependsOn", "Condition", "UpdatePolicy"], c: [0], e: ["DeletionPolicy: Retain keeps the resource even if the stack is deleted.", "DependsOn controls creation order.", "Condition controls whether a resource is created.", "UpdatePolicy controls how updates are applied (e.g., rolling updates to ASGs)."] },
      { t: "s", q: "In a SAM template, which resource type creates a Lambda function with a REST API trigger using minimal syntax?", o: ["AWS::Serverless::Function with an Api event", "AWS::Lambda::Function with a linked AWS::ApiGateway::RestApi", "AWS::Serverless::Api alone", "AWS::CloudFormation::Stack"], c: [0], e: ["SAM's AWS::Serverless::Function with an Api event auto-creates the API Gateway.", "Standard CFN resources require verbose wiring.", "The Api resource alone doesn't create the function.", "A nested stack doesn't create Lambda+API directly."] },
    ],
  },
  {
    name: "CodePipeline & artifacts",
    explanation: "CodePipeline orchestrates stages (source → build → deploy). Outputs flow between stages as artifacts stored in an S3 artifact bucket. CodeBuild compiles and tests; CodeDeploy releases. Understanding which tool owns which step — and that artifacts move through S3 — is commonly tested.",
    questions: [
      { t: "s", q: "In CodePipeline, how are outputs passed between stages (e.g., build output to deploy)?", o: ["As artifacts stored in S3", "Via environment variables only", "Through DynamoDB", "They aren't passed automatically"], c: [0], e: ["Pipeline stages exchange artifacts through an S3 artifact store.", "Env vars aren't the artifact mechanism.", "DynamoDB isn't used for artifacts.", "Artifacts do flow between stages."] },
      { t: "s", q: "Which service compiles source and runs tests within a pipeline?", o: ["AWS CodeBuild", "AWS CodeDeploy", "AWS CodePipeline", "AWS CloudFormation"], c: [0], e: ["CodeBuild builds and tests.", "CodeDeploy releases.", "CodePipeline orchestrates the stages.", "CloudFormation provisions infrastructure."] },
      { t: "s", q: "You want a manual approval step before the production deploy stage in CodePipeline. What do you add?", o: ["An Approval action in the pipeline stage", "A CloudWatch alarm", "A CodeBuild test stage", "An SNS subscription"], c: [0], e: ["An Approval action pauses the pipeline until a designated person approves.", "Alarms monitor metrics, not gate deployments.", "A test stage runs automatically without human approval.", "SNS can notify but can't gate the pipeline."] },
    ],
  },
  {
    name: "Elastic Beanstalk & ECS/ECR",
    explanation: "Elastic Beanstalk is PaaS: you upload code and it provisions EC2, load balancers, auto-scaling, and more automatically. ECS is container orchestration — you define task definitions and services; ECR is the managed Docker registry. Beanstalk deployment policies: All-at-once (downtime), Rolling (reduced capacity during update), Rolling with additional batch (full capacity always), Immutable (full capacity, safest). Beanstalk is ideal for simple web apps; ECS + ECR for containerized microservices.",
    questions: [
      { t: "s", q: "A developer wants to deploy a web app without managing EC2 instances, load balancers, or auto-scaling manually. Best fit?", o: ["Elastic Beanstalk", "Raw EC2 with launch templates", "ECS Fargate", "Lambda"], c: [0], e: ["Beanstalk is PaaS — it provisions and manages the infrastructure for you.", "Raw EC2 requires manual infrastructure management.", "ECS Fargate is container-based and needs a container image.", "Lambda is serverless but not suited for traditional long-running web servers."] },
      { t: "s", q: "Where should you store your Docker images to use with ECS?", o: ["Amazon ECR (Elastic Container Registry)", "Amazon S3", "AWS CodeArtifact", "AWS CodeBuild artifacts"], c: [0], e: ["ECR is the managed Docker/OCI image registry that integrates natively with ECS.", "S3 stores objects, not container images.", "CodeArtifact is for package managers (npm, Maven), not container images.", "CodeBuild artifacts are build outputs, not an image registry."] },
      { t: "s", q: "In ECS, what defines the container image, CPU, memory, and environment variables for a task?", o: ["A task definition", "A service definition", "A cluster", "An auto-scaling policy"], c: [0], e: ["Task definitions are the blueprint for how a container should run.", "A service manages how many tasks run and handles replacements.", "A cluster is the logical grouping of resources.", "Auto-scaling controls how many tasks run based on load."] },
      { t: "m", q: "Which Elastic Beanstalk deployment policies guarantee full capacity is maintained throughout the release? (choose two)", o: ["Immutable", "Rolling with additional batch", "Rolling", "All at once"], c: [0, 1], e: ["Immutable launches fresh instances before swapping, so old instances handle all traffic until the swap.", "Rolling with additional batch adds a new batch first, keeping full capacity available at all times.", "Rolling takes instances out of service in batches — capacity is temporarily reduced during the update.", "All at once takes down all instances simultaneously and has full downtime."] },
    ],
  },
  {
    name: "Mock Exam Set 3 Questions",
    explanation: "Comprehensive practice questions from Tutorials Dojo Mock Set 3.",
    questions: SET3_D3_QUESTIONS
  },
  {
    name: "Mock Exam Set 4 Questions",
    explanation: "Comprehensive practice questions from AWS Tutorials Dojo Mock Set 4.",
    questions: SET4_D3_QUESTIONS
  }
];
