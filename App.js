const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Populate_practice");
let cors = require("cors");
require("dotenv").config();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;

const userRoute = require("./routes/userRoute.js");
const postRoute = require("./routes/postRoute.js");


app.use("/", userRoute);
app.use("/", postRoute);


app.listen(PORT, () => {
  console.log(`App is running on localhost:${PORT}`);
});
