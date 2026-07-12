import type { RawQuestion } from "../types";

export const SET4_D1_QUESTIONS: RawQuestion[] = [
  {
    t: "s",
    q: "The operating cost of a serverless application is quite high and you are instructed to look for ways to lower the costs. As part Of its processing, a Lambda function sends 320 strongly consistent read requests per second to a DynamoDB table which has a provisioned RCU Of 5440. The average size Of items stored in the database is 17 KB. Which of the following is the MOST suitable action that should you do to make the application more cost-effective while maintaining its performance?",
    o: [
      "Implement exponential backoff.",
      "Switch the table from using provisioned to on-demand mode.",
      "Decrease the provisioned RCU down to 800.",
      "Set the provisioned RCU to 1600."
    ],
    c: [
      3
    ],
    e: [
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Correct: This option is correct based on AWS architectural and developer guidelines."
    ]
  },
  {
    t: "m",
    q: "QUESTON You are a developer for a global technology company, which heavily uses AWS with regional offices in San Francisco, Manila, and Bangalore. Most of the clients of your company are using serverless computing in which you are responsible for ensuring that their applications are working efficiently. Which of the following options are valid considerations in improving the performance of your Lambda function? (Select TWO.)",
    o: [
      "An increase in memory size triggers an equivalent increase in CPU available to your function.",
      "You have to install the X-Ray daemon in Lambda to enable active tracing.",
      "Lambda automatically creates Elastic IPs that enable your function to connect securely to other resources within your private VPC.",
      "You can throttle all incoming executions and stop processing any invocations to your function by setting concurrency to false.",
      "The concurrent execution limit is enforced against the sum of the concurrent executions of all functions."
    ],
    c: [
      0,
      4
    ],
    e: [
      "Correct: This option is correct based on AWS architectural and developer guidelines.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Correct: This option is correct based on AWS architectural and developer guidelines."
    ]
  },
  {
    t: "s",
    q: "A serverless application, which uses a DynamoDB database, is experiencing throttling issues during peak times. TO troubleshoot the problem, you were instructed to get the total number of write capacity units consumed for the table and any secondary indexes whenever the UpdateItem operation is sent. In this scenario, what is the MOST appropriate value for the ReturnConsumedCapacity parameter that you should set in the update request?",
    o: [
      "TRUE",
      "INDEXES",
      "TOTAL",
      "NONE"
    ],
    c: [
      1
    ],
    e: [
      "Incorrect: This choice is incorrect for this scenario.",
      "Correct: This option is correct based on AWS architectural and developer guidelines.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario."
    ]
  },
  {
    t: "s",
    q: "QUESTION A startup has recently launched their new mobile game and is gaining a lot of new users everyday. The founders plan to add a new feature which will enable cross-device syncing Of user profile data across mobile devices to improve the user experience. Which of the following services should they use to meet this requirement?",
    o: [
      "AWS Amplify",
      "User Pools",
      "Identity Pools",
      "Cognito Sync"
    ],
    c: [
      3
    ],
    e: [
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Correct: This option is correct based on AWS architectural and developer guidelines."
    ]
  },
  {
    t: "s",
    q: "You are planning to launch a Lambda function integrated with API Gateway. It is required to specify how the incoming request data is mapped to the integration request and how the resulting integration response data is mapped to the method response. Which of the following options is the MOST appropriate method use to meet this requirement?",
    o: [
      "Lambda proxy integration",
      "Lambda custom integration",
      "HTTP Proxy integration",
      "HTTP custom integration"
    ],
    c: [
      1
    ],
    e: [
      "Incorrect: This choice is incorrect for this scenario.",
      "Correct: This option is correct based on AWS architectural and developer guidelines.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario."
    ]
  },
  {
    t: "m",
    q: "A developer wants to perform additional processing on newly inserted items in Amazon DynamoDB using AWS Lambda. In order to implement this requirement, the developer will have to use DynamoDB Streams to automatically send the new items in the table to a Lambda function for processing. Given the scenario, what steps should be performed by the developer to integrate his/her DynamoDB to his/her Lambda functions? (select TWO.)",
    o: [
      "Select AWSLambdaDynamoDBExecutionRole managed policy as the function's execution role.",
      "Create an SNS topic to capture new records from DynamoDB.",
      "Select AWSLambdaBasicExecutionRole managed policy as the function's execution role.",
      "Create an event source mapping in Lambda to send records from your stream to a Lambda function.",
      "Create a trigger for a Firehose stream that uses a Lambda function for data processing."
    ],
    c: [
      0,
      3
    ],
    e: [
      "Correct: This option is correct based on AWS architectural and developer guidelines.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Correct: This option is correct based on AWS architectural and developer guidelines.",
      "Incorrect: This choice is incorrect for this scenario."
    ]
  },
  {
    t: "m",
    q: "A company is legally obligated to keep transaction containing Personally Identifiable Information (PII) for a duration of five years. These are stored in S3. To handle data redaction, the company has develcved Lambda functions with naming conventions starting as RedactP11— [role] , where repreæntsdifferent roles. The company wants to provide varying levels of redaction on each role, ensuring each user only sees the necessary data. Only a single copy of the should be maintained. Which combination of actions will achieve the given requirements?",
    o: [
      "Create an S3 Access Point for each user role.",
      "Setup an S3 event notification to invoke the RedactPII-[role] function in response to GET",
      "Set up S3 Replication for the bucket.",
      "Use the GetObjectLegalHold API to retrieve the redacted data.",
      "Configure an S3 Object Lambda Access Point for each S3 Access Point name.",
      "Associate the RedactPII-[role] functions with the corresponding S3 Object Lambda Access Point.",
      "Use the GetObject API to retrieve the redacted data."
    ],
    c: [
      0,
      4,
      5
    ],
    e: [
      "Correct: This option is correct based on AWS architectural and developer guidelines.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Correct: This option is correct based on AWS architectural and developer guidelines.",
      "Correct: This option is correct based on AWS architectural and developer guidelines.",
      "Incorrect: This choice is incorrect for this scenario."
    ]
  },
  {
    t: "s",
    q: "You are working as an IT Consultant for a top investment bank in Europe which uses several serverless applications in their AWS account. They just launched a new API Gateway service with a Lambda proxy integration and you were instructed to test out the new API. However, you are getting a connection refused error whenever you use this Invoke URL http://779protaw8.execute—api.us—east—l.amazonaws.com/tutorialsdojo/ of the API Gateway. Which Of the following is the MOST likely cause Of this issue?",
    o: [
      "You are not using WebSocket in invoking the API.",
      "You are not using HTTPS in invoking the API.",
      "You are not using FTP in invoking the API.",
      "You are not using HTTP/2 in invoking the API."
    ],
    c: [
      1
    ],
    e: [
      "Incorrect: This choice is incorrect for this scenario.",
      "Correct: This option is correct based on AWS architectural and developer guidelines.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario."
    ]
  },
  {
    t: "s",
    q: "A software engineer is building a serverless application in AWS consisting Of Lambda, API Gateway, and DynamoDB. She needs to implement a custom authorization scheme that uses a bearer token authentication strategy such as OAuth or SAML to determine the caller's identity. Which of the features of API Gateway is the MOST suitable one that she should use to build this feature?",
    o: [
      "Resource Policy",
      "Lambda Authorizers",
      "Cross-Account Lambda Authorizer",
      "Cross-Origin Resource Sharing (CORS)"
    ],
    c: [
      1
    ],
    e: [
      "Incorrect: This choice is incorrect for this scenario.",
      "Correct: This option is correct based on AWS architectural and developer guidelines.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario."
    ]
  },
  {
    t: "s",
    q: "An application running on an EC2 instance regularly fetches large amounts of data from multiple S3 buckets. A data analysis team will perform ad-hoc queries on the data. TO reduce costs and optimize the process, the application requires a solution that can perform serverless queries directly on the data stored in S3 without the need to load it into a database first. Which is the MOST suitable service that will help accx)mplish this requirement?",
    o: [
      "Amazon EMR",
      "Amazon Athena",
      "AWS Step Functions",
      "Amazon Redshift Spectrum"
    ],
    c: [
      1
    ],
    e: [
      "Incorrect: This choice is incorrect for this scenario.",
      "Correct: This option is correct based on AWS architectural and developer guidelines.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario."
    ]
  },
  {
    t: "m",
    q: "A developer is planning to add a global secondary index in a DynamoDB table. This will allow the application to query a specific index that can span all of the data in the base table, across all partitions. Which of the following should the developer consider when using this type of index? (Select TWO.)",
    o: [
      "Queries or scans on this index consume capacity units from the index, not from the base table.",
      "Queries on this index support eventual consistency only.",
      "For each partition key value, the total size of all indexed items must be 10 GB or less.",
      "Queries or scans on this index consume read capacity units from the base table.",
      "When you query this index, you can choose either eventual consistency or strong consistency."
    ],
    c: [
      0,
      1
    ],
    e: [
      "Correct: This option is correct based on AWS architectural and developer guidelines.",
      "Correct: This option is correct based on AWS architectural and developer guidelines.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario."
    ]
  },
  {
    t: "s",
    q: "QUESTION A media company seeks to protect its copyrighted images from unauthorized distribution. They want images uploaded to their Amazon S3 bucket to be automatically watermarked. A developer has already prepared the Lambda function for this image-processing job. Which option must the developer configure to automatically invoke the function at each upload?",
    o: [
      "Use S3 Object Lambda to watermark images on retrieval and apply watermarks dynamically before the images are served to users.",
      "Set up an Amazon S3 Event Notification to trigger the Lambda function when an event is detected in the bucket. ObjectCreated:Put",
      "Enable S3 Storage Lens to monitor the bucket and configure the Lambda function to be invoked whenever the metrics indicate a new object creation.",
      "Configure an S3 Lifecycle to transition images to the INTELLIGENT TIERING storage class.",
      "Use S3 Inventory to generate a report of images that weren't watermarked."
    ],
    c: [
      1
    ],
    e: [
      "Incorrect: This choice is incorrect for this scenario.",
      "Correct: This option is correct based on AWS architectural and developer guidelines.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario."
    ]
  },
  {
    t: "s",
    q: "n. Your application is hosted on an Auto Scaling group Of EC2 with a DynamoDB database. There were a lot Of data discrepancy issues where the changes made by one user were always overwritten by another user. You noticed that this usually happens whenever there are a lot of people updating the same data. What should you do to solve this problem?",
    o: [
      "Implement a pessimistic locking strategy in your application source code by designating one property to store the version number.",
      "Implement an optimistic locking strategy in your application source code by designating one property to store the version number.",
      "Use DynamoDB global tables and implement an optimistic locking strategy.",
      "Use DynamoDB global tables and implement a pessimistic locking strategy."
    ],
    c: [
      1
    ],
    e: [
      "Incorrect: This choice is incorrect for this scenario.",
      "Correct: This option is correct based on AWS architectural and developer guidelines.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario."
    ]
  },
  {
    t: "m",
    q: "QUESTION The company that you are working for recently decided to migrate and transform their monolithic application on-premises to a Lambda application. It is your responsibility to ensure that application works effectively in AWS. Which Of the following are the best practices in developing Lambda functions?",
    o: [
      "Take advantage of Execution Context reuse to improve the performance of your function.",
      "Use AWS Lambda Environment Variables to pass operational parameters to your function.",
      "Use Amazon CloudWatch Logs for troubleshooting.",
      "Include the core logic in the handler.",
      "Use recursive code."
    ],
    c: [
      0,
      1
    ],
    e: [
      "Correct: This option is correct based on AWS architectural and developer guidelines.",
      "Correct: This option is correct based on AWS architectural and developer guidelines.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario."
    ]
  },
  {
    t: "s",
    q: "QUESTION A development team has recently completed building their serverless application. They must zip their code artifacts, upload them to Amazon S3, produce the package template file for deployment, and deploy it to AWS. Which is the MOST suitable to use to automate the deployment steps?",
    o: [
      "sam deploy",
      "sam package",
      "sam publish",
      "aws cloudformation deploy"
    ],
    c: [
      0
    ],
    e: [
      "Correct: This option is correct based on AWS architectural and developer guidelines.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario."
    ]
  },
  {
    t: "s",
    q: "Your Lambda function initializes a lot Of external dependencies such as database and HTTP endpoints, which are required for data processing. It also fetches static data with a size of 20 MB from a third-party provider over the Internet every time the function is invoked. This adds significant time in the total processing, which greatly affects the performance of their serverless application. Which of the following should you do to improve the performance of your function?",
    o: [
      "Increase the CPU allocation of the function by submitting a service limit increase ticket to AWS.",
      "Add more memory to your function.",
      "Use unreserved concurrency for your function.",
      "Place the database and HTTP initialization logic outside the Lambda function handler and store the external files in the /tmp directory."
    ],
    c: [
      3
    ],
    e: [
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Correct: This option is correct based on AWS architectural and developer guidelines."
    ]
  },
  {
    t: "s",
    q: "\"Sid\" : , Which Of the following statements is true about uploading data to this S3 bucket?",
    o: [
      "The bucket will deny object uploads unless the request includes the x-amz-server-side-encryption header with a value of aws:kms.",
      "The bucket will deny object uploads unless the request includes the x-amz-server-side-encryption header with a value of true.",
      "The bucket will deny object uploads unless the request includes the x-amz-server-side-encryption header with a value of AES256.",
      "The bucket will deny object uploads unless the request includes the x-amz-server-side-encryption header with a value of Null."
    ],
    c: [
      2
    ],
    e: [
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Correct: This option is correct based on AWS architectural and developer guidelines.",
      "Incorrect: This choice is incorrect for this scenario."
    ]
  },
  {
    t: "s",
    q: "A leading insurance firm is hosting its customer portal in Elastic Beanstalk, which has an RDS database in AWS. The support team in your company discovered a lot of SQL injection attempts and cross-site scripting attacks on the portal, which is starting to affect the production environment. Which of the following services should you implement to mitigate this attack?",
    o: [
      "Amazon GuardDuty",
      "Network Access Control List",
      "WAF",
      "AWS Firewall Manager"
    ],
    c: [
      2
    ],
    e: [
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Correct: This option is correct based on AWS architectural and developer guidelines.",
      "Incorrect: This choice is incorrect for this scenario."
    ]
  },
  {
    t: "s",
    q: "A developer has a Node.js function running in AWS Currently, the code initializes a database connection to an Amazon RDS database every time the Lambda function is executed, and closes the connection before the function ends. What feature in AWS Lambda will allow the developer to reuse the already existing database connection",
    o: [
      "Environment variables",
      "Execution context",
      "AWS Lambda is not capable of maintaining connections.",
      "Event source mapping"
    ],
    c: [
      1
    ],
    e: [
      "Incorrect: This choice is incorrect for this scenario.",
      "Correct: This option is correct based on AWS architectural and developer guidelines.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario."
    ]
  },
  {
    t: "s",
    q: "You are developing an online game where the app preferences and game state of the player must be synchronized across devices. It should also allow multiple users to synchronize and collaborate shared data in real time. Which of the following is the MOST appropriate solution that you should implement in this scenario?",
    o: [
      "Integrate AWS Amplify to your mobile app.",
      "Integrate AWS AppSync to your mobile app.",
      "Integrate Amazon Pinpoint to your mobile app.",
      "Integrate Amazon Cognito Sync to your mobile app."
    ],
    c: [
      1
    ],
    e: [
      "Incorrect: This choice is incorrect for this scenario.",
      "Correct: This option is correct based on AWS architectural and developer guidelines.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario."
    ]
  },
  {
    t: "s",
    q: "A company has assigned a developer to automate its department's patch management, data synchronization, and other recurring tasks. The developer needs a service to multiple AWS services into serverless workflows. Which of the following is the MOST cost-effective service the developer should implement in this scenario?",
    o: [
      "AWS Elastic Beanstalk",
      "AWS Step Functions",
      "AWS Batch",
      "AWS Lambda"
    ],
    c: [
      1
    ],
    e: [
      "Incorrect: This choice is incorrect for this scenario.",
      "Correct: This option is correct based on AWS architectural and developer guidelines.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario."
    ]
  },
  {
    t: "m",
    q: "A developer has just finished writing a serverless application using AWS SAM (Serverless Application Model) on a local machine. There is a SAM template ready and the corresponding Lambda function in a directory. The developer now wants to deploy this application to AWS. Which combination of steps should the developer follow to successfully deploy the SAM application? (Select THREE)",
    o: [
      "Build the SAM template in the local environment, package the SAM application for deployment, and deploy the SAM template from an Amazon S3 bucket.",
      "Build the SAM template using the AWS SDK for AWS CodeDeploy.",
      "Deploy the SAM template from AWS CodePipeline.",
      "Build the SAM template in an Amazon EC2 instance."
    ],
    c: [
      0,
      1,
      2
    ],
    e: [
      "Correct: This option is correct based on AWS architectural and developer guidelines.",
      "Correct: This option is correct based on AWS architectural and developer guidelines.",
      "Correct: This option is correct based on AWS architectural and developer guidelines.",
      "Incorrect: This choice is incorrect for this scenario."
    ]
  },
  {
    t: "m",
    q: "Your request to increase your account's concurrent execution limit to 2000 has been recently approved by AWS. There are 10 Lambda functions running in your account and you already specified a concurrency execution limit on one function at 400 and on another function at 200. Which of the following statements are TRUE in this scenario? (Select TWO.)",
    o: [
      "The unreserved concurrency pool is 600.",
      "You can still set a concurrency execution limit of 1300 to a third Lambda function.",
      "You can still set a concurrency execution limit of 1400 to a third Lambda function.",
      "The remaining 1400 concurrent executions will be shared among the other 8 functions.",
      "The combined allocated 600 execution will be shared among the 2 functions."
    ],
    c: [
      2,
      3
    ],
    e: [
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Correct: This option is correct based on AWS architectural and developer guidelines.",
      "Correct: This option is correct based on AWS architectural and developer guidelines.",
      "Incorrect: This choice is incorrect for this scenario."
    ]
  },
  {
    t: "s",
    q: "You were recently hired by a media company that is planning to build a news portal using Elastic Beanstalk and DynamoDB database, which already contains a few data. There is already an existing DynamoDB Table that has an attribute of ArticleName which acts as the partition key and a category attribute as its sort key. You are instructed to develop a feature that will query the ArticleName attribute but will use a different sort key other than the existing one. The feature also requires strong read consistency to fetch the most up-to-date data. Which of the following solutions should you implement?",
    o: [
      "Create a Global Secondary Index which uses the ArticleName attribute and your alternative sort key as projected attributes.",
      "Create a Global Secondary Index that uses the ArticleName attribute and a different sort key.",
      "Create a new DynamoDB table with a Local Secondary Index that uses the ArticleName attribute with a different sort key. Migrate the data from the existing table to the new table.",
      "Create a Local Secondary Index that uses the ArticleName attribute and a different sort key."
    ],
    c: [
      3
    ],
    e: [
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Correct: This option is correct based on AWS architectural and developer guidelines."
    ]
  },
  {
    t: "s",
    q: "A developer is launching a Lambda function that requires access to a MySQL RDS instance that is in a private subnet. Which of the following is the MOST secure way to achieve this?",
    o: [
      "Move your RDS instance to a public subnet.",
      "Ensure that the Lambda function has proper IAM permission to access RDS.",
      "Configure the Lambda function to connect to your VPC.",
      "Expose an endpoint of your RDS to the Internet using an Elastic IP."
    ],
    c: [
      2
    ],
    e: [
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Correct: This option is correct based on AWS architectural and developer guidelines.",
      "Incorrect: This choice is incorrect for this scenario."
    ]
  },
  {
    t: "s",
    q: "A developer recently deployed a serverless application, which consists of a Lambda function, API Gateway, and DynamoDB using the sam deploy CLI command. The Lambda function is invoked through the API Gateway and then processes and stores the data in a DynamoDB table with an average time of 20 minutes. However, the IT Support team noticed that there are several terminated Lambda invocations that happen every day, which is causing data discrepancies. Which of the following options is the MOST likely root cause of this problem?",
    o: [
      "The serverless application should be deployed using the sam publish CLI command instead.",
      "The Lambda function contains a recursive loop and has been running for over 15 minutes.",
      "The failed Lambda invocations have been running for over 15 minutes and reached the maximum execution time.",
      "The concurrent execution limit has been reached."
    ],
    c: [
      2
    ],
    e: [
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Correct: This option is correct based on AWS architectural and developer guidelines.",
      "Incorrect: This choice is incorrect for this scenario."
    ]
  },
  {
    t: "s",
    q: "A developer has recently deployed an application, which is hosted in an Auto Scaling group Of EC2 instances and processes data from an Amazon Kinesis Data Stream. Each Of the EC2 instances has exactly one KCL worker processing one Kinesis data stream which has 10 shards. Due to performance issues, the systems operations team has resharded the data stream to increase the number of open shards to 20. What is the maximum number of running EC2 instances that should ideally be kept to maintain application performance?",
    o: [
      "30",
      "40",
      "10",
      "0",
      "20"
    ],
    c: [
      4
    ],
    e: [
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Correct: This option is correct based on AWS architectural and developer guidelines."
    ]
  },
  {
    t: "m",
    q: "QUESTION The infrastructure Of an application is designed such that a producer sends data to a consumer via HTTPS. The consumer may sometimes take a while to the messages, which can result in unexpected timeouts and cause newer messages not to be acknowledged immediately. TO resolve this issue, a developer decided to introduce an Amazon SQS standard queue into the system. However, duplicate messages are still not being handled properly. What should the developer do to ensure that messages are durably delivered and to prevent duplicate messages? (Select TWO.)",
    o: [
      "Configure the producer to set deduplication IDs for the messages.",
      "Increase the timeout for the acknowledgement response.",
      "Use a delay queue.",
      "Increase the number of consumers polling from your standard queue.",
      "Create a FIFO queue as a replacement for the standard queue."
    ],
    c: [
      0,
      4
    ],
    e: [
      "Correct: This option is correct based on AWS architectural and developer guidelines.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Correct: This option is correct based on AWS architectural and developer guidelines."
    ]
  },
  {
    t: "s",
    q: "QUESTION A financial mobile application has a serverless backend API which Of DynamoDB, Lambda, and Cognito. Due to the confidential financial transactions handled by the mobile application, there is a new requirement provided by the company to add a second authentication method that doesn't rely solely on user name and password. Which of the following is the MOST suitable solution that the developer should implement?",
    o: [
      "Create a custom application that integrates with Amazon Cognito which implements the second layer of authentication.",
      "Integrate multi-factor authentication (MFA) to a user pool in Cognito to protect the identity of your users.",
      "Use a new IAM policy to a user pool in Cognito.",
      "Use with SNS to allow additional authentication via SMS."
    ],
    c: [
      1
    ],
    e: [
      "Incorrect: This choice is incorrect for this scenario.",
      "Correct: This option is correct based on AWS architectural and developer guidelines.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario."
    ]
  },
  {
    t: "s",
    q: "A developer is planning to build a serverless Rust application in AWS using AWS Lambda and Amazon DynamoDB. Much to his disappointment, AWS Lambda does not natively the Rust programming language. Can the developer still proceed with creating serverless Rust applications in AWS given the situation above?",
    o: [
      "Yes. The developer will just have to use AWS Fargate instead of AWS Lambda.",
      "Yes. The developer can submit a request ticket to AWS so that they can provide him a Lambda runtime environment that supports Rust.",
      "No. The developer will have to wait for a new release in AWS Lambda.",
      "Yes. The developer can create a custom runtime for his Rust applications and bootstrap it to an AWS Lambda function."
    ],
    c: [
      3
    ],
    e: [
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Correct: This option is correct based on AWS architectural and developer guidelines."
    ]
  },
  {
    t: "s",
    q: "You are designing the DynamoDB table that will be used by your Node.js application. It will have to handle 10 writes per second and then 20 eventually consistent reads per second where all the items have a size of 2 KB for both operations. Which of the following are the most optimal WCU and RCU that you should provision to the table?",
    o: [
      "40 RCU and 40 WCU",
      "10 RCU and 20 WCU",
      "40 RCU and 20 WCU",
      "20 RCU and 20 WCU"
    ],
    c: [
      1
    ],
    e: [
      "Incorrect: This choice is incorrect for this scenario.",
      "Correct: This option is correct based on AWS architectural and developer guidelines.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario."
    ]
  },
  {
    t: "s",
    q: "QUESTION A company has an application hosted in an On-Demand EC2 in your VPC. The developer has been instructed to create a shell script that the instance's associated public and private IP addresses. What should the developer do to complete this task?",
    o: [
      "Get the public and private IP addresses from AWS CloudTrail.",
      "Get the public and private IP addresses from the instance user data service.",
      "Get the public and private IP addresses from Amazon CloudWatch.",
      "Get the public and private IP addresses from the instance metadata service using the http://169.254.169.254/latest/meta-data/ endpoint."
    ],
    c: [
      3
    ],
    e: [
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Correct: This option is correct based on AWS architectural and developer guidelines."
    ]
  },
  {
    t: "s",
    q: "A developer has recently launched a new API Gateway service which is integrated with AWS Lambda. He enabled API caching and per-key cache invalidation features in the API Gateway to comply with the requirement of the front-end development team which will use the API. The front-end team will have to invalidate an existing cache entry in some scenarios and fetch the latest data from the integration endpoint. Which of the following should the consumers of the API do to invalidate the cache in API Gateway?",
    o: [
      "Send a request with the cache-control: no-cache header.",
      "Send a request with the cache-control: max-age=0 header.",
      "Configure the front-end application to clear the browser cache.",
      "Send a request with the cache-control: INVALIDATE CACHE header."
    ],
    c: [
      0
    ],
    e: [
      "Correct: This option is correct based on AWS architectural and developer guidelines.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario."
    ]
  },
  {
    t: "s",
    q: "A developer is building an A1-based traffic monitoring application using Lambda in AWS. Due to the complexity of the application, the developer must do certain modifications such as the way Lambda runs the function's setup code and how the invocation events are read from the Lambda runtime API. In this scenario, which feature of Lambda should you take advantage of to meet the above requirement?",
    o: [
      "Layers",
      "Custom Runtime",
      "DLQ",
      "Lambda@Edge"
    ],
    c: [
      1
    ],
    e: [
      "Incorrect: This choice is incorrect for this scenario.",
      "Correct: This option is correct based on AWS architectural and developer guidelines.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario."
    ]
  },
  {
    t: "s",
    q: "A developer is writing a CloudFormation template which will be used to deploy a simple Lambda function to AWS. The function to be deployed is made in Python with just 3 lines of codes which can be written inline in the template. Which parameter of the AWS: : Lambda: *unction resource should the developer use to place the Python code in the template?",
    o: [
      "ZipFile",
      "Handler",
      "Code",
      "Runtime"
    ],
    c: [
      0
    ],
    e: [
      "Correct: This option is correct based on AWS architectural and developer guidelines.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario."
    ]
  },
  {
    t: "s",
    q: "A developer is creating a new global secondary index on a provisioned mode DynamoDB table. Since the application will store large quantities of data, the write capacity units must be specified for the expected workload on both the base table and its secondary index. Which of the following should the developer do to avoid any potential request throttling?",
    o: [
      "Ensure that the global secondary index's provisioned WCU is equal or greater than the WCU of the base table.",
      "Ensure that the global secondary index's provisioned WCU is equal or less than the WCU of the base table.",
      "Ensure that the global secondary index's provisioned RCU is equal or greater than the RCU of the base table.",
      "Ensure that the global secondary index's provisioned RCU is equal or less than the RCU of the base table."
    ],
    c: [
      0
    ],
    e: [
      "Correct: This option is correct based on AWS architectural and developer guidelines.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario."
    ]
  },
  {
    t: "s",
    q: "QUESTION A developer is utilizing AWS X-Ray to generate a visual representation of the requests flowing through their enterprise web application. Since the application interacts with multiple services, all requests must be traced in X-Ray, including any downstream calls made to AWS resources. Which of the following actions should the developer implement for this scenario?",
    o: [
      "Use AWS X-Ray SDK to upload a trace segment by executing PutTraceSegments API.",
      "Use X-Ray SDK to generate segment documents with subsegments and send them to the X-Ray daemon.",
      "Install AWS X-Ray on the different services that communicate with the application.",
      "Pass multiple trace segments as a parameter of PutTraceSegments API."
    ],
    c: [
      1
    ],
    e: [
      "Incorrect: This choice is incorrect for this scenario.",
      "Correct: This option is correct based on AWS architectural and developer guidelines.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario."
    ]
  },
  {
    t: "s",
    q: "You have two users concurrently accessing a DynamoDB table and submitting updates. If a user will modify a specific item in the table, she needs to make sure that the operation will not affect another user's attempt to modify the same item. You have to ensure that your update operations will only succeed if the item attributes meet one or more expected conditions. Which Of the following DynamoDB features should you use in this scenario?",
    o: [
      "Batch Operations",
      "Update Expressions",
      "Conditional writes",
      "Projection Expressions"
    ],
    c: [
      2
    ],
    e: [
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Correct: This option is correct based on AWS architectural and developer guidelines.",
      "Incorrect: This choice is incorrect for this scenario."
    ]
  },
  {
    t: "s",
    q: "QUESTON A company is transitioning their systems to AWS due to the limitations of their on-premises data center. As part of this project, a developer was assigned to build a brand new serverless architecture in AWS, which will be composed Of AWS Lambda, API Gateway, and DynamoDB in a single stack. She needs a simple and reliable framework that will allow her to share configuration such as memory and timeouts between resources and deploy all related resources together as a single, versioned entity. Which Of the following is the MOST appropriate service that the developer should use in this scenario?",
    o: [
      "AWS SAM",
      "Serverless Application Framework",
      "AWS CloudFormation",
      "AWS Systems Manager"
    ],
    c: [
      0
    ],
    e: [
      "Correct: This option is correct based on AWS architectural and developer guidelines.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario."
    ]
  },
  {
    t: "s",
    q: "A developer is managing a real-time fraud detection system that ingests a stream of data using Amazon Kinesis. The system works well with millisecond end-to-end latency, but the allocated shards are way underutilized based on the performance data in CloudWatch. Which of the following is the MOST suitable solution to reduce the cost and capacity of the stream?",
    o: [
      "Merge cold shards",
      "Split cold shards",
      "Merge hot shards",
      "Split hot shards"
    ],
    c: [
      0
    ],
    e: [
      "Correct: This option is correct based on AWS architectural and developer guidelines.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario."
    ]
  },
  {
    t: "s",
    q: "You are working as a software developer for an online training company, which is currently developing a learning portal that will use a DynamoDB table. One of the acceptance criteria requires you to ensure that there will be no hot partitions in the table which will result in throttling and inefficient use of your provisioned I/O capacity. The portal contains hundreds of thousands of online courses including the ones from their 3rd-party educational partners, which may or may not have the same Course ID. The table has attributes: Course ID, Item ID (GUID), Course Name, Course Description, Course Price. Which of the following is the MOST suitable partition key to use in this scenario?",
    o: [
      "Course ID",
      "Item ID",
      "Course Name",
      "Course Price"
    ],
    c: [
      1
    ],
    e: [
      "Incorrect: This key would lead to hot partitions if multiple requests use the same value.",
      "Correct: Item ID is a GUID which has high cardinality, preventing hot partitions by spreading writes uniformly.",
      "Incorrect: This key would lead to hot partitions if multiple requests use the same value.",
      "Incorrect: This key would lead to hot partitions if multiple requests use the same value."
    ]
  }
];

export const SET4_D2_QUESTIONS: RawQuestion[] = [
  {
    t: "s",
    q: "A company uses AWS Systems Manager (SSM) Parameter Store to manage configuration details for multiple applications. The parameters are currently stored in the Standard tier. The company wants its operations team to be notified if there are sensitive parameters that haven't been rotated within 90 days. Which must be done to meet the requirement?",
    o: [
      "Convert the sensitive parameters from Standard tier into Advanced tier. Set an ExpirationNotification policy with a value of 90 days. Use Amazon EventBridge (Amazon CloudWatch Events) to send a notification via Amazon SNS.",
      "Convert the sensitive parameters from Standard tier into Advanced tier. Set a NochangeNotification policy with a value of 90 days. Use Amazon EventBridge (Amazon CloudWatch Events) to send a notification via Amazon SNS.",
      "Set up an Amazon EventBridge (Amazon CloudWatch Events) event pattern that captures SSM Parameter-related events. Use Amazon SNS to send notifications.",
      "Configure a NochangeNotification policy with a value of 90 days. Use Amazon EventBridge (Amazon CloudWatch Events) to send a notification via Amazon SNS."
    ],
    c: [
      2
    ],
    e: [
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Correct: This option is correct based on AWS architectural and developer guidelines.",
      "Incorrect: This choice is incorrect for this scenario."
    ]
  },
  {
    t: "s",
    q: "A product design firm has adopted a remote work policy and wants to provide employees with access to a suite of CAD software through EC2 Spot instances. These instances will be deployed using a CloudFormation template. The development team must be able to securely obtain software license keys in the template each time it is needed. Which solution meets this requirement while offering the most secure and cost-effective approach?",
    o: [
      "Embed the license keys in the Mapping section of the CloudFormation template.",
      "Let users choose the correct license key using the Parameter section. Enable the NoEcho attribute on the parameter.",
      "Pass the license key in the Parameter section of the CloudFormation template during stack creation. Enable the NoEcho attribute on the parameter.",
      "Store the license key as a secret in AWS Secrets Manager. Use the Secrets Manager dynamic reference to retrieve the secret in the CloudFormation template.",
      "Store the license key as a securestring in AWS Systems Manager (SSM) Parameter Store. Use the ssm-secure dynamic reference to retrieve the secret in the CloudFormation template."
    ],
    c: [
      3
    ],
    e: [
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Correct: This option is correct based on AWS architectural and developer guidelines.",
      "Incorrect: This choice is incorrect for this scenario."
    ]
  },
  {
    t: "s",
    q: "An e-commerce application, which is hosted in an ECS Cluster, contains the connection string Of an external database and other sensitive configuration files. Since the application accepts credit card payments, the company has to meet strict security compliance which requires that the database credentials are encrypted and periodically rotated. Which of the following should you do to comply to the requirements?",
    o: [
      "Store the database credentials in an encrypted ecs.config configuration file.",
      "Store the database credentials in an encrypted dockerrun.aws.json configuration file.",
      "Store the database credentials in AWS Secrets Manager and enable rotation.",
      "Store the database credentials as a secure string parameter in Systems Manager Parameter Store."
    ],
    c: [
      2
    ],
    e: [
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Correct: This option is correct based on AWS architectural and developer guidelines.",
      "Incorrect: This choice is incorrect for this scenario."
    ]
  },
  {
    t: "m",
    q: "A is developing a serverless website that consists Of images, videos, HTML pages and JavaScript files. There is also a requirement to serve the files with lowest latency to its global users. Which Of services should be used in this scenario? (Select TWO.)",
    o: [
      "Amazon EC2",
      "Amazon CloudFront",
      "Amazon Elastic File System",
      "Amazon Glacier",
      "Amazon S3"
    ],
    c: [
      1,
      4
    ],
    e: [
      "Incorrect: This choice is incorrect for this scenario.",
      "Correct: This option is correct based on AWS architectural and developer guidelines.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Correct: This option is correct based on AWS architectural and developer guidelines."
    ]
  },
  {
    t: "s",
    q: "You currently have an IAM user for working in the development environment using shell scripts that call the AWS CLI. The EC2 instance that you are using already contains the access key credential set and an IAM role, which are used to run the CLI and access the development environment. You were given a new set of key credentials with another IAM role that allows you to access and manage the production environment. Which Of the following is the EASIEST way to switch from one role to another?",
    o: [
      "Create a new profile for the role in the AWS CLI configuration file then append the --profile parameter, along with the new profile name, whenever you run the CLI command.",
      "Store the production access key credentials set in the user data of the instance.",
      "Store the production access key credentials set in the instance metadata.",
      "Create a new instance profile in the AWS CLI configuration file then append the --profile parameter."
    ],
    c: [
      0
    ],
    e: [
      "Correct: This option is correct based on AWS architectural and developer guidelines.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario."
    ]
  },
  {
    t: "s",
    q: "In the next financial year, a company has decided to develop a completely new version of its legacy application that will utilize Node.js and GraphQL The new architecture aims to offer an end-to-end view of requests as they traverse the application and display a map of the underlying components. To achieve this, the application will be hosted in an Auto Scaling group (ASG) of Linux EC2 instances behind an Application Load Balancer (ALB) and must be instrumented to send trace data to the AWS X-Ray. Which of the following options is the MOST suitable way to satisfy this requirement?",
    o: [
      "Refactor your application to send segment documents directly to X-Ray by using the PutTraceSegments API.",
      "Use a user data script to install the X-Ray daemon.",
      "Enable AWS X-Ray tracing on the ASG's launch template.",
      "Enable AWS Web Application Firewall (WAF) on the ALB to monitor web requests."
    ],
    c: [
      1
    ],
    e: [
      "Incorrect: This choice is incorrect for this scenario.",
      "Correct: This option is correct based on AWS architectural and developer guidelines.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario."
    ]
  },
  {
    t: "s",
    q: "A company has a suite Of web applications that is heavily using RDS database in Multi-AZ Deployments configuration with several Read Replicas. For improved security, you were instructed to ensure that all of their database credentials, API keys, and other secrets are encrypted and rotated on a regular basis. You should also configure your applications to use the latest version of the encrypted credentials when connecting to the RDS database. Which of the following is the MOST appropriate solution to secure the credentials?",
    o: [
      "Store the credentials to AWS ACM.",
      "Use AWS Secrets Manager to store and encrypt the credentials and enable automatic rotation.",
      "Store the credentials in AWS KMS.",
      "Store the credentials to Systems Manager Parameter Store with a securestring data type."
    ],
    c: [
      1
    ],
    e: [
      "Incorrect: This choice is incorrect for this scenario.",
      "Correct: This option is correct based on AWS architectural and developer guidelines.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario."
    ]
  },
  {
    t: "s",
    q: "A developer is planning to use the AWS Elastic Beanstalk console to run the AWS X-Ray daemon on the EC2 instances in her application environment. She will use X-Ray to construct a service map to help identify issues with her application and to provide insight on which application component to optimize. The environment is using a default Elastic Beanstalk instance profile. Which IAM managed Elastic Beanstalk use for the X-Ray daemon to upload data to X-Ray?",
    o: [
      "AWSXrayReadOnlyAccess",
      "AWSXRayDaemonWriteAccess",
      "AWSXRayElasticBeanstalkWriteAccess",
      "AWSXrayFullAccess"
    ],
    c: [
      1
    ],
    e: [
      "Incorrect: This choice is incorrect for this scenario.",
      "Correct: This option is correct based on AWS architectural and developer guidelines.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario."
    ]
  },
  {
    t: "m",
    q: "A developer is managing an application hosted in EC2, which stores data in an S3 bucket. The application also uses HTTPS for secure communication. TO comply with the new security policy, the developer must ensure that the data is encrypted at rest using an encryption key that is provided and managed by the company. The change should also provide AES-256 encryption to their data. Which Of the following actions could the developer take to achieve this? (Select TWO.)",
    o: [
      "Implement Amazon S3 server-side encryption with Amazon S3-Managed Encryption Keys.",
      "Encrypt the data on the client-side before sending to Amazon S3 using their own master key.",
      "Implement Amazon S3 server-side encryption with AWS KMS Keys (SSE-KMS).",
      "Implement Amazon S3 server-side encryption with customer-provided keys (SSE-C).",
      "Use SSL to encrypt the data while in transit to Amazon S3."
    ],
    c: [
      1,
      3
    ],
    e: [
      "Incorrect: This choice is incorrect for this scenario.",
      "Correct: This option is correct based on AWS architectural and developer guidelines.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Correct: This option is correct based on AWS architectural and developer guidelines.",
      "Incorrect: This choice is incorrect for this scenario."
    ]
  },
  {
    t: "s",
    q: "A startup recently launched a high-quality photo-sharing portal using Amazon Lightsail and Amazon S3. To protect sensitive content, the company enforces client-side encryption with customer-managed encryption keys. However, the team noticed that other external websites are linking to and using the photos without permission. This situation has caused an increase in data transfer costs and potential revenue loss. Which Of the following is the MOST effective method to solve this issue?",
    o: [
      "Block the IP addresses of the offending websites using Network Access Control List.",
      "Configure the S3 bucket to remove public read access and use pre-signed URLs with expiry.",
      "Enable cross-origin resource sharing (CORS) which allows cross-origin GET requests from all origins.",
      "Use an Amazon CloudFront web distribution with signed URLs or signed cookies."
    ],
    c: [
      1
    ],
    e: [
      "Incorrect: This choice is incorrect for this scenario.",
      "Correct: This option is correct based on AWS architectural and developer guidelines.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario."
    ]
  },
  {
    t: "m",
    q: "A multinational investment bank has a hybrid cloud architecture with AWS. To improve the security of the applications, the company decided to use AWS Key Management Service (KMS) with customer-managed keys to create and manage the encryption keys across a wide range of AWS services. A software developer has been assigned to integrate AWS KMS with the financial applications Of the Which of the following are the recommended steps to locally encrypt data using AWS KMS that should be followed? (Select TWO.)",
    o: [
      "Erase the plaintext data key from memory and store the encrypted data key alongside the locally encrypted data.",
      "Erase the encrypted data key from memory and store the plaintext data key alongside the locally encrypted data.",
      "Encrypt data locally using the Encrypt operation.",
      "Use the GenerateDataKeyWithoutPlaintext operation to get a data encryption key.",
      "Use the GenerateDataKey operation to get a data encryption key then use the plaintext data key in the response to encrypt data locally."
    ],
    c: [
      0,
      4
    ],
    e: [
      "Correct: This option is correct based on AWS architectural and developer guidelines.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Correct: This option is correct based on AWS architectural and developer guidelines."
    ]
  },
  {
    t: "s",
    q: "A web application is currently using an on-premises Microsoft SQL Server 2019 Enterprise Edition database. Your manager instructed you to migrate the application to Elastic Beanstalk and the database to RDS for SQL Server. For additional security, you must configure your database to automatically encrypt the actual data before it is written to storage, and automatically decrypt data when the data is read from storage. Which of the following services will you use to achieve this?",
    o: [
      "Use IAM DB Authentication.",
      "Enable Transparent Data Encryption (TDE).",
      "Enable RDS Encryption.",
      "Use Microsoft SQL Server Windows Authentication."
    ],
    c: [
      1
    ],
    e: [
      "Incorrect: This choice is incorrect for this scenario.",
      "Correct: This option is correct based on AWS architectural and developer guidelines.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario."
    ]
  }
];

