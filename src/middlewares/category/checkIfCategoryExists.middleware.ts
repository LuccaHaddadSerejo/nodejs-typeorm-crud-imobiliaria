import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import AppError from "../../errors/appError";

const checkIfCategoryExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void | Response> => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const category: Category | null = await categoryRepository.findOneBy({
    id: +req.params.id,
  });

  if (!category) {
    throw new AppError("Category not found", 404);
  }

  return next();
};

export default checkIfCategoryExists;
