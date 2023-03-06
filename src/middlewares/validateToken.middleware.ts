import "dotenv/config";
import { NextFunction, Request, Response } from "express";
import AppError from "../errors/appError";
import jwt from "jsonwebtoken";

const checkIfTokenIsValid = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  let token = req.headers.authorization;

  if (!token) {
    throw new AppError("Missing bearer token", 401);
  }

  token = token.split(" ")[1];

  jwt.verify(token, process.env.SECRET_KEY!, (error, decoded: any) => {
    if (error) {
      throw new AppError(error.message, 401);
    }

    req.user = {
      admin: decoded.admin,
      id: +decoded.sub,
    };

    return next();
  });
};

export default checkIfTokenIsValid;
