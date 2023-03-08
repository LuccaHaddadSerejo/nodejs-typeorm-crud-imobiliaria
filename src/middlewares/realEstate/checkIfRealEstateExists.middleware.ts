import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import AppError from "../../errors/appError";

const checkIfRealEstateExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void | Response> => {
  const realEstateRepository = AppDataSource.getRepository(RealEstate);

  const realEstate: RealEstate | null = await realEstateRepository.findOneBy({
    id: +req.params.id,
  });

  if (realEstate) {
    return next();
  }

  throw new AppError("RealEstate not found", 404);
};

export default checkIfRealEstateExists;
