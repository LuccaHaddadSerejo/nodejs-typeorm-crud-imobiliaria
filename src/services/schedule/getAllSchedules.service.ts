import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";

const getAllSchedulesService = (id: number): Promise<any> => {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const realEstates = realEstateRepository
    .createQueryBuilder("realEstates")
    .select(["realEstates", "addresses", "categories", "schedules", "users"])
    .innerJoin("realEstates.address", "addresses")
    .innerJoin("realEstates.category", "categories")
    .innerJoin("realEstates.schedules", "schedules")
    .innerJoin("schedules.user", "users")
    .where("realEstates.id = :id", { id: id })
    .getOne();

  return realEstates;
};

export default getAllSchedulesService;
