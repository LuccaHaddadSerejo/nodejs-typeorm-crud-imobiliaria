import { NextFunction, Request, Response } from "express";
import AppError from "../../errors/appError";

const checkAdminStatus = (
  req: Request,
  res: Response,
  next: NextFunction
): void | Response => {
  if (req.user.admin) {
    return next();
  }

  throw new AppError("Insufficient permission", 403);
};

export default checkAdminStatus;
