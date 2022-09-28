import cors from "cors";
import express, { Express } from "express";
import apiRouter from "routes";

const app: Express = express();

//express middlewares
app.use(cors());
app.use(express.json());

//router
app.use(apiRouter);
app.use(({ path }, res) => {
  const lastPartRoute = path.split("/").pop();

  const routeName = lastPartRoute ? ` '${lastPartRoute}'` : "";

  res.status(404).json({ message: `Route${routeName} not found` });
});

export default app;
