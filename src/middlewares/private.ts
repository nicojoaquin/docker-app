import { Request, Response } from "express";

export const privaticeRoute = (
  _: Request,
  res: Response
): Response<any, Record<string, any>> => res.json("Privada");
