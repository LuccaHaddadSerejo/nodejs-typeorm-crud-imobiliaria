import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { iReturnCategory } from "../../interfaces/category.interfaces";

const getRealEstateByCategoryService = async (
  id: number
): Promise<iReturnCategory | null> => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const categories: Category | null = await categoryRepository.findOne({
    relations: {
      realEstate: true,
    },
    where: {
      id: id,
    },
  });

  return categories;
};

export { getRealEstateByCategoryService };
