// Import required AWS SDK clients and commands for Node.js.
import { PutObjectCommand, CreateBucketCommand } from "@aws-sdk/client-s3";
import { client, s3Client } from "./sampleClient";
// this imports an aggregated version of S3 that exposes the .send operation
import { S3 } from "@aws-sdk/client-s3";
// this imports just the getObject operation from S3
import { GetObjectCommand } from "@aws-sdk/client-s3";

// Set the parameters
const params = {
  Bucket: "jg-character-portfolio", // The name of the bucket. For example, 'sample_bucket_101'.
  Key: "test-object-1", // The name of the object. For example, 'sample_upload.txt'.
  Body: "This is the test object 1.", // The content of the object. For example, 'Hello world!".
};

const getParams = {
  Bucket: "jg-character-portfolio",
  Key: "test-image.png",
};

// Create an Amazon S3 bucket.
/**
 * create a AWS S3 bucket.
 *
 * @returns {any} data object
 */
const createBucket = async () => {
  try {
    const data = await s3Client.send(
      new CreateBucketCommand({ Bucket: params.Bucket })
    );
    console.log(data);
    console.log("Successfully created a bucket called ", data.Location);
    return data; // For unit tests.
  } catch (err) {
    console.log("Error", err);
  }
};

/**
 *  Upload a text object to the s3 bucket.
 *
 * @returns {any} - $metadata object
 */
const uploadObject = async () => {
  //params
  const params = {
    Bucket: "jg-character-portfolio", // The name of the bucket. For example, 'sample_bucket_101'.
    Key: "test-object-1", // The name of the object. For example, 'sample_upload.txt'.
    Body: "This is the test object 1.", // The content of the object. For example, 'Hello world!".
  };
  // Create an object and upload it to the Amazon S3 bucket.
  try {
    const results = await s3Client.send(new PutObjectCommand(params));
    console.log(
      "Successfully created " +
        params.Key +
        " and uploaded it to " +
        params.Bucket +
        "/" +
        params.Key
    );
    console.log(results);
    return results; // For unit tests.
  } catch (err) {
    console.log("Error", err);
  }
};

const getObject = async () => {
  //params
  const getParams = {
    Bucket: "jg-character-portfolio",
    Key: "test-object-1",
  };
  try {

    const getObjectResult = await client.getObject(getParams);

    // env-specific stream with added mixin methods.
    const bodyStream = getObjectResult.Body;
    if (bodyStream) {
    // one-time transform.
    const bodyAsString = await bodyStream.transformToString();
    console.log("body", bodyAsString)

    // throws an error on 2nd call, stream cannot be rewound.
    const __error__ = await bodyStream.transformToString();
    }
  } catch (err) {
    console.log("Error", err);
  }
};

export { createBucket, uploadObject, getObject };