export const SET4_D3_QUESTIONS: RawQuestion[] = [
  {
    t: "s",
    q: "A company is currently in the process of integrating its on-premises data center with its cloud infrastructure on AWS. One of the requirements is to integrate the on-premises Lightweight Directory Access Protocol (LDAP) directory service into the Amazon VPC using AWS Identity and Management (AWS 'AM). Which of the following provides the MOST suitable solution to implement if the identity store in use is not compatible with Security Assertion Markup Language (SAML)?",
    o: [
      "Implement the AWS IAM Identity Center service to manage access AWS and your LDAP.",
      "Create a custom identity broker application in your on-premises data center and use STS to issue short-lived AWS credentials.",
      "Create IAM roles to rotate the IAM credentials whenever LDAP credentials are updated.",
      "Set up an IAM that references the LDAP identifiers and AWS credentials."
    ],
    c: [
      1
    ],
    e: [
      "Incorrect: This choice is incorrect for this scenario.",
      "Correct: This option is correct based on AWS architectural and developer guidelines.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario."
    ]
  },
  {
    t: "s",
    q: "A company has recently developed a containerized application that uses a multicontainer Docker platform, which supports multiple containers per instance. The company requires a service that automatically handles tasks such as provisioning of the resources, load balancing, auto-scaling, monitoring, and placing the containers across the cluster. Which Of the following services provides the EASIEST way to accx)mplish the above requirement?",
    o: [
      "Amazon Elastic Kubernetes Service (Amazon EKS)",
      "AWS Lambda",
      "Amazon Elastic Container Service (Amazon ECS)",
      "AWS Elastic Beanstalk"
    ],
    c: [
      3
    ],
    e: [
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Correct: This option is correct based on AWS architectural and developer guidelines."
    ]
  },
  {
    t: "s",
    q: "QUESTION A company is using a combination Of AWS CodeBuild, AWS CodePipeline, and AWS CodeDeploy services for its continuous integration and continuous delivery (CI/CD) pipeline. The company requires a process in which someone performs a code review before a revision is allowed into the next stage of the pipeline. If the action is approved, the pipeline execution resumes, but if it is not, then the pipeline execution will not proceed. Which Of the following is the MOST suitable solution to implement in this scenario?",
    o: [
      "Split the processes into different Task states using AWS Step Functions. Use a wait timeout for approval.",
      "Remodel the pipeline using AWS Serverless Application Model (AWS SAM) state to set a wait timeout.",
      "Implement a manual approval actions configuration in CodePipeline. Send the approval request to an Amazon SQS Queue.",
      "Implement a manual approval actions configuration in CodePipeline. Send the approval request to an Amazon Simple Notification Service (Amazon SNS) Topic."
    ],
    c: [
      3
    ],
    e: [
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Correct: This option is correct based on AWS architectural and developer guidelines."
    ]
  },
  {
    t: "s",
    q: "m. QUESTION You are configuring the task definitions of your ECS Cluster in AWS to make sure that the tasks are scheduled on instances with enough resources to run them. It should also follow the constraints that you specified both implicitly or explicitly. Which of the following options should you implement to satisfy the requirement which requires the LEAST amount of configuration?",
    o: [
      "Use a binpack task placement strategy.",
      "Use a spread task placement strategy with custom placement constraints.",
      "Use a random task placement strategy.",
      "Use a spread task placement strategy which uses the instanceId and host attributes."
    ],
    c: [
      2
    ],
    e: [
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Correct: This option is correct based on AWS architectural and developer guidelines.",
      "Incorrect: This choice is incorrect for this scenario."
    ]
  },
  {
    t: "s",
    q: "An aerospace engineering company has recently migrated to AWS for their cloud architecture. They are using CloudFormation and AWS SAM as deployment services for both of their monolithic and serverless applications. There is a new requirement where you have to dynamically install packages, create files, and start services on your EC2 instances upon the deployment of the application stack using CloudFormation. Which of the following helper scripts should you use in this scenario?",
    o: [
      "cfn-hup",
      "cfn-signal",
      "cfn-get-metadata",
      "cfn-init"
    ],
    c: [
      3
    ],
    e: [
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Correct: This option is correct based on AWS architectural and developer guidelines."
    ]
  },
  {
    t: "s",
    q: "A web application hosted in Elastic Beanstalk has a configuration file named option settings : aws : elasticbeanstalk : xray : XRayEnabled : true . ebextensions/ debugging. config which has the following content: For its database tier, it uses RDS with Multi-AZ deployments configuration and Read Replicas. There is a new requirement to record calls that your application makes to RDS and other internal or external HTTP web APIs. The tracing information should also include the actual SQL database queries sent by the application, which be searched using the filter expressions in the X-Ray Console. Which of the following should you do to satisfy the above task?",
    o: [
      "Add metadata in the segment document.",
      "Add metadata in the subsegment section of the segment document.",
      "Add annotations in the subsegment section of the segment document.",
      "Add annotations in the segment document."
    ],
    c: [
      1
    ],
    e: [
      "Incorrect: This choice is incorrect for this scenario.",
      "Correct: This option is correct based on AWS architectural and developer guidelines.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario."
    ]
  },
  {
    t: "s",
    q: "u. QUESTON An Elastic Beanstalk application inaccessible for several minutes whenever a failed deployment is rolled back. A developer should recommend a strategy that will have the least impact on the application's availability if the deployment fails. Teams must be able to revert changes quickly as well. Which deployment method should the developer suggest?",
    o: [
      "All at Once",
      "Rolling with Additional Batches",
      "Rolling",
      "Blue/Green"
    ],
    c: [
      3
    ],
    e: [
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Correct: This option is correct based on AWS architectural and developer guidelines."
    ]
  },
  {
    t: "s",
    q: "A software development company uses AWS CodePipeline as its CI/CD platform to build, test, and push deployments to its production environment. Recently, a developer created a Lambda function that will push the build details to a separate DynamoDB table. The Lambda function should be triggered after a successful build on the Pipeline. Which of the following services will meet the specified requirement?",
    o: [
      "Amazon EventBridge (Amazon CloudWatch Events)",
      "AWS CodeBuild",
      "AWS CloudTrail Events",
      "AWS Systems Manager"
    ],
    c: [
      0
    ],
    e: [
      "Correct: This option is correct based on AWS architectural and developer guidelines.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario."
    ]
  }
];

