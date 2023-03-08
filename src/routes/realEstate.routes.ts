import { Router } from "express";
import {
  getAllRealEstatesController,
  registerRealEstateController,
} from "../controllers/realEstates.controllers";
import { checkAdminStatus } from "../middlewares/user";
import checkReqData from "../middlewares/validateData.middleware";
import checkIfTokenIsValid from "../middlewares/validateToken.middleware";
import { reqRealEstateSchema } from "../schemas";

const realEstateRoutes: Router = Router();

realEstateRoutes.post(
  "",
  checkIfTokenIsValid,
  checkReqData(reqRealEstateSchema),
  checkAdminStatus,
  registerRealEstateController
);

realEstateRoutes.get("", getAllRealEstatesController);

export default realEstateRoutes;
