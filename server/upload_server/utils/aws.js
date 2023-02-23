const AWS = require("aws-sdk");

module.exports = {
  awsConfig: (awsConfig = () => {
    AWS.config.update({
      credentials: {
        accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
      },
      region: process.env.AWS_S3_REGION,
    });

    AWS.config.getCredentials((err) => {
      if (err) console.log(err);
      console.log(`📚 Connect With AWS S3`);
    });
  }),
  AWS: AWS,
};
