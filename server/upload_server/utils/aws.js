const AWS = require("aws-sdk");
const dotenv = require("dotenv");
dotenv.config();

console.log(process.env.AWS_S3_SECRET_ACCESS_KEY);
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

module.exports = AWS;
