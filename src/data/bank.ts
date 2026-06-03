// ============================================================
// FILE: src/data/bank.ts
//
// Curated DVA-C02 question bank. 100% offline, no API key.
// All questions original, written to the exam blueprint.
//   t: 's' single | 'm' multi.  o: options.  c: correct idx.  e: explanations.
//
// To grow the bank: add RawQuestion entries under the right concept.
// The `Domain` type enforces the correct shape at edit time.
// ============================================================

import type { Domain } from "../types";

export const BANK: Domain[] = [
  {
    id: "d1", code: "Domain 1", name: "Development with AWS Services", weight: 32,
    concepts: [
      {
        name: "Lambda execution & concurrency",
        explanation: "Lambda runs your code in stateless, short-lived execution environments it manages for you. Reserved concurrency caps (and guarantees) how many simultaneous executions a function can have — useful to protect downstream systems or guarantee capacity. Provisioned concurrency keeps environments pre-warmed to eliminate cold starts. A common gotcha: throttling (TooManyRequestsException) means you've hit a concurrency limit, not a memory or timeout problem.",
        questions: [
          { t: "s", q: "A Lambda function intermittently throttles (TooManyRequestsException) during traffic spikes. How do you guarantee it always has capacity?", o: ["Configure reserved concurrency for the function", "Increase the function timeout", "Increase the memory allocation", "Enable DynamoDB Streams"], c: [0], e: ["Reserved concurrency carves out and guarantees a portion of the account's concurrency for this function.", "Timeout controls how long an invocation runs, not how many can run at once.", "Memory affects CPU/speed, not concurrency limits.", "Streams are unrelated to Lambda concurrency."] },
          { t: "s", q: "What is the primary benefit of provisioned concurrency?", o: ["It keeps execution environments initialized to eliminate cold starts", "It increases maximum memory", "It allows only synchronous invocation", "It reduces per-request price"], c: [0], e: ["Provisioned concurrency pre-warms environments so requests skip cold-start latency.", "Memory is set separately.", "Invocation type is independent of provisioned concurrency.", "It actually adds cost for the warm capacity."] },
          { t: "s", q: "A Lambda is invoked asynchronously; you must capture events that fail after all retries. What do you configure?", o: ["A dead-letter queue or on-failure destination", "A larger timeout", "Reserved concurrency", "An API Gateway authorizer"], c: [0], e: ["Async failures after retries go to a DLQ or failure destination.", "Timeout doesn't capture failures.", "Concurrency limits don't capture failed events.", "Authorizers handle auth, not failures."] },
          { t: "m", q: "Which are secure ways to handle Lambda configuration/secrets? (choose two)", o: ["Reference Secrets Manager or SSM Parameter Store at runtime", "Encrypt environment variables with a KMS key", "Hardcode secrets in the deployment package", "Store secrets in the function description", "Embed secrets in the function name"], c: [0, 1], e: ["Fetching from Secrets Manager / SSM keeps secrets out of code.", "KMS encryption of env vars protects them at rest.", "Hardcoding secrets is a security risk.", "The description is plaintext metadata.", "The name is plaintext metadata."] },
        ],
      },
      {
        name: "DynamoDB data modeling & capacity",
        explanation: "DynamoDB is a key-value/document store where access patterns drive the design. To query efficiently on a non-key attribute you add a Global Secondary Index (GSI) rather than scanning the whole table. Throughput errors usually trace back to a poor partition key creating a 'hot partition'. Capacity comes in on-demand (auto, no planning) or provisioned (you set RCUs/WCUs, optionally with auto scaling). Streams emit item-change events that can trigger Lambda.",
        questions: [
          { t: "s", q: "Your app frequently filters on a non-key attribute. What's the most efficient design?", o: ["Create a Global Secondary Index on that attribute", "Use Scan with a filter expression", "Increase provisioned read capacity", "Enable a Local Secondary Index after creation"], c: [0], e: ["A GSI lets you query that attribute directly and efficiently.", "Scan reads the whole table — expensive and slow.", "More capacity doesn't fix an inefficient access pattern.", "LSIs must be created at table creation and share the partition key."] },
          { t: "s", q: "You see intermittent ProvisionedThroughputExceededException on one partition. Best fix?", o: ["Redesign the partition key to spread access more evenly", "Switch all reads to eventually consistent", "Add a Local Secondary Index", "Increase item TTL"], c: [0], e: ["A hot partition comes from uneven key distribution; fix the key design.", "Consistency mode doesn't solve a hot partition.", "An LSI doesn't redistribute partition load.", "TTL just expires items."] },
          { t: "s", q: "Which DynamoDB feature lets you trigger a Lambda when items change?", o: ["DynamoDB Streams", "Global Secondary Index", "DAX", "Time to Live"], c: [0], e: ["Streams emit item-change records that can invoke Lambda.", "A GSI is for queries.", "DAX is a read cache.", "TTL expires items."] },
          { t: "m", q: "Which statements about DynamoDB capacity modes are true? (choose two)", o: ["On-demand scales automatically with no capacity planning", "Provisioned mode can use auto scaling for RCUs/WCUs", "On-demand requires you to set RCUs and WCUs", "Provisioned mode can never be changed once set", "On-demand never throttles under any load"], c: [0, 1], e: ["On-demand handles scaling for you.", "Provisioned auto scaling adjusts capacity to demand.", "On-demand needs no capacity settings.", "You can switch modes (with limits).", "Extreme bursts can still be throttled."] },
        ],
      },
      {
        name: "API Gateway integration & caching",
        explanation: "API Gateway fronts your backends. Lambda proxy integration passes the entire request to your function and expects a specifically shaped response, which is the simplest, most common pattern. Stage-level caching stores responses for repeated GETs to cut backend load and latency. Throttling and usage plans protect your backends from spikes.",
        questions: [
          { t: "s", q: "How do you reduce backend calls for frequently requested, rarely changing GET responses?", o: ["Enable API Gateway caching on the stage", "Increase Lambda memory", "Add a Lambda authorizer", "Use a mock integration"], c: [0], e: ["Stage caching serves repeated responses without hitting the backend.", "Memory is unrelated to caching.", "Authorizers handle auth, not caching.", "Mock integrations return canned responses, not cached backend data."] },
          { t: "s", q: "Which integration passes the full HTTP request to a Lambda function?", o: ["Lambda proxy integration", "Mock integration", "Non-proxy AWS service integration", "HTTP integration"], c: [0], e: ["Proxy integration forwards the entire request and expects a structured response.", "Mock returns static responses.", "Non-proxy requires mapping templates.", "HTTP integration targets an HTTP endpoint, not Lambda."] },
        ],
      },
      {
        name: "S3 & event-driven messaging (SQS/SNS)",
        explanation: "S3 stores objects and can emit events (object created/deleted) to Lambda, SQS, or SNS. SQS is a queue for decoupled, pull-based processing — one consumer handles each message, great for buffering and smoothing bursts. SNS is pub/sub fan-out that broadcasts one message to many subscribers. A classic 'fan-out' pattern is SNS → multiple SQS queues.",
        questions: [
          { t: "s", q: "You need to decouple a producer from a consumer and buffer bursts of work for one worker pool. Which service?", o: ["Amazon SQS", "Amazon SNS", "Kinesis Data Firehose", "AWS Step Functions"], c: [0], e: ["SQS queues buffer messages for pull-based workers.", "SNS is pub/sub fan-out, not a buffer.", "Firehose delivers streams to stores.", "Step Functions orchestrates workflows."] },
          { t: "s", q: "You want one event to notify several independent subscribers at once. Which service?", o: ["Amazon SNS", "Amazon SQS", "DynamoDB Streams", "S3 alone"], c: [0], e: ["SNS fans out a message to many subscribers.", "SQS delivers to one consumer per message.", "Streams are DynamoDB-specific.", "S3 alone doesn't fan out."] },
          { t: "m", q: "Which are valid S3 event-notification destinations? (choose two)", o: ["AWS Lambda", "Amazon SQS", "Amazon EC2 directly", "AWS CodeBuild directly", "IAM"], c: [0, 1], e: ["S3 can invoke Lambda on events.", "S3 can publish events to SQS.", "EC2 isn't a direct S3 event target.", "CodeBuild isn't a direct S3 event target.", "IAM isn't an event target."] },
        ],
      },
    ],
  },
  {
    id: "d2", code: "Domain 2", name: "Security", weight: 26,
    concepts: [
      {
        name: "IAM roles & policy evaluation",
        explanation: "IAM controls who can do what. Compute that needs AWS access (EC2, Lambda, ECS) should assume an IAM role rather than holding long-lived access keys. Cross-account access uses role assumption via STS. Policy evaluation is deny-by-default: everything is implicitly denied until an Allow grants it, and any explicit Deny always wins over an Allow.",
        questions: [
          { t: "s", q: "An app on EC2 needs to read from S3. Best-practice for credentials?", o: ["Attach an IAM role to the EC2 instance", "Store access keys in environment variables", "Bake access keys into the AMI", "Use root account keys"], c: [0], e: ["Instance roles deliver rotating temporary credentials automatically.", "Long-lived keys in env vars are a leak risk.", "Baking keys into an AMI is a serious exposure.", "Root keys should never be used by apps."] },
          { t: "s", q: "An app must access resources in another AWS account. Best practice?", o: ["Assume a cross-account IAM role via STS", "Share long-lived access keys", "Use the other account's root credentials", "Make the resources public"], c: [0], e: ["Cross-account role assumption gives temporary, scoped access.", "Sharing keys is insecure.", "Root creds must never be shared.", "Public access is a security risk."] },
          { t: "m", q: "Which are true about IAM policy evaluation? (choose two)", o: ["An explicit Deny overrides any Allow", "All requests are implicitly denied by default", "An explicit Allow overrides an explicit Deny", "Resource policies are ignored when a role is used", "IAM grants cross-account access by default"], c: [0, 1], e: ["Explicit Deny always wins.", "Deny-by-default is the baseline.", "Deny beats Allow, not the reverse.", "Resource policies still apply.", "Cross-account access must be explicitly granted."] },
        ],
      },
      {
        name: "Cognito: user pools vs identity pools",
        explanation: "Cognito has two halves people mix up. User Pools are the directory: they sign users up/in and issue JWT tokens (ID, access, refresh). Identity Pools (federated identities) take a verified identity and hand back temporary AWS credentials via STS so the user can call AWS services directly. Authenticate with a User Pool, then exchange for AWS access through an Identity Pool.",
        questions: [
          { t: "s", q: "Which Cognito feature signs users up/in and issues JWT tokens?", o: ["User Pools", "Identity Pools", "Cognito Sync", "STS directly"], c: [0], e: ["User Pools are the user directory that issues tokens.", "Identity Pools issue AWS credentials, not sign-in tokens.", "Sync handles cross-device data.", "STS issues credentials but isn't the sign-in directory."] },
          { t: "s", q: "After authentication, which provides temporary AWS credentials to call AWS services?", o: ["Identity Pools", "User Pools", "API Gateway authorizer", "IAM users"], c: [0], e: ["Identity Pools exchange a verified identity for temporary AWS credentials.", "User Pools issue tokens, not AWS credentials.", "Authorizers gate API access; they don't mint AWS credentials.", "IAM users are long-lived, not per-end-user temporary creds."] },
        ],
      },
      {
        name: "Encryption with KMS",
        explanation: "KMS manages encryption keys and is used by S3, EBS, Secrets Manager, and more. Envelope encryption is the core pattern: data is encrypted with a data key, and that data key is itself encrypted by a customer master key (CMK). KMS never stores your data, and all key usage is logged in CloudTrail for audit.",
        questions: [
          { t: "s", q: "What is envelope encryption in KMS?", o: ["Encrypt data with a data key, then encrypt that data key with a CMK", "Encrypt the same data twice with one key", "Store the key inside the encrypted object", "Use TLS for data in transit"], c: [0], e: ["That two-tier wrapping is exactly envelope encryption.", "Double-encrypting with one key isn't the pattern.", "Keys aren't stored in the object.", "That's transit security, not envelope encryption."] },
          { t: "m", q: "Which are true about KMS? (choose two)", o: ["It integrates with S3, EBS, and Secrets Manager", "Key usage can be audited via CloudTrail", "It stores your application data", "CMKs can be freely exported in plaintext", "It supports symmetric keys only"], c: [0, 1], e: ["KMS is widely integrated across AWS services.", "CloudTrail records every key operation.", "KMS manages keys, not your data.", "CMK key material can't be exported in plaintext.", "KMS supports both symmetric and asymmetric keys."] },
        ],
      },
      {
        name: "Secrets Manager & Parameter Store",
        explanation: "Both store configuration values you fetch at runtime instead of hardcoding. Secrets Manager adds automatic rotation (e.g., RDS credentials) and is priced per secret. SSM Parameter Store is free for standard parameters and great for general config; its SecureString type is KMS-encrypted for sensitive values. Pick Secrets Manager when you need built-in rotation.",
        questions: [
          { t: "s", q: "You need automatic rotation of database credentials. Which service is purpose-built for this?", o: ["AWS Secrets Manager", "SSM Parameter Store (standard)", "Environment variables", "An S3 bucket"], c: [0], e: ["Secrets Manager supports built-in automatic rotation.", "Standard Parameter Store has no native rotation.", "Env vars don't rotate.", "S3 isn't a secrets store."] },
          { t: "s", q: "Which stores an encrypted config value cheaply for general app settings?", o: ["SSM Parameter Store SecureString", "A hardcoded constant", "The Lambda function name", "A CloudWatch metric"], c: [0], e: ["SecureString parameters are KMS-encrypted and cost-effective.", "Hardcoding is insecure.", "The name is plaintext.", "Metrics aren't config storage."] },
        ],
      },
    ],
  },
  {
    id: "d3", code: "Domain 3", name: "Deployment", weight: 24,
    concepts: [
      {
        name: "CodeDeploy strategies & appspec",
        explanation: "CodeDeploy automates releases. All-at-once shifts everything immediately (fast, risky); canary shifts a small slice first then the rest after a wait; linear shifts equal increments on a schedule. The appspec.yml file defines deployment lifecycle hooks (and for Lambda, the version/alias and hooks).",
        questions: [
          { t: "s", q: "Which CodeDeploy configuration shifts ALL traffic to the new version at once?", o: ["All-at-once", "Canary", "Linear", "Rolling with batches"], c: [0], e: ["All-at-once cuts over immediately.", "Canary shifts a portion first.", "Linear shifts in equal steps.", "Batches shift gradually too."] },
          { t: "s", q: "Which deployment shifts a small percentage first, waits, then shifts the rest?", o: ["Canary", "Linear", "All-at-once", "Blue/green only"], c: [0], e: ["Canary = small slice, bake, then remainder.", "Linear shifts equal increments repeatedly.", "All-at-once does no gradual shift.", "Blue/green is an environment strategy, not this traffic pattern."] },
          { t: "s", q: "Which file defines CodeDeploy lifecycle hooks (e.g., for a Lambda deployment)?", o: ["appspec.yml", "buildspec.yml", "template.yaml", "pipeline.json"], c: [0], e: ["appspec.yml drives CodeDeploy.", "buildspec.yml is for CodeBuild.", "template.yaml is CloudFormation/SAM.", "There's no standard pipeline.json hook file."] },
        ],
      },
      {
        name: "CloudFormation, SAM & CodeBuild",
        explanation: "Infrastructure as code on AWS centers on CloudFormation. SAM is a shorthand layer: the Transform macro expands SAM's concise syntax into full CloudFormation resources at deploy time. CodeBuild uses buildspec.yml to define build phases and commands. Knowing which file belongs to which service is a frequent exam point.",
        questions: [
          { t: "s", q: "What does the SAM Transform macro do?", o: ["Expands SAM shorthand into full CloudFormation resources", "Deploys without using CloudFormation", "Runs your unit tests", "Creates a CI/CD pipeline automatically"], c: [0], e: ["Transform turns SAM syntax into standard CloudFormation.", "SAM deploys via CloudFormation under the hood.", "It doesn't run tests.", "It doesn't build pipelines."] },
          { t: "s", q: "Which file defines build commands and phases for CodeBuild?", o: ["buildspec.yml", "appspec.yml", "template.yaml", "Dockerfile"], c: [0], e: ["buildspec.yml is CodeBuild's definition file.", "appspec.yml is CodeDeploy.", "template.yaml is CFN/SAM.", "A Dockerfile builds an image, not the CodeBuild phases."] },
        ],
      },
      {
        name: "CodePipeline & artifacts",
        explanation: "CodePipeline orchestrates stages (source → build → deploy). Outputs flow between stages as artifacts stored in an S3 artifact bucket. CodeBuild compiles and tests; CodeDeploy releases. Understanding which tool owns which step — and that artifacts move through S3 — is commonly tested.",
        questions: [
          { t: "s", q: "In CodePipeline, how are outputs passed between stages (e.g., build output to deploy)?", o: ["As artifacts stored in S3", "Via environment variables only", "Through DynamoDB", "They aren't passed automatically"], c: [0], e: ["Pipeline stages exchange artifacts through an S3 artifact store.", "Env vars aren't the artifact mechanism.", "DynamoDB isn't used for artifacts.", "Artifacts do flow between stages."] },
          { t: "s", q: "Which service compiles source and runs tests within a pipeline?", o: ["AWS CodeBuild", "AWS CodeDeploy", "AWS CodePipeline", "AWS CloudFormation"], c: [0], e: ["CodeBuild builds and tests.", "CodeDeploy releases.", "CodePipeline orchestrates the stages.", "CloudFormation provisions infrastructure."] },
        ],
      },
    ],
  },
  {
    id: "d4", code: "Domain 4", name: "Troubleshooting & Optimization", weight: 18,
    concepts: [
      {
        name: "CloudWatch metrics, logs & alarms",
        explanation: "CloudWatch is the observability backbone. Standard metrics appear automatically, but custom business metrics must be explicitly published by your app (PutMetricData). Alarms watch a metric against a threshold and trigger actions — commonly an SNS notification. Logs are separate from metrics; metric filters can derive metrics from log patterns.",
        questions: [
          { t: "s", q: "Your Lambda's custom business metric isn't showing in CloudWatch. Most likely cause?", o: ["The app must explicitly publish it as a custom metric", "CloudWatch only retains metrics for one hour", "Custom metrics require X-Ray", "Metrics need a VPC endpoint to appear"], c: [0], e: ["Custom metrics only exist if your code publishes them.", "Retention is far longer than an hour.", "X-Ray is tracing, not custom metrics.", "A VPC endpoint isn't required for metrics to appear."] },
          { t: "s", q: "How do you get notified when an error metric crosses a threshold?", o: ["Create a CloudWatch alarm with an SNS action", "Enable CloudTrail data events", "Increase log retention", "Add a dead-letter queue"], c: [0], e: ["Alarm + SNS is the standard notification path.", "CloudTrail logs API calls, not metric thresholds.", "Retention doesn't notify you.", "A DLQ captures failed messages, not alerts."] },
          { t: "s", q: "How can you create a metric from a pattern in your application logs?", o: ["A CloudWatch Logs metric filter", "An X-Ray segment", "A CloudTrail trail", "An SQS queue"], c: [0], e: ["Metric filters turn log patterns into CloudWatch metrics.", "X-Ray traces requests.", "CloudTrail logs API calls.", "SQS is a queue."] },
        ],
      },
      {
        name: "X-Ray distributed tracing",
        explanation: "X-Ray traces a request as it hops across services so you can pinpoint latency bottlenecks and errors. It builds a service map of dependencies and uses a sampling rate to keep overhead and cost low. It complements (does not replace) CloudWatch Logs, and your services need light instrumentation/SDK integration.",
        questions: [
          { t: "s", q: "What does AWS X-Ray primarily help with?", o: ["Tracing requests across distributed services to find latency bottlenecks", "Storing logs long-term", "Managing secrets", "Deploying applications"], c: [0], e: ["X-Ray is end-to-end request tracing.", "That's CloudWatch Logs / S3.", "That's Secrets Manager.", "That's CodeDeploy/CodePipeline."] },
          { t: "m", q: "Which are true about X-Ray? (choose two)", o: ["It uses a sampling rate to limit overhead and cost", "It can show a service map of dependencies", "It fully replaces CloudWatch Logs", "It requires zero instrumentation", "It only works on EC2"], c: [0, 1], e: ["Sampling keeps cost/overhead manageable.", "The service map visualizes dependencies.", "It complements, not replaces, logs.", "Some instrumentation is needed.", "It works across many compute types."] },
        ],
      },
      {
        name: "Caching & performance",
        explanation: "Caching cuts latency and load, and the right cache depends on the source. DAX (DynamoDB Accelerator) gives DynamoDB microsecond read latency. ElastiCache (Redis/Memcached) caches general application data. CloudFront caches content at edge locations worldwide for low-latency global delivery.",
        questions: [
          { t: "s", q: "Which gives DynamoDB reads microsecond latency via an in-memory cache?", o: ["DAX (DynamoDB Accelerator)", "CloudFront", "S3 Transfer Acceleration", "ElastiCache for Memcached"], c: [0], e: ["DAX is purpose-built in-memory caching for DynamoDB.", "CloudFront caches edge content.", "Transfer Acceleration speeds S3 uploads.", "ElastiCache caches general data, not DynamoDB-native."] },
          { t: "s", q: "To cache and accelerate global delivery of static content with low latency, use:", o: ["Amazon CloudFront", "Amazon DAX", "Amazon SQS", "AWS X-Ray"], c: [0], e: ["CloudFront caches content at edge locations worldwide.", "DAX caches DynamoDB reads.", "SQS is a queue.", "X-Ray is tracing."] },
        ],
      },
    ],
  },
];

export const TOPICS: Record<string, string[]> = {
  d1: ["Lambda", "DynamoDB", "API Gateway", "S3", "SQS/SNS"],
  d2: ["IAM", "Cognito", "KMS", "Secrets Manager", "STS"],
  d3: ["CodePipeline", "CodeBuild", "CodeDeploy", "CloudFormation", "SAM"],
  d4: ["CloudWatch", "X-Ray", "CloudTrail", "Caching", "DAX"],
};

export const TOTAL_CONCEPTS = BANK.reduce((s, d) => s + d.concepts.length, 0);
export const BANK_TOTAL = BANK.reduce((s, d) => s + d.concepts.reduce((n, c) => n + c.questions.length, 0), 0);