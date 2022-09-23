import fs from "fs";

import { Router } from "express";
import { privaticeRoute } from "middlewares/private";

const router = Router();

//maps all routes
fs.readdirSync(__dirname).map(async (fileName) => {
  let prefix = fileName.split(".").shift() || "";
  const importPath = `routes/${prefix}`;

  const isPrivate = prefix.split("-").pop() === "private";

  if (isPrivate) {
    router.use(privaticeRoute);
    prefix = prefix.split("-").slice(0, -1).join("-") as string;
    importPath.concat("-private");
  }

  if (prefix !== "index")
    router.use(`/api/v1/${prefix}`, (await import(`${importPath}`)).default);
});

export default router;
