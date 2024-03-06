const express = require("express");
const cors = require("cors");
const config = require("./config/config");
const { default: mongoose } = require("mongoose");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes here

async function main() {
  try {
    await mongoose.connect(config.mongodb_uri);

    app.listen(config.port, () => {
      console.log(`Sever is running on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
