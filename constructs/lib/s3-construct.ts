import { Bucket, BucketEncryption } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";

type TS3ConstructProps = {
  versioned?: boolean
}

export class S3Bucket extends Construct {
  bucket: Bucket;
  constructor(scope: Construct, id: string, props?: TS3ConstructProps) {
    super(scope, id);

    this.bucket = new Bucket(scope, `${id}-bucket`, {

      // Defaulted options
      bucketKeyEnabled: true,
      encryption: BucketEncryption.S3_MANAGED,
      enforceSSL: true,
      
      // Overrideable options
      // If the versioned prop is not supplied default to true
      versioned: props?.versioned ? props?.versioned : true
    });

  }
}
