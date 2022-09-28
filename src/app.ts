import cors from "cors";
import express, { Express } from "express";
import apiRouter from "routes";

const app: Express = express();

//express middlewares
app.use(cors());
app.use(express.json());

//router
app.use(apiRouter);
app.use((_, res) => res.status(404).json({ message: "Not found" }));

export default app;
