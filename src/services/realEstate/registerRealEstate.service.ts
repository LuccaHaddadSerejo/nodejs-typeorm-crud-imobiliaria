import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Address, Category, RealEstate } from "../../entities";
import AppError from "../../errors/appError";
import {
  iCompleteRealEstate,
  iReqRealEstate,
} from "../../interfaces/realEstates.interfaces";
import { returnRealEstateSchema } from "../../schemas/realEstate.schemas";

const registerRealEstate = async (
  data: iReqRealEstate
): Promise<iCompleteRealEstate> => {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const addressRepository: Repository<Address> =
    AppDataSource.getRepository(Address);

  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const checkUniqueAddress: Address | null = await addressRepository.findOne({
    where: {
      city: data.address.city,
      state: data.address.state,
      street: data.address.street,
      zipCode: data.address.zipCode,
    },
  });

  if (checkUniqueAddress) {
    throw new AppError("Address already exists", 409);
  }

  const address: Address = addressRepository.create(data.address);
  await addressRepository.save(address);

  const category: Category | null = await categoryRepository.findOneBy({
    id: data.categoryId,
  });

  const realEstate: RealEstate = realEstateRepository.create({
    value: data.value,
    size: data.size,
    category,
    address,
  });

  await realEstateRepository.save(realEstate);

  const newRealEstate = returnRealEstateSchema.parse(realEstate);

  return newRealEstate;
};

export default registerRealEstate;
