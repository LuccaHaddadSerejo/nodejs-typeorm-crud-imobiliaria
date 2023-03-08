import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { tMultipleCategories } from "../../interfaces/category.interfaces";
import { multipleCategoriesSchema } from "../../schemas";

const getAllCategoriesService = async (): Promise<tMultipleCategories> => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const categories: Array<Category> = await categoryRepository.find();

  return multipleCategoriesSchema.parse(categories);
};

export { getAllCategoriesService };
