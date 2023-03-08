import { NextFunction, Request, Response } from "express";
import AppError from "../../errors/appError";

const matchIds = (
  req: Request,
  res: Response,
  next: NextFunction
): void | Response => {
  if (req.user.admin) {
    return next();
  }

  if (+req.user.id === +req.params.id) {
    return next();
  }

  throw new AppError("Insufficient permission", 403);
};

export default matchIds;
