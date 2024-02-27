// Import AWS SDK
const AWS = require('aws-sdk');

// Configure AWS with your access and secret key.
AWS.config.update({
  accessKeyId: "YOUR_ACCESS_KEY_ID",
  secretAccessKey: "YOUR_SECRET_ACCESS_KEY",
  region: "YOUR_AWS_REGION"
});

// Create an S3 instance
module.exports = new AWS.S3()