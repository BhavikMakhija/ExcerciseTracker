const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

const uri = process.env.MONGODB_URI; // get uri from .env file
mongoose.connect(uri, { useNewUrlParser: true }
);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.use(cors()); // cors middleware
app.use(express.json()); // allows us to parse json

app.use("/users", require("./routes/user")); // use routes
app.use("/exercises", require("./routes/exercise")); // use routes

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});