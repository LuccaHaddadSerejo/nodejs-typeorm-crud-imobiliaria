import { Request, Response } from "express";
import registerRealEstateService from "../services/realEstate/registerRealEstate.service";
import getAllRealEstatesService from "../services/realEstate/getAllRealEstates.service";

const registerRealEstateController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newRealEstate = await registerRealEstateService(req.body);
  return res.status(201).json(newRealEstate);
};

const getAllRealEstatesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const realEstates = await getAllRealEstatesService();

  return res.status(200).json(realEstates);
};

export { registerRealEstateController, getAllRealEstatesController };
