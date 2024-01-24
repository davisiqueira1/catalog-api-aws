import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import router from "routes";
import "dotenv/config";

const app = express();

app.disable("x-powered-by");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017/catalog";
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

app.use(router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
