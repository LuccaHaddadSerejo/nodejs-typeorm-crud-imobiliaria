import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import AppError from "../../errors/appError";

const checkCategoryUniqueName = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void | Response> => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  if (req.body.name) {
    const category: Category | null = await categoryRepository.findOneBy({
      name: req.body.name,
    });

    if (category) {
      throw new AppError("Category already exists", 409);
    }
  }

  return next();
};

export default checkCategoryUniqueName;
