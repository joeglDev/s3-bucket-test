// Import required AWS SDK clients and commands for Node.js.
import { PutObjectCommand, CreateBucketCommand } from "@aws-sdk/client-s3";
import { s3Client } from "../../libs/sampleClient";

// Set the parameters
const params = {
    Bucket: "jg-character-portfolio", // The name of the bucket. For example, 'sample_bucket_101'.
    Key: "test-image.png", // The name of the object. For example, 'sample_upload.txt'.
    Body: require('../../public/test-image.png'), // The content of the object. For example, 'Hello world!".
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
  }


  export {createBucket};