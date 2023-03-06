import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import AppError from "../../errors/appError";

const checkUniqueEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void | Response> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  if (req.body.email) {
    const user: User | null = await userRepository.findOneBy({
      email: req.body.email,
    });

    if (user) {
      throw new AppError("Email already exists", 409);
    }
  }

  return next();
};

export default checkUniqueEmail;
