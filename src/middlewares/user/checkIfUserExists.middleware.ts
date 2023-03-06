import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import AppError from "../../errors/appError";

const checkIfUserExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void | Response> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOneBy({
    id: +req.params.id,
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  return next();
};

export default checkIfUserExists;
