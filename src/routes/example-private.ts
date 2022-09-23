import { Router } from "express";

const router = Router();

router.get("/", (_, res) => res.json("example"));

export default router;
