import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_PASSWORD } from "../config/config";

export const userMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({
      message: "Token doesn't exist",
    });
  }

  const payload = jwt.verify(token, JWT_PASSWORD) as JwtPayload;

  // @ts-ignore
  req.userId = payload.id;

  next();
};