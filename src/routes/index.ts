import fs from "fs";

import { NextFunction, Request, RequestHandler, Response } from "express";
import { Router } from "express";
import { privaticeRoute } from "middlewares/private";

const router = Router();

//use express router whether or not it has a middleware function
const useRoute = async (
  prefix: string,
  middleware: RequestHandler | null,
  importPath: string
) => {
  const middlewareFunction = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => (middleware ? middleware(req, res, next) : next());

  if (prefix !== "index")
    router.use(
      `/api/v1/${prefix}`,
      middlewareFunction,
      (await import(`${importPath}`)).default
    );
};

const getRoutePrefix = (routeName: string, isPrivate = false): string => {
  const defaultPrefix = routeName.split(".").shift() || "";
  return isPrivate
    ? defaultPrefix.split("-").slice(0, -1).join("-")
    : defaultPrefix;
};

//detects routes whose name ends with "private" after the last -
const isPrivateRoute = (routeName: string) =>
  getRoutePrefix(routeName).split("-").pop() === "private";

//maps all routes
fs.readdirSync(__dirname).map(async (fileName) => {
  const isPrivate = isPrivateRoute(fileName);
  const relativePrefix = getRoutePrefix(fileName, isPrivate);
  const importPath = `routes/${getRoutePrefix(fileName)}`;

  useRoute(relativePrefix, isPrivate ? privaticeRoute : null, importPath);
});

export default router;
