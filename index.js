import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import router from "./router.js";

const app = express();
const port = 3333;

app.use(express.json());
app.use(router);

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
