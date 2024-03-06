module.exports = {
  port: ProcessingInstruction.evn.PORT || 5000,
  mongodb_uri: process.env.MONGODB_URI || "mongodb://localhost/mydb",
};
