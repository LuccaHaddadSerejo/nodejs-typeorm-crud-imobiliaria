import { Router } from "express";
import {
  getRealEstatesByScheduleController,
  registerScheduleController,
} from "../controllers/schedules.controllers";
import checkIfRealEstateExists from "../middlewares/realEstate/checkIfRealEstateExists.middleware";
import { checkAdminStatus } from "../middlewares/user";
import checkReqData from "../middlewares/validateData.middleware";
import checkIfTokenIsValid from "../middlewares/validateToken.middleware";
import { reqScheduleSchema } from "../schemas";

const scheduleRoutes: Router = Router();

scheduleRoutes.get(
  "/realEstate/:id",
  checkIfTokenIsValid,
  checkIfRealEstateExists,
  checkAdminStatus,
  getRealEstatesByScheduleController
);

scheduleRoutes.post(
  "",
  checkIfTokenIsValid,
  checkReqData(reqScheduleSchema),
  registerScheduleController
);

export default scheduleRoutes;
