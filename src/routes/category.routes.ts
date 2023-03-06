import { Router } from "express";
import {
  getAllCategoriesController,
  registerCategoryController,
} from "../controllers/categories.controllers";
import { checkAdminStatus } from "../middlewares/user";
import checkReqData from "../middlewares/validateData.middleware";
import checkIfTokenIsValid from "../middlewares/validateToken.middleware";
import { reqCategorySchema } from "../schemas";

const categoriesRoutes: Router = Router();

categoriesRoutes.post(
  "",
  checkIfTokenIsValid,
  checkReqData(reqCategorySchema),
  checkAdminStatus,
  registerCategoryController
);
categoriesRoutes.get("", getAllCategoriesController);

export default categoriesRoutes;
