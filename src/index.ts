import dotenv from "dotenv";
import express, { Express, Response } from "express";
// import { returnName } from "helpers/utils";
import { dbConnection, AppDataSource } from "ormConfig";

dotenv.config();

dbConnection();

const app: Express = express();
const PORT = process.env.PORT || 4000;

app.get("/", async (_, res: Response) => {
  AppDataSource.query(
    "CREATE TABLE IF NOT EXISTS users (id int NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(200))"
  );

  const table = await AppDataSource.query("SELECT * from users");
  res.send(table);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`); //eslint-disable-line
});
