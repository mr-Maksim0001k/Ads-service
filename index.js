import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 3333;

app.use(express.json());

mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("DB Okey"))
  .catch((err) => console.log("DB Erorr", err));

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }

  console.log(`The server is running on port ${port}`);
});
