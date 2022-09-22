import dotenv from "dotenv";
import express, { Express, Response } from "express";
// import { returnName } from "helpers/utils";
import { dbConnection, AppDataSource } from "ormConfig";

dotenv.config();

dbConnection();

const app: Express = express();
const PORT = process.env.PORT || 4000;

app.get("/", async (_, res: Response) => {
  const table = await AppDataSource.query(
    "SELECT users.id, users.name, users.created_at, last_names.last_name, last_names.id as last_names_id from users RIGHT JOIN last_names ON users.last_name_id = last_names.id ORDER BY users.id"
  );
  res.send(table);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`); //eslint-disable-line
});
