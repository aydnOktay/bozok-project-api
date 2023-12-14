require("dotenv").config({
    path: process.env.NODE_ENV === "PROD" ? ".env" : ".env.dev",
  });
  const express = require("express");


const path = require("path");
const app = express();
const port = process.env.PORT || 5000;


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
let options = {
  etag: false,
  maxAge: "5000",
};
app.use(express.static(path.join(__dirname, "..", "public"), options));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(port, async () => {
    try {
      
      console.log("Connected to database");
  
      console.log(`Server is running on port ${port}`);
    } catch (error) {
      console.log("Error connecting to database", error);
      process.exit(1);
    }
  });
  