import type { RawQuestion } from "../types";

export const SET3_D1_QUESTIONS: RawQuestion[] = [
  {
    t: "s",
    q: "You are developing an application that continuously collects data about player-game interactions and feeds the real-time data into your gaming platform. There is a requirement to make the system highly scalable to accommodate the sudden influx of gamers that will use the platform. Which AWS service will help you achieve this?",
    o: [
      "AWS Kinesis Data Stream",
      "AWS Redshift",
      "AWS Elastic Map Reduce",
      "AWS DynamoDB"
    ],
    c: [
      0
    ],
    e: [
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described."
    ]
  },
  {
    t: "s",
    q: "There is a requirement to improve the performance of your serverless application in AWS by increasing the allocated CPU available for your Lambda functions. Which of the following is the MOST appropriate solution that you should implement to meet this requirement?",
    o: [
      "Use Lambda layers to optimize the performance of the Lambda function.",
      "Configure the concurrency limit of your function to be the same as the account level concurrency limit.",
      "Manually configure the CPU settings of the Lambda function to the maximum value.",
      "Increase the memory configuration of your function."
    ],
    c: [
      3
    ],
    e: [
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines."
    ]
  },
  {
    t: "s",
    q: "A global financial company has hundreds of users from all over the world who regularly upload terabytes of transactional data to a centralized Amazon S3 bucket. Users from different parts of the globe are experiencing delays in uploading data, which in turn affects processing times. The goal is to improve data throughput and ensure consistently fast data transfer to the S3 bucket regardless of the user’s location. Which of the following should be used to satisfy the above requirement?",
    o: [
      "S3 Transfer Acceleration",
      "AWS Transfer for SFTP",
      "Amazon CloudFront",
      "AWS Direct Connect"
    ],
    c: [
      0
    ],
    e: [
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described."
    ]
  },
  {
    t: "s",
    q: "A developer is designing a multi-tiered system which utilizes various AWS resources. The application will be hosted in Elastic Beanstalk, which uses an RDS database and an S3 bucket that is configured to use Server-Side Encryption with Customer-Provided Encryption Keys (SSE-C). In this configuration, Amazon S3 does not store the encryption key you provide but instead, stores a randomly salted hash-based message authentication code (HMAC) value of the encryption key in order to validate future requests. Which of the following is a valid consideration that the developer should keep in mind when implementing this architecture?",
    o: [
      "The salted HMAC value can be used to derive the value of the encryption key.",
      "If you lose the encryption key, you lose the object.",
      "The salted HMAC value can be used to decrypt the contents of the encrypted object.",
      "If you lose the encryption key, the salted HMAC value can be used to decrypt the object."
    ],
    c: [
      1
    ],
    e: [
      "Incorrect: This option is incorrect for the scenario described.",
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described."
    ]
  },
  {
    t: "s",
    q: "A company decided to re-use the same Lambda function for multiple stages of their API, but the function should read data from a different Amazon DynamoDB table depending on which stage is being called. In order to accomplish this, they instructed the developer to pass configuration parameters to a Lambda function through mapping templates in API Gateway. Which of the following is the MOST suitable solution that the developer should use to meet this requirement?",
    o: [
      "Set up traffic shifting with Lambda Aliases.",
      "Create environment variables in the Lambda function.",
      "Use Stage Variables.",
      "Set up an API Gateway Private Integration to the Lambda function."
    ],
    c: [
      2
    ],
    e: [
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines.",
      "Incorrect: This option is incorrect for the scenario described."
    ]
  },
  {
    t: "s",
    q: "A developer is using API Gateway Lambda Authorizer to securely authenticate the API requests to their web application. The authentication process should be implemented using a custom authorization scheme which accepts header and query string parameters from the API caller. Which of the following methods should the developer use to properly implement the above requirement?",
    o: [
      "Token-based Authorization",
      "Amazon Cognito User Pools Authorizer",
      "Request Parameter-based Authorization",
      "Cross-Account Lambda Authorizer"
    ],
    c: [
      2
    ],
    e: [
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines.",
      "Incorrect: This option is incorrect for the scenario described."
    ]
  },
  {
    t: "m",
    q: "A company has a static website running in an Auto Scaling group of Amazon EC2 instances, which should be converted into a dynamic e-commerce web portal. One of the requirements is to use HTTPS to improve the security of the portal and also improve its search ranking as a reputable and secure site. A developer recently requested an SSL/TLS certificate from a third-party certificate authority (CA) which is ready to be imported to AWS. The company is also evaluating the use of AWS Private Certificate Authority to issue internal certificates for other workloads. Which of the following services can the developer use to safely import the SSL/TLS certificate? (Select TWO.)",
    o: [
      "AWS Certificate Manager",
      "IAM certificate store",
      "Amazon Cognito",
      "A private Amazon S3 bucket with versioning enabled",
      "Amazon CloudFront"
    ],
    c: [
      0,
      1
    ],
    e: [
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines.",
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described."
    ]
  },
  {
    t: "s",
    q: "A small retail business hired a developer to replace their spreadsheet-based inventory tracking system. They want an automated system that does the following: Process an inventory replenishment when a stock level goes below a certain threshold Send a notification to the business owner about the inventory and replenishment status. The inventory data has already been migrated to an Amazon DynamoDB table. Which architectural pattern should the developer adopt to meet the requirements?",
    o: [
      "An Event-Driven pattern using DynamoDB Streams for capturing inventory changes, Lambda function for executing business logic, and Amazon SNS for push notifications.",
      "A Scheduled pattern using Amazon EventBridge Scheduler for checking inventory levels, Lambda function for executing business logic, and Amazon SNS for push notifications.",
      "A Batch pattern with Amazon SQS for queuing changes, Lambda function for executing business logic, and Amazon SNS for email notifications.",
      "A Fan-out pattern where Amazon SNS broadcasts orders, triggering Lambda functions for business logic execution and Amazon SNS for push notifications."
    ],
    c: [
      0
    ],
    e: [
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described."
    ]
  },
  {
    t: "s",
    q: "An online role-playing video game requires cross-device syncing of application-related user data. It must synchronize the user profile data across mobile devices without requiring your own backend. When the device is online, it should synchronize data and notify other devices immediately that an update is available. Which of the following is the most suitable feature that you have to use to meet this requirement?",
    o: [
      "Amazon Cognito Sync",
      "AWS Device Farm",
      "Amazon Cognito User Pools",
      "Amazon Cognito Identity Pools"
    ],
    c: [
      0
    ],
    e: [
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described."
    ]
  },
  {
    t: "s",
    q: "A mobile game has a DynamoDB table named TutorialsDojoScores which keeps track of the users and their respective scores. Each item in the table is identified by the FighterId attribute as its partition key and the FightTitle attribute as the sort key. A developer needs to retrieve data from non-key attributes of the table named DojoTopScores and DojoDateTime attributes. Which type of index should the developer add in the table to speed up queries on non-key attributes?",
    o: [
      "Global Secondary Index",
      "Sparse Index",
      "Primary Index",
      "Local Secondary Index"
    ],
    c: [
      0
    ],
    e: [
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described."
    ]
  },
  {
    t: "s",
    q: "A developer is working on an online game based on a popular movie, which may have a few users in its first few weeks of release. However, it is expected to grow and reach millions of concurrent users, with terabytes or more of new data generated per day. The database must seamlessly handle hundreds of thousands of reads and writes per second. Which of the following would be the MOST ideal data store to choose for this application?",
    o: [
      "Amazon DynamoDB",
      "Amazon Redshift",
      "Amazon S3",
      "Amazon RDS"
    ],
    c: [
      0
    ],
    e: [
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described."
    ]
  },
  {
    t: "s",
    q: "The developer has built a real-time IoT device monitoring application that leverages Amazon Kinesis Data Stream to ingest data. The application uses several EC2 instances for processing. Recently, the developer has observed a steady increase in the rate of data flowing into the stream, indicating that the stream’s capacity must be scaled up to sustain optimal performance. What should the developer do to increase the capacity of the stream?",
    o: [
      "Split every shard in the stream.",
      "Merge every shard in the stream.",
      "Upgrade the instance type of the EC2 instances.",
      "Integrate Amazon Data Firehose with the Amazon Kinesis Data Stream to increase the capacity of the stream."
    ],
    c: [
      0
    ],
    e: [
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described."
    ]
  },
  {
    t: "s",
    q: "A developer has been instructed to configure Cross-Region Replication (CRR) to their S3 bucket as part of the company’s disaster recovery plan. She is using the put-bucket-replication AWS CLI to enable CRR on the bucket but it fails whenever she attempts to issue the command. However, the same command works for the other S3 buckets. Which of the following options is the MOST likely reason for this issue?",
    o: [
      "S3 Transfer Acceleration is not enabled in the bucket.",
      "The bucket should be configured as a static web hosting first.",
      "Versioning is not enabled in the bucket.",
      "Amazon S3 Object Lock is enabled in the bucket."
    ],
    c: [
      2
    ],
    e: [
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines.",
      "Incorrect: This option is incorrect for the scenario described."
    ]
  },
  {
    t: "s",
    q: "A developer has enabled API Caching on his application endpoints in Amazon API Gateway. For testing purposes, he wants to fetch the latest data, and not the cache data, whenever he sends a GET request with a Cache-Control: max-age=0 header to a specific resource. Which of the following policies will allow him to invalidate the cache for requests?",
    o: [
      "{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [\n    {\n      \"Effect\": \"Deny\",\n      \"Action\": [\n        \"execute-api:InvalidateCache\"\n      ],\n      \"Resource\": [\n        \"arn:aws:execute-api:region:account-id:api-id/stage-name/GET/resource-path-specifier\"\n      ]\n    }\n  ]\n}",
      "{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [\n    {\n      \"Effect\": \"Deny\",\n      \"Action\": [\n        \"execute-api:*\"\n      ],\n      \"Resource\": [\n        \"arn:aws:execute-api:region:account-id:api-id/stage-name/GET/resource-path-specifier\"\n      ]\n    }\n  ]\n}",
      "{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": [\n        \"execute-api:InvalidateCache\"\n      ],\n      \"Resource\": [\n        \"arn:aws:execute-api:region:account-id:api-id/stage-name/GET/resource-path-specifier\"\n      ]\n    }\n  ]\n}",
      "{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": [\n        \"execute-api:Invoke\"\n      ],\n      \"Resource\": [\n        \"arn:aws:execute-api:region:account-id:api-id/stage-name/GET/resource-path-specifier\"\n      ]\n    }\n  ]\n}"
    ],
    c: [
      2
    ],
    e: [
      "Incorrect: This is a Deny policy, which blocks cache invalidation.",
      "Incorrect: This is a Deny policy, which blocks all API Gateway actions.",
      "Correct: This Allow policy explicitly grants permissions for the execute-api:InvalidateCache action, allowing cache invalidation.",
      "Incorrect: This policy allows general API execution (Invoke), not cache invalidation."
    ]
  },
  {
    t: "s",
    q: "An application is hosted in Elastic Beanstalk with an ElastiCache cluster that acts as a database cache layer for accessing its data in DynamoDB. It is currently configured to write the data to the cache only if there is a cache miss, which causes the data in the cache to become stale. A developer is instructed to ensure that the data in the cache is always current and to minimize wasted space in the cluster by automatically deleting the data that are never read. What is the BEST way to implement this to satisfy the given requirement?",
    o: [
      "Implement Lazy Loading in the application in conjunction with the Write Through caching strategy.",
      "Use a Write Through caching strategy.",
      "Implement a Write Through caching strategy in the application and enable TTL in Elasticache.",
      "Use a Lazy Loading caching strategy."
    ],
    c: [
      2
    ],
    e: [
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines.",
      "Incorrect: This option is incorrect for the scenario described."
    ]
  },
  {
    t: "s",
    q: "A developer is creating a React application whose source code is hosted in GitHub. To help ensure proper functionality and identify any UI issues before going live, the developer must perform end-to-end (E2E) testing using Cypress. Which combination of actions should the developer take? (Select Two) Connect the Github repository to AWS Amplify Hosting",
    o: [
      "Update the amplify.yml file with appropriate configuration settings for Cypress.",
      "Include the location of the Cypress configuration file in the aws-exports.js file.",
      "Create an application in AWS Amplify Studio. Clone the application’s source code in a local environment and run amplify pull --appId APP_ID --envName ENV_NAME",
      "Update the amplifyconfiguration.json with appropriate configuration settings for Cypress."
    ],
    c: [
      0
    ],
    e: [
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described."
    ]
  },
  {
    t: "s",
    q: "There is a requirement to postpone the delivery of new messages to an SQS queue for a number of seconds. You must configure the queue to ensure that any messages that you send remain invisible to consumers for a duration of time specified. Which of the following SQS feature should you use to meet this requirement?",
    o: [
      "Visibility Timeouts",
      "Delay Queue",
      "Long Polling",
      "Short Polling"
    ],
    c: [
      1
    ],
    e: [
      "Incorrect: This option is incorrect for the scenario described.",
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described."
    ]
  },
  {
    t: "s",
    q: "A developer is building an online game in AWS which will be using a NoSQL database with DynamoDB. Each player data has an average size of 3.5 KB and it is expected that the game will send 150 eventually consistent read requests per second. How may Read Capacity Units (RCU) should the developer provision to the table?",
    o: [
      "300",
      "150",
      "600",
      "75"
    ],
    c: [
      3
    ],
    e: [
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines."
    ]
  },
  {
    t: "s",
    q: "You are developing an online learning platform using Lambda, Elastic Beanstalk, and DynamoDB. There is a requirement that whenever a new customer is added to the DynamoDB table, it will invoke a Lambda function that sends a welcome email to the customer. Which of the following is the MOST suitable solution that you should use to implement this feature?",
    o: [
      "Use Amazon EventBridge (Amazon CloudWatch Events) to track all new data in your table and configure it as the event source for the Lambda function.",
      "Use Amazon Kinesis Data Streams to track all new data in your table and configure it as the event source for the Lambda function.",
      "Enable DynamoDB Streams and configure it as the event source for the Lambda function.",
      "Enable DynamoDB Transactions and configure it as the event source for the Lambda function."
    ],
    c: [
      2
    ],
    e: [
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines.",
      "Incorrect: This option is incorrect for the scenario described."
    ]
  },
  {
    t: "s",
    q: "You are managing an application which is composed of an SQS queue and an Auto Scaling group of EC2 instances. Recently, your customers are complaining that there are a lot of incidents where their orders are being erroneously sent twice. What should you do to rectify this problem?",
    o: [
      "Use a Standard Queue and provide the Message Deduplication ID for each message.",
      "Use a FIFO (First-In-First-Out) Queue by disabling the content-based deduplication.",
      "Use a Standard Queue and provide the Message Group ID for each message.",
      "Use a FIFO (First-In-First-Out) Queue and provide the Message Deduplication ID for each message."
    ],
    c: [
      3
    ],
    e: [
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines."
    ]
  },
  {
    t: "m",
    q: "You were recently hired as a developer for a leading insurance firm in Asia which has a hybrid cloud architecture with AWS. The project that was assigned to you involves setting up a static website using Amazon S3 with a CORS configuration as shown below: <?xml version=\"1.0\" encoding=\"UTF-8\"?> <CORSConfiguration xmlns=\"http://s3.amazonaws.com/doc/2006-03-01/\"> <CORSRule> <AllowedOrigin>https://tutorialsdojo.com</AllowedOrigin> <AllowedMethod>GET</AllowedMethod> <AllowedMethod>PUT</AllowedMethod> <AllowedMethod>POST</AllowedMethod> <AllowedMethod>DELETE</AllowedMethod> <AllowedHeader>*</AllowedHeader> <ExposeHeader>ETag</ExposeHeader> <ExposeHeader>x-amz-meta-custom-header</ExposeHeader> <MaxAgeSeconds>3600</MaxAgeSeconds> </CORSRule> </CORSConfiguration> Which of the following statements are TRUE with regards to this S3 configuration? (Select TWO.) All HTTP Methods are allowed.",
    o: [
      "The request will fail if the x-amz-meta-custom-header header is not included.",
      "It allows a user to view, add, remove or update objects inside the S3 bucket from the domain tutorialsdojo.com.",
      "This configuration authorizes the user to perform actions on the S3 bucket.",
      "This will cause the browser to cache the response of the preflight OPTIONS request for 1 hour."
    ],
    c: [
      1,
      3
    ],
    e: [
      "Incorrect: This option is incorrect for the scenario described.",
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines."
    ]
  },
  {
    t: "s",
    q: "A serverless application, which uses a Lambda function integrated with API Gateway, provides data to a front-end application written in ReactJS. The users are complaining that they are getting HTTP 504 errors intermittently when they are using the application in peak times. The developer found no errors in the CloudWatch logs of the Lambda function. Which of the following is the MOST likely cause of this issue?",
    o: [
      "There is an authorization failure occurring between API Gateway and the Lambda function.",
      "The memory allocated for the Lambda function is insufficient",
      "The API Gateway automatically enabled throttling in peak times which caused the HTTP 504 errors.",
      "The underlying Lambda function has been running for more than 29 seconds causing the API Gateway request to time out."
    ],
    c: [
      3
    ],
    e: [
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines."
    ]
  },
  {
    t: "s",
    q: "A clickstream application uses Amazon Kinesis Data Stream for real-time processing. PutRecord API calls are being used by the producer to send data to the stream. However, there are cases where the producer intermittently restarted while doing the processing, which resulted in sending the same data twice to the stream. This inadvertently causes duplication of entries in the data stream, which affects the processing of the consumers. Which of the following should you implement to resolve this issue?",
    o: [
      "Embed a primary key within the record.",
      "Split shards of the data stream.",
      "Add more shards.",
      "Merge shards of the data stream."
    ],
    c: [
      0
    ],
    e: [
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described."
    ]
  },
  {
    t: "s",
    q: "A company is developing an online system that lets patients schedule appointments with their preferred doctors at medical centers all over the country. The company uses Amazon DynamoDB as its primary database. The DynamoDB Streams feature is enabled on the DynamoDB table to capture all changes made to the booking data. A Lambda function integrated with Amazon EventBridge (Amazon CloudWatch Events) is used to process the data stream every 36 hours and then store the results in an S3 bucket. There are a lot of updated items in DynamoDB that are not sent to the S3 bucket, even though there are no errors in the logs. Which of the following is the MOST appropriate solution for this issue?",
    o: [
      "Increase the interval of running your function to 48 hours.",
      "Set the value of StreamViewType parameter in DynamoDB Streams to NEW_AND_OLD_IMAGES.",
      "Decrease the interval of running your function to 24 hours.",
      "Set the value of StreamViewType parameter in DynamoDB Streams to NEW_IMAGE."
    ],
    c: [
      2
    ],
    e: [
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines.",
      "Incorrect: This option is incorrect for the scenario described."
    ]
  },
  {
    t: "s",
    q: "A Lambda function is over 80 MB in size, which exceeds the deployment package size limit for direct uploads. You want to refactor the function to pull in additional code and other dependencies from another source, which will reduce the size of the deployment. Which feature of Lambda should you use in order to implement the above task?",
    o: [
      "Environment Variable",
      "Execution Context",
      "Layers",
      "Alias"
    ],
    c: [
      2
    ],
    e: [
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines.",
      "Incorrect: This option is incorrect for the scenario described."
    ]
  },
  {
    t: "s",
    q: "Your team is developing a serverless application, which is composed of multiple Lambda functions which process data from an SQS queue and stores the results to an RDS database. To comply with the strict IT policy of the company, you were instructed to configure these functions to share the same connection string that should be properly secured and encrypted. What should you do to protect, encrypt, and share your database credentials in AWS?",
    o: [
      "Use AWS Systems Manager Parameter Store as a Secure String Parameter.",
      "Store the database credentials as environment variables with KMS encryption which will be shared by the Lambda functions.",
      "Use IAM DB Authentication in RDS to allow encrypted connections from each Lambda function.",
      "Encrypt the database credentials and store them in an S3 bucket which the Lambda functions can fetch."
    ],
    c: [
      0
    ],
    e: [
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described."
    ]
  },
  {
    t: "s",
    q: "A developer will be building a game data feed application which will continuously collect data about player-game interactions and feed the data into your gaming platform. The application uses the Kinesis Client Library to process the data stream from the Amazon Kinesis Data Streams and stores the data to Amazon DynamoDB. It is required that the system should have enough shards and EC2 instances in order to handle failover and adequately process the amount of data coming in and out of the stream. Which of the following ratio of the number of Kinesis shards to EC2 worker instances should the developer implement to achieve the above requirement in the most cost-effective and highly available way?",
    o: [
      "4 shards : 8 instances",
      "1 shard : 6 instances",
      "6 shards : 1 instance",
      "4 shards : 2 instances"
    ],
    c: [
      3
    ],
    e: [
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines."
    ]
  },
  {
    t: "s",
    q: "A web application running in Amazon Elastic Beanstalk reads and writes a large number of related items in DynamoDB and processes each item one at a time. The network overhead of these transactions causes degradation in the application’s performance. You were instructed by your manager to quickly refactor the application but without introducing major code changes such as implementing concurrency management or multithreading. Which of the following solutions is the EASIEST method to implement that will improve the application performance in a cost-effective manner?",
    o: [
      "Enable DynamoDB Streams.",
      "Upgrade the EC2 instances to a higher instance type.",
      "Use DynamoDB Batch Operations API for GET, PUT, and DELETE operations.",
      "Refactor the application to use DynamoDB transactional read and write APIs ."
    ],
    c: [
      2
    ],
    e: [
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines.",
      "Incorrect: This option is incorrect for the scenario described."
    ]
  },
  {
    t: "s",
    q: "A developer wants to deploy a REST API using the CloudFormation template shown below: AWSTemplateFormatVersion: '2010-09-09' Transform: AWS::Serverless-2016-10-31 Description: Simple API Resources: HelloWorldFunction: Type: AWS::Serverless::Function Properties: CodeUri: s3://td-bucket-sam/app.zip PackageType: Zip Handler: app.lambda_handler Runtime: python3.9 Events: HelloWorld: Type: Api Properties: Path: /hello Method: get Outputs: HelloWorldApi: Description: \"API Gateway endpoint URL\" Value: !Sub \"https://${ServerlessRestApi}.execute-api.${AWS::Region}.amazonaws.com/tdojo/hello/\" Which changes should be done so that the newly created API endpoint can be referenced to other stacks?",
    o: [
      "Include the Export property in the original template’s Outputs section. Then use the Ref function in other templates to retrieve the exported value.",
      "Specify HelloWorldApi as parameter when using the Fn::ImportValue function in other templates.",
      "Include the Export property in the original template’s Outputs section. Then use the Fn::ImportValue function in other templates to retrieve the exported value.",
      "Add the AWS::Include transform in the original template to directly import the HelloWorldFunction resource to other templates."
    ],
    c: [
      2
    ],
    e: [
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines.",
      "Incorrect: This option is incorrect for the scenario described."
    ]
  },
  {
    t: "s",
    q: "You are developing a Node.js application which uses a DynamoDB database. The architecture should be designed to allow you to query over a single partition of the table, as specified by the partition key value in the query. It should also support both eventually consistent and strongly consistent reads. What should you do to satisfy this requirement?",
    o: [
      "Add a local secondary index after the table has been created.",
      "Add a global secondary index before the table is created.",
      "Add a local secondary index before the table is created.",
      "Add a global secondary index after the table has been created."
    ],
    c: [
      2
    ],
    e: [
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines.",
      "Incorrect: This option is incorrect for the scenario described."
    ]
  },
  {
    t: "m",
    q: "The read and write operations to an Amazon DynamoDB table are throttled, causing errors in a stateful application that maintains user sessions. Despite checking Amazon CloudWatch metrics, the consumed capacity units have not exceeded the provisioned capacity. Upon further investigation, it is found that a “hot partition” is being accessed more frequently than others by downstream services. What should be done to resolve this issue with MINIMAL cost? (Select TWO.)",
    o: [
      "Increase the amount of read or write capacity for your table.",
      "Use DynamoDB Accelerator (DAX).",
      "Refactor your application to distribute your read and write operations as evenly as possible across your table.",
      "Implement read sharding to distribute workloads evenly.",
      "Implement error retries and exponential backoff."
    ],
    c: [
      2,
      4
    ],
    e: [
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines."
    ]
  },
  {
    t: "s",
    q: "You are using an AWS Lambda function to process records in an Amazon Kinesis Data Streams stream which has 100 active shards. The Lambda function takes an average of 10 seconds to process the data and the stream is receiving 50 new items per second. Which of the following statements are TRUE regarding this scenario?",
    o: [
      "The Lambda function has 500 concurrent executions.",
      "There will be at most 100 Lambda function invocations running concurrently.",
      "The Lambda function will throttle the incoming requests due to the excessive number of Kinesis shards.",
      "The Kinesis shards must be merged to increase the data capacity of the stream as well as the concurrency execution of the Lambda function."
    ],
    c: [
      1
    ],
    e: [
      "Incorrect: This option is incorrect for the scenario described.",
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described."
    ]
  },
  {
    t: "s",
    q: "A mobile game has a serverless backend in AWS which is composed of Lambda, API Gateway, and DynamoDB. It writes 100 items per second to the DynamoDB table and the size is 1.5 KB per item. The table has a provisioned WCU of 100 but the write requests are still being throttled by DynamoDB. What is the MOST suitable solution in order to rectify this throttling issue?",
    o: [
      "Use strong consistency in the write operations.",
      "Implement database caching with an ElastiCache cluster.",
      "Increase the WCU to 200.",
      "Enable DynamoDB Accelerator (DAX)."
    ],
    c: [
      2
    ],
    e: [
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines.",
      "Incorrect: This option is incorrect for the scenario described."
    ]
  },
  {
    t: "s",
    q: "A company is using OpenAPI, which is also known as Swagger, for the API specifications of their REST web services that are hosted on their on-premises data center. They want to migrate their system to AWS using Lambda and API Gateway. In line with this, you are instructed to create a new API and populate it with the resources and methods from their Swagger definition. Which of the following is the EASIEST way to accomplish this task?",
    o: [
      "Import their Swagger or OpenAPI definitions to API Gateway using the AWS Console.",
      "Use AWS SAM to migrate and deploy the company's web services to API Gateway.",
      "Use CodeDeploy to migrate and deploy the company's web services to API Gateway.",
      "Create models and templates for request and response mappings based on the company's API definitions."
    ],
    c: [
      0
    ],
    e: [
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described."
    ]
  },
  {
    t: "s",
    q: "A software engineer is developing a serverless application which will use a DynamoDB database. One of the requirements is that each write request should return the total number of write capacity units consumed, with subtotals for the table and any secondary indexes that were affected by the operation. What should be done to accomplish this feature?",
    o: [
      "Add the ReturnConsumedCapacity parameter with a value of INDEXES in every write request.",
      "Add the ReturnValues parameter with a value of INDEXES in every write request.",
      "Add the ReturnConsumedCapacity parameter with a value of TOTAL in every write request.",
      "Add the ReturnValues parameter with a value of TOTAL in every write request."
    ],
    c: [
      0
    ],
    e: [
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described."
    ]
  },
  {
    t: "s",
    q: "A developer has recently released a new Lambda function which calculates accruals, interests, and other financial data. This function must have a streamlined integration setup with API Gateway. The requirement is to pass the incoming request from the client as the input to the backend Lambda function, via HTTPS, in the following format: { \"resource\": \"Resource path\", \"path\": \"Path parameter\", \"httpMethod\": \"Incoming request's method name\" \"headers\": {String containing incoming request headers} \"multiValueHeaders\": {List of strings containing incoming request headers} \"queryStringParameters\": {query string parameters } \"multiValueQueryStringParameters\": {List of query string parameters} \"pathParameters\": {path parameters} \"stageVariables\": {Applicable stage variables} \"requestContext\": {Request context, including authorizer-returned key-value pairs} \"body\": \"A JSON string of the request payload.\" \"isBase64Encoded\": \"A boolean flag to indicate if the applicable request payload is Base64-encode\" } Which of the following options is the MOST appropriate method to use to meet this requirement?",
    o: [
      "Lambda custom integration",
      "Lambda proxy integration",
      "HTTP custom integration",
      "HTTP Proxy integration"
    ],
    c: [
      1
    ],
    e: [
      "Incorrect: This option is incorrect for the scenario described.",
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described."
    ]
  },
  {
    t: "s",
    q: "A commercial bank is developing an online auction application with a DynamoDB database that will allow customers to bid for real estate properties from the comforts of their homes. The application should allow the minimum acceptable price established by the bank prior to the auction. The opening bid entered by the staff must be at least the minimum bid and the new bids submitted by the customers should be greater than the current bid. The application logic has already been implemented but the DynamoDB database calls should also be tailored to meet the requirements. Which of the following is the MOST effective solution that will satisfy the requirement in this scenario?",
    o: [
      "Use an optimistic locking strategy in your database calls to ensure that the new bid submitted by the customer is greater than the current bid.",
      "Configure the database calls of the application to use conditional updates and conditional writes with a condition expression that will check if the new bid submitted by the customer is greater than the current bid.",
      "Enable DynamoDB Transactions to automatically check the minimum acceptable price as well as the current and new bid price.",
      "Use DynamoDB Streams and a Lambda function to track the current bid price and compare against all of the new bids submitted by the customers."
    ],
    c: [
      1
    ],
    e: [
      "Incorrect: This option is incorrect for the scenario described.",
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described."
    ]
  },
  {
    t: "s",
    q: "An application experiences a sluggish response whenever there is a surge in requests involving read queries. The developer has already attempted to improve performance by optimizing the queries. However, the problem still persists even after applying the change. The application is hosted in an Amazon ECS Cluster and uses a MySQL database backed by Amazon RDS. Which of the following could the developer do to resolve the performance issue? (Select TWO.)",
    o: [
      "Cache the database response using Amazon CloudFront.",
      "Implement a Multi-AZ deployment configuration for the RDS DB instance.",
      "Replace the database with Amazon MemoryDB for Redis",
      "Implement database caching using Amazon ElastiCache.",
      "Set up read replicas for the RDS database instance and route read queries to these replicas."
    ],
    c: [
      3
    ],
    e: [
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines.",
      "Incorrect: This option is incorrect for the scenario described."
    ]
  },
  {
    t: "s",
    q: "A batch application is hosted in an Auto Scaling group of On-Demand EC2 instances which consumes and processes the messages from an SQS queue. The system works well but there are times that the consumers process the same message twice. Upon investigation, you found out that if the consumer takes a long time to process the message, that exact same message becomes available again to other consumers, which causes duplicate processing. Which of the following is the BEST solution that the developer should implement to meet this requirement?",
    o: [
      "Configure the queue to use short polling by setting the WaitTimeSeconds parameter of the ReceiveMessage request to 0.",
      "Configure the queue to use long polling by setting the Receive Message Wait Time parameter to a value greater than 0.",
      "Set the visibility timeout to the maximum time that it takes your application to process and delete a message from the queue.",
      "Postpone the delivery of new messages by using a delay queue."
    ],
    c: [
      2
    ],
    e: [
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines.",
      "Incorrect: This option is incorrect for the scenario described."
    ]
  },
  {
    t: "s",
    q: "A developer is designing a multi-threaded e-commerce application that will be reading and writing data on a DynamoDB table. There will be a lot of people who will use the application to update the price of items in the table at the same time. The application should prevent an update operation from modifying an item if one of its attributes has a certain value. Which of the following is the most suitable solution that the developer should use in this application?",
    o: [
      "Use pessimistic locking and conditional writes.",
      "Use optimistic locking and conditional writes.",
      "Use batch operations.",
      "Use atomic counters."
    ],
    c: [
      1
    ],
    e: [
      "Incorrect: This option is incorrect for the scenario described.",
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described."
    ]
  },
  {
    t: "s",
    q: "A company is developing a distributed system which will use a Lambda function that will be invoked asynchronously. In the event of failure, the function must be retried twice before sending the unprocessed events to an Amazon SQS queue through the use of Dead Letter Queue (DLQ). Which of the following is the correct way to implement a DLQ in Lambda?",
    o: [
      "Specify the AWS Service Namespace of the SQS Queue in the AWS::Lambda::Function resource of the CloudFormation template that you’ll use for deploying the function.",
      "Specify the AWS Service Namespace of the SQS Queue in the Lambda function’s DeadLetterConfig parameter.",
      "Specify the Amazon Resource Name of the SQS Queue in the Lambda function’s DeadLetterConfig parameter.",
      "Specify the Amazon Resource Name of the SQS Queue in the Transform section of the AWS SAM template that you’ll use for deploying the function."
    ],
    c: [
      2
    ],
    e: [
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines.",
      "Incorrect: This option is incorrect for the scenario described."
    ]
  },
  {
    t: "s",
    q: "A leading technology company is building a serverless application in AWS using the C++ programming language. The application will use DynamoDB as its data store, Lambda as its compute service, and API Gateway as its API Proxy. You are tasked to handle the deployment of the compute resources to AWS. Which of the following steps should you implement to properly deploy the serverless application?",
    o: [
      "Create a new layer which contains the Custom Runtime for C++ and then launch a Lambda function which uses that runtime.",
      "Use AWS Serverless Application Model (AWS SAM) to deploy the Lambda function.",
      "Create a Lambda function with the C++ code and directly upload it to AWS.",
      "Upload the deployment package to S3 and then use CloudFormation to deploy Lambda function with a reference to the S3 URL of the package."
    ],
    c: [
      0
    ],
    e: [
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described."
    ]
  }
];

export const SET3_D2_QUESTIONS: RawQuestion[] = [
  {
    t: "m",
    q: "A developer runs a shell script that uses the aws s3 cp CLI to upload a large file to an S3 bucket. The S3 bucket is configured with Server-side encryption with AWS Key Management Service (SSE-KMS). An Access Denied error always shows up whenever the developer uploads a file with a size of 100 GB or more. However, whenever he uploads a smaller file, the request succeeds. Which of the following are possible reasons why this issue is happening? (Select TWO.)",
    o: [
      "The AWS CLI S3 commands perform a multipart upload when the file is large.",
      "The developer does not have the kms:Encrypt permission.",
      "The developer does not have the kms:Decrypt permission.",
      "The maximum size that can be encrypted in KMS is only 100 GB.",
      "The developer's IAM permission has an attached inline policy that restricts him from uploading a file to S3 with a size of 100 GB or more."
    ],
    c: [
      0,
      2
    ],
    e: [
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described."
    ]
  },
  {
    t: "m",
    q: "A developer is working on an application that will process files encrypted with a data key generated from a KMS key. The application needs to decrypt the files locally before it can proceed with the processing of the files. Which of the following are valid and secure steps in decrypting data? (Select TWO.)",
    o: [
      "Use the encrypted data key to decrypt data locally, then erase the encrypted data key from memory.",
      "Use the Decrypt operation to decrypt the plaintext data key.",
      "Use the plaintext data key to decrypt data locally, then erase the plaintext data key from memory.",
      "Use the plaintext data key to decrypt data locally, then erase the encrypted data key from memory.",
      "Use the Decrypt operation to decrypt the encrypted data key."
    ],
    c: [
      2,
      4
    ],
    e: [
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines."
    ]
  },
  {
    t: "s",
    q: "You are developing a new batch job for the enterprise application suite in your company, which is hosted in an Auto Scaling group of EC2 instances behind an ELB. The application is using an S3 bucket configured with Server-Side Encryption with AWS KMS Keys (SSE-KMS). The batch job must upload files to the bucket using the default AWS KMS key to protect the data at rest. What should you do to satisfy this requirement with the LEAST amount of configuration?",
    o: [
      "Include the x-amz-server-side-encryption header with a value of aws:kms in your upload request.",
      "Include the x-amz-server-side-encryption header with a value of AES256 in your upload request.",
      "Include the x-amz-server-side-encryption header with a value of aws:kms as well as the x-amz-server-side-encryption-aws-kms-key-id header containing the ID of the default AWS KMS key in your upload request.",
      "Include the x-amz-server-side​-encryption​-customer-algorithm, x-amz-server-side-encryption-customer-key, and x-amz-server-side-encryption-customer-key-MD5 headers with appropriate values in the upload request."
    ],
    c: [
      0
    ],
    e: [
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described."
    ]
  },
  {
    t: "s",
    q: "An EBS-backed EC2 instance has been recently reported to contain a malware that could spread to your other instances. To fix this security vulnerability, you will need to attach its root EBS volume to a new EC2 instance which hosts a security program that can scan viruses, worms, Trojan horses, or spyware. What steps would you take to detach the root volume from the compromised EC2 instance?",
    o: [
      "Unmount the volume from the OS and then detach.",
      "Unmount the volume, stop the instance, and then detach.",
      "Detach the volume from the AWS Console. AWS takes care of unmounting the volume for you.",
      "Stop the instance then detach the volume."
    ],
    c: [
      3
    ],
    e: [
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines."
    ]
  },
  {
    t: "s",
    q: "A cryptocurrency exchange portal has a key management service hosted in their on-premises data center, which stores encryption keys and uses an RSA asymmetric encryption algorithm. The company has recently implemented a hybrid cloud architecture in AWS and you were assigned to migrate the exchange portal to their cloud infrastructure. For security compliance, the keys should be stored in dedicated, third-party validated hardware security modules under your exclusive control. Which of the following is the BEST solution that you should implement to meet the above requirement?",
    o: [
      "Import the encryption keys from your on-premises key management service to AWS CloudHSM.",
      "Import the encryption keys from your on-premises key management service to AWS Secrets Manager as KMS Keys.",
      "Use AWS KMS to store and manage the encryption keys.",
      "Develop a custom key management service using the AWS Encryption SDK."
    ],
    c: [
      0
    ],
    e: [
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described."
    ]
  },
  {
    t: "s",
    q: "A newly hired developer has been instructed to debug an application. She tried to access the X-Ray console to view service maps and segments but her current access is insufficient. Which of the following is the MOST appropriate managed policy that should be granted to the developer?",
    o: [
      "AWSXrayReadOnlyAccess",
      "AWSXrayFullAccess",
      "AWSXRayDaemonWriteAccess",
      "AmazonS3ReadOnlyAccess"
    ],
    c: [
      0
    ],
    e: [
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described."
    ]
  },
  {
    t: "s",
    q: "A company has an AWS account with an ID of 061218980612 and has a centralized Java web application hosted in AWS Elastic Beanstalk that is used by different departments. The developer used the iam create-account-alias --account-alias finance-dept AWS CLI command to create a user-friendly identifier for the finance department. For faster troubleshooting, the application must also be configured to easily trace all its downstream requests, such as Apache HTTP requests, AWS SDK requests, and SQL queries made using a JDBC driver. The ability to send traces to multiple different tracing backends without having to re-instrument the application code is required as well. Which of the following options is the MOST suitable solution that the developer implements?",
    o: [
      "Use the https://061218980612.aws.signin.amazon.com/console sign-in page URL for the AWS account. Set up and configure the Amazon CloudWatch Evidently to trace all the downstream API calls.",
      "Use the https://finance-dept.aws.signin.amazon.com/console sign-in page URL for the AWS account. Set up and configure an IAM Roles Anywhere trust model in Elastic Beanstalk with a proper source identity prefix to trace all the downstream API calls.",
      "Use the https://finance-dept.signin.aws.amazon.com/console sign-in page URL for the AWS account. Install the AWS Distro for OpenTelemetry Collector and set up the AWS Distro for OpenTelemetry to trace all the downstream API calls.",
      "Use the https://finance-dept.aws.amazon.com/console sign-in page URL for the AWS account. Install and configure the AWS X-Ray auto-instrumentation Java agent to trace all the downstream API calls."
    ],
    c: [
      2
    ],
    e: [
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines.",
      "Incorrect: This option is incorrect for the scenario described."
    ]
  }
];

export const SET3_D3_QUESTIONS: RawQuestion[] = [
  {
    t: "s",
    q: "A company has a development team that’s heavily relying on AWS CodeBuild, and CodeDeploy. The management would like to further automate its CI/CD process. They requested a system that monitors the status of each code change, from the moment it’s committed through to its deployment. Which of the following AWS services will help you achieve this?",
    o: [
      "Amazon CodeGuru",
      "AWS CodePipeline",
      "AWS Fault Injection Simulator",
      "AWS Elastic Beanstalk"
    ],
    c: [
      1
    ],
    e: [
      "Incorrect: This option is incorrect for the scenario described.",
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described."
    ]
  },
  {
    t: "s",
    q: "A startup has an urgent requirement to deploy their new NodeJS application to AWS. You were assigned to perform the deployment to a service where you don’t need to worry about the underlying infrastructure that runs the application. The service must also automatically handle provisioning, load balancing, scaling, and application health monitoring. Which service will you use to easily deploy and manage the application?",
    o: [
      "AWS Elastic Beanstalk",
      "AWS SAM",
      "AWS CloudFormation",
      "AWS CodeDeploy"
    ],
    c: [
      0
    ],
    e: [
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described."
    ]
  },
  {
    t: "s",
    q: "A developer is designing an application which will be hosted in ECS and uses an EC2 launch type. You need to group your container instances by certain attributes such as Availability Zone, instance type, or custom metadata. After you have defined a group of container instances, you will need to customize Amazon ECS to place tasks on container instances based on the group you specified. Which of the following ECS features provides you with expressions that you can use to group container instances by a specific attribute?",
    o: [
      "Task Placement Strategies",
      "Task Groups",
      "Task Placement Constraints",
      "Cluster Query Language"
    ],
    c: [
      3
    ],
    e: [
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines."
    ]
  },
  {
    t: "s",
    q: "A developer is currently building a scalable microservices architecture where complex applications are decomposed into smaller, independent services. Docker will be used as its application container to provide an optimal way of running small, decoupled services. The developer should also have fine-grained control over the custom application architecture. Which of the following services is the MOST suitable one to use?",
    o: [
      "Elastic Beanstalk",
      "AWS SAM",
      "EC2",
      "ECS"
    ],
    c: [
      3
    ],
    e: [
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines."
    ]
  },
  {
    t: "s",
    q: "You are developing a high-traffic online stocks trading application, which will be hosted in an ECS Cluster and will be accessed by thousands of investors for intraday stocks trading. Each task of the cluster should be evenly placed across multiple Availability Zones to avoid any service disruptions. Which of the following is the MOST suitable placementStrategy configuration that you should use in your task definition?",
    o: [
      "\"placementStrategy\": [\n  {\n    \"type\": \"random\"\n  }\n]",
      "\"placementStrategy\": [\n  {\n    \"field\": \"instanceId\",\n    \"type\": \"spread\"\n  }\n]",
      "\"placementStrategy\": [\n  {\n    \"field\": \"attribute:ecs.availability-zone\",\n    \"type\": \"spread\"\n  }\n]",
      "\"placementStrategy\": [\n  {\n    \"field\": \"memory\",\n    \"type\": \"binpack\"\n  }\n]"
    ],
    c: [
      2
    ],
    e: [
      "Incorrect: Random placement does not guarantee AZ distribution.",
      "Incorrect: Spreading by instanceId distributes tasks across instances rather than Availability Zones.",
      "Correct: Spreading by availability-zone spreads tasks evenly across Availability Zones.",
      "Incorrect: Binpacking by memory consolidates tasks on instances to minimize capacity usage."
    ]
  },
  {
    t: "m",
    q: "A single docker container environment is hosted in Elastic Beanstalk. Your manager instructed you to ensure that the compute resources maintain full capacity during deployments to avoid any degradation of the service or possible down time. Which of the following deployment methods should you use to satisfy the given requirement? (Select TWO.)",
    o: [
      "Rolling",
      "Immutable",
      "Rolling with additional batch",
      "Canary",
      "All at once"
    ],
    c: [
      1,
      2
    ],
    e: [
      "Incorrect: This option is incorrect for the scenario described.",
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines.",
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described."
    ]
  },
  {
    t: "s",
    q: "An application architect manages several AWS accounts for staging, testing, and production environments, which are used by several development teams. For application deployments, the developers use the similar base CloudFormation template for their applications. Which of the following can allow the developer to effectively manage the updates on this template across all AWS accounts with minimal effort?",
    o: [
      "Use AWS CodePipeline to automate the deployment of CloudFormation templates across multiple accounts.",
      "Create and manage stacks on multiple AWS accounts using CloudFormation Change Sets.",
      "Define and manage stack instances on multiple AWS Accounts using CloudFormation Stack Instances.",
      "Update the stacks on multiple AWS accounts using CloudFormation StackSets."
    ],
    c: [
      3
    ],
    e: [
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines."
    ]
  },
  {
    t: "s",
    q: "The current application deployment process of a company is tedious and is prone to errors. They asked a developer to set up CodeDeploy as their deployment service, which can automate their application deployments on their hybrid cloud architecture. Which of the following deployment types does CodeDeploy support? (Select TWO.)",
    o: [
      "In-place deployments to AWS Lambda.",
      "In-place deployments to on-premises servers",
      "Blue/green deployments to ECS.",
      "Blue/green deployments to on-premises servers.",
      "Rolling deployments to ECS."
    ],
    c: [
      1
    ],
    e: [
      "Incorrect: This option is incorrect for the scenario described.",
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described."
    ]
  },
  {
    t: "s",
    q: "You are using AWS Serverless Application Model (AWS SAM) to build and deploy applications in your serverless infrastructure. Your manager instructed you to create a CloudFormation template that includes your SAM script and other service configurations. This template will be used to launch a similar infrastructure in another region. What should you do in order to accomplish this task?",
    o: [
      "Add a Resources section in the template to specify the version of the AWS Serverless Application Model (AWS SAM) to use.",
      "Add a Mappings section in the template to specify the version of the AWS Serverless Application Model (AWS SAM) to use.",
      "Add a Parameters section in the template to specify the version of the AWS Serverless Application Model (AWS SAM) to use.",
      "Add a Transform section in the template to specify the version of the AWS Serverless Application Model (AWS SAM) to use."
    ],
    c: [
      3
    ],
    e: [
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines."
    ]
  },
  {
    t: "m",
    q: "A developer is tasked with automating the deployment of a new microservice in an ECS cluster using AWS CodeDeploy. The developer is writing the AppSpec file to instruct CodeDeploy on how to handle the deployment. Which sets of properties are REQUIRED in the resources section to successfully deploy the microservice? (Select THREE.) NetworkConfiguration targetversion",
    o: [
      "alias",
      "ContainerPort",
      "TaskDefinition",
      "ContainerName"
    ],
    c: [
      1,
      2,
      3
    ],
    e: [
      "Incorrect: This option is incorrect for the scenario described.",
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines.",
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines.",
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines."
    ]
  },
  {
    t: "s",
    q: "For application deployments, a company is using CloudFormation templates, which are regularly updated to map the latest AMI IDs. A developer was assigned to automate the process since the current set up takes a lot of time to execute on a regular basis. Which of the following is the MOST suitable solution that the developer should implement to satisfy this requirement?",
    o: [
      "Set up your Systems Manager State Manager to store the latest AMI IDs and integrate it with your CloudFormation template. Call the update-stack API in CloudFormation whenever you decide to update the EC2 instances in your CloudFormation template.",
      "Integrate AWS Service Catalog with AWS Config to automatically fetch the latest AMI and use it for succeeding deployments.",
      "Integrate CloudFormation with AWS Service Catalog to fetch the latest AMI IDs and automatically use them for succeeding deployments.",
      "Set up CloudFormation with Systems Manager Parameter Store to retrieve the latest AMI IDs for your template. Whenever you decide to update the EC2 instances, call the update-stack API in CloudFormation in your CloudFormation template."
    ],
    c: [
      3
    ],
    e: [
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines."
    ]
  }
];

export const SET3_D4_QUESTIONS: RawQuestion[] = [
  {
    t: "s",
    q: "A web application is currently deployed on an on-demand Amazon EC2 instance that connects to an Amazon RDS database. Users have frequently reported that the application crashes intermittently. The support team has reviewed the logs in Amazon CloudWatch but has been unable to identify the root cause. To enhance troubleshooting, the team needs to monitor additional metrics, including memory utilization, swap usage, and the count of idle and active processes running on the instance. Which solution would be the MOST appropriate to implement in this situation?",
    o: [
      "Use AWS CloudShell to consolidate all metrics in a single dashboard.",
      "Install the CloudWatch agent on the EC2 instance.",
      "Install the AWS X-Ray daemon on the EC2 instance.",
      "Use detailed monitoring in CloudWatch."
    ],
    c: [
      1
    ],
    e: [
      "Incorrect: This option is incorrect for the scenario described.",
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described."
    ]
  },
  {
    t: "s",
    q: "A financial company has a cryptocurrency application that has been hosted in Elastic Beanstalk for a couple of months. Recently, the application’s performance has been degrading, so you decided to check the CPU and memory utilization of the underlying EC2 instances in CloudWatch. You can see the CPU utilization of the instances but not the memory utilization. Which of the following is the MOST likely cause of this issue?",
    o: [
      "CloudWatch does not track memory utilization by default.",
      "The .ebextensions/xray-daemon.config file in Elastic Beanstalk is missing.",
      "The detailed monitoring is not enabled in CloudWatch.",
      "X-Ray Daemon is not installed on the EC2 instances."
    ],
    c: [
      0
    ],
    e: [
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described."
    ]
  },
  {
    t: "s",
    q: "A company has a latency-sensitive service running on AWS Fargate, which is fronted by an Application Load Balancer (ALB). A CloudFront distribution uses the ALB as its origin and presents a custom domain for clients to access the service. The service authenticates requests by validating the JSON Web Token (JWT) obtained from the Authorization header sent by clients. Lately, there has been a significant influx of login attempts from unauthenticated users, which increases the CPU utilization of the Fargate tasks. Which solution would reduce the load on the Fargate tasks in the most operationally efficient manner?",
    o: [
      "Enable auto-scaling on the Fargate tasks.",
      "Create a Lambda function that performs JWT validation. Configure the ALB to route login requests to the Lambda function.",
      "Create a Lambda@Edge function for JWT validation. Attach it to the Origin Response event of the CloudFront distribution.",
      "Create a CloudFront function for JWT validation. Attach it to the Viewer Request event of the CloudFront distribution."
    ],
    c: [
      3
    ],
    e: [
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines."
    ]
  },
  {
    t: "s",
    q: "A company is developing a real-time analytics platform that allows users to submit data through the Amazon API Gateway. The data is processed by AWS Lambda and stored in Amazon S3. However, during high-traffic periods, users experience timeouts despite the Lambda function completing tasks on time. The company needs to analyze API Gateway metrics in Amazon CloudWatch to determine the cause of these timeouts. Which two API Gateway metrics in Amazon CloudWatch should be reviewed to troubleshoot the delay issues? (Select TWO.) Latency",
    o: [
      "4XXError",
      "IntegrationLatency",
      "Count",
      "5XXError"
    ],
    c: [
      1
    ],
    e: [
      "Incorrect: This option is incorrect for the scenario described.",
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described."
    ]
  },
  {
    t: "m",
    q: "A company has an application that is using CloudFront to serve their static contents to their users around the globe. They are receiving a number of bad reviews from their customers lately because it takes a lot of time to log into their website. Sometimes, their users are also getting HTTP 504 errors which is why the developer was instructed to fix this problem immediately. Which of the following combination of options should the developer use together to set up a cost-effective solution for this scenario? (Select TWO.)",
    o: [
      "Launch your application to multiple and geographically disperse VPCs on various AWS regions then create a transit VPC to easily connect all your resources. Use several Lambda functions in each region using the AWS Serverless Application Model (SAM) service to improve the overall application performance.",
      "Customize the content that the CloudFront web distribution delivers to your users using Lambda@Edge, which allows your Lambda functions to execute the authentication process in AWS locations closer to the users.",
      "Launch your application to multiple AWS regions to serve your global users. Use a Route 53 record with latency routing policy to route incoming traffic to the region with the best latency to the user.",
      "Add a Cache-Control max-age directive to your objects in CloudFront and specify the longest practical value for max-age to increase the cache hit ratio of your CloudFront distribution.",
      "Configure an origin failover by creating an origin group with two origins. Specify one as the primary origin and the other as the second origin which CloudFront automatically switches to when the primary origin returns specific HTTP status code failure responses."
    ],
    c: [
      1,
      4
    ],
    e: [
      "Incorrect: This option is incorrect for the scenario described.",
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Incorrect: This option is incorrect for the scenario described.",
      "Correct: This is the correct answer according to official AWS Developer Associate guidelines."
    ]
  }
];
