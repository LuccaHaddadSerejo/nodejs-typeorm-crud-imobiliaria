import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import { iMultipleRealEstates } from "../../interfaces/realEstates.interfaces";
import { multipleRealEstatesSchema } from "../../schemas";

const getAllRealEstatesService = async (): Promise<iMultipleRealEstates> => {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const realEstates: Array<RealEstate> = await realEstateRepository.find({
    relations: {
      address: true,
    },
  });

  return multipleRealEstatesSchema.parse(realEstates);
};

export default getAllRealEstatesService;
