import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { S3Bucket } from './s3-construct';

export class ConstructsStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucket = new S3Bucket(this, 'MyS3Bucket', { versioned: true }); 

    // Here I can access the bucket properties
    console.log(bucket.bucket.bucketName); 

  }
}
