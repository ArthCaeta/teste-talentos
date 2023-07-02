import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import {
  getPOSTS,
  createPOST,
  getPOSTById,
  updatePost,
  deletePOSTById,
} from "./api/posts/posts.controller";

import mysql from "mysql2/promise";

const app = express();
const port = "3333";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

dotenv.config();

const connectionSettings = {
  host: process.env.MY_SQL_DB_HOST,
  user: process.env.MY_SQL_DB_USER,
  password: process.env.MY_SQL_DB_PASSWORD,
  port: parseInt(process.env.MY_SQL_DB_PORT),
  database: process.env.MY_SQL_DB_DATABASE,
};

console.log(connectionSettings);

const pool = mysql.createPool(connectionSettings);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/posts", getPOSTS(pool));
app.get("/posts/:id", getPOSTById(pool));
app.delete("/posts/:id", deletePOSTById(pool));
app.put("/posts/:id", updatePost(pool));
app.post("/posts", createPOST(pool));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