export const SET4_D4_QUESTIONS: RawQuestion[] = [
  {
    t: "s",
    q: "A leading financial company has recently deployed its application to AWS using Lambda and API Gateway. However, they noticed that all metrics are being in their CloudWatch dashboard except for cacheHitcount and Ca 3 scount . What be the MOST likely cause Of this issue?",
    o: [
      "API Caching is not enabled in API Gateway.",
      "They have not provided an IAM role to their API Gateway yet.",
      "API Gateway Private Integrations has not been configured yet.",
      "The provided IAM role to their API Gateway only has read access but no write privileges to CloudWatch."
    ],
    c: [
      0
    ],
    e: [
      "Correct: This option is correct based on AWS architectural and developer guidelines.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario."
    ]
  },
  {
    t: "s",
    q: "A company has an application hosted in an ECS Cluster that heavily uses an RDS database. A developer needs to closely monitor how the different processes on a DB instance use the CPU, such as the percentage of the CPU bandwidth or the total memory consumed by each process to ensure application performance. Which of the following is the MOST suitable solution that the developer should implement?",
    o: [
      "Develop a shell script that collects and publishes custom metrics to CloudWatch which tracks the real-time CPU Utilization.",
      "Use Enhanced Monitoring in RDS.",
      "Track the CPU and Memory metrics which are readily available in the Amazon RDS console.",
      "Use CloudWatch to track the CPU Utilization of your database."
    ],
    c: [
      1
    ],
    e: [
      "Incorrect: This choice is incorrect for this scenario.",
      "Correct: This option is correct based on AWS architectural and developer guidelines.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario."
    ]
  },
  {
    t: "m",
    q: "ag. QUESTON A developer uses AWS X-Ray to create a trace on an instrumented web application to identify any performance bottlenecks. The segment documents being sent by the application contain annotations that the developer wants to utilize in order to identify and filter out specific data from the trace. Which of the following should the developer do in order to satisfy this requirement with minimal configuration? (Select TWO.)",
    o: [
      "Fetch the data using the BatchGetTraces API.",
      "Use filter expressions via the X-Ray console.",
      "Send trace results to an S3 bucket then query the trace output using Amazon Athena.",
      "Configure Sampling Rules in the AWS X-Ray Console.",
      "Fetch the trace IDs and annotations using the GetTraceSummaries API."
    ],
    c: [
      1,
      4
    ],
    e: [
      "Incorrect: This choice is incorrect for this scenario.",
      "Correct: This option is correct based on AWS architectural and developer guidelines.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Incorrect: This choice is incorrect for this scenario.",
      "Correct: This option is correct based on AWS architectural and developer guidelines."
    ]
  }
];
