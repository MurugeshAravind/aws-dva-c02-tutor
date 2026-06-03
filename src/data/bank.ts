// ============================================================
// FILE: src/data/bank.ts
//
// Composes the four per-domain concept files into the full BANK.
// To add questions: edit bank-d1.ts … bank-d4.ts.
// ============================================================

import type { Domain } from "../types";
import { D1_CONCEPTS } from "./bank-d1";
import { D2_CONCEPTS } from "./bank-d2";
import { D3_CONCEPTS } from "./bank-d3";
import { D4_CONCEPTS } from "./bank-d4";

export const BANK: Domain[] = [
  { id: "d1", code: "Domain 1", name: "Development with AWS Services", weight: 32, concepts: D1_CONCEPTS },
  { id: "d2", code: "Domain 2", name: "Security", weight: 26, concepts: D2_CONCEPTS },
  { id: "d3", code: "Domain 3", name: "Deployment", weight: 24, concepts: D3_CONCEPTS },
  { id: "d4", code: "Domain 4", name: "Troubleshooting & Optimization", weight: 18, concepts: D4_CONCEPTS },
];

export const TOPICS: Record<string, string[]> = {
  d1: ["Lambda", "DynamoDB", "API Gateway", "S3", "SQS/SNS", "Kinesis"],
  d2: ["IAM", "Cognito", "KMS", "Secrets Manager", "STS"],
  d3: ["CodePipeline", "CodeBuild", "CodeDeploy", "CloudFormation", "SAM", "ECS/ECR"],
  d4: ["CloudWatch", "X-Ray", "CloudTrail", "EventBridge", "Caching", "DAX"],
};

export const TOTAL_CONCEPTS = BANK.reduce((s, d) => s + d.concepts.length, 0);
export const BANK_TOTAL = BANK.reduce((s, d) => s + d.concepts.reduce((n, c) => n + c.questions.length, 0), 0);
