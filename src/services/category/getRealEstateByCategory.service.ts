import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";

const getRealEstateByCategoryService = async (id: number): Promise<any> => {
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
