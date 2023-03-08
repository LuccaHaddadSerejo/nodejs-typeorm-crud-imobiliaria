import { Router } from "express";
import {
  getAllCategoriesController,
  getRealEstateByCategoryController,
  registerCategoryController,
} from "../controllers/categories.controllers";
import checkIfCategoryExists from "../middlewares/category/checkIfCategoryExists.middleware";
import checkCategoryUniqueName from "../middlewares/category/checkUniqueName.middleware";
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
  checkCategoryUniqueName,
  registerCategoryController
);

categoriesRoutes.get("", getAllCategoriesController);

categoriesRoutes.get(
  "/:id/realEstate",
  checkIfCategoryExists,
  getRealEstateByCategoryController
);

export default categoriesRoutes;
