import { S3Client } from "@aws-sdk/client-s3";
import json from './credentials.json'

// Set the AWS Region.
const REGION = "eu-west-2"; //e.g. "us-east-1"


//define credentials

const CREDENTIAL = {
    accessKeyId: `${json.accessKeyId}`,
    secretAccessKey: `${json.secretAccessKey}`,
  };

// Create an Amazon S3 service client object.
const s3Client = new S3Client({ region: REGION, credentials: CREDENTIAL });
export { s3Client };