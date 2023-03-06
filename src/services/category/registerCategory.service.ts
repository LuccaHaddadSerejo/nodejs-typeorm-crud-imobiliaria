import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import {
  iReqCategory,
  iReturnCategory,
} from "../../interfaces/category.interfaces";
import { completeCategorySchema } from "../../schemas";

const registerCategoryService = async (
  data: iReqCategory
): Promise<iReturnCategory> => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const category: Category = categoryRepository.create(data);

  await categoryRepository.save(category);

  const newCategory = completeCategorySchema.parse(category);

  return newCategory;
};

export { registerCategoryService };
