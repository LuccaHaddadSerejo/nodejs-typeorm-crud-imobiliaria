import { Request, Response } from "express";
import { getAllCategoriesService } from "../services/category/getAllCategories.service";
import { registerCategoryService } from "../services/category/registerCategory.service";

const registerCategoryController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newCategory = await registerCategoryService(req.body);

  return res.status(201).json(newCategory);
};

const getAllCategoriesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const categories = await getAllCategoriesService();

  return res.status(200).json(categories);
};

export { registerCategoryController, getAllCategoriesController };
