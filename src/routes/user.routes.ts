import { Router } from "express";
import {
  deleteUserController,
  getAllUsersController,
  registerUserController,
  updateUserController,
} from "../controllers/user.controller";
import {
  checkUniqueEmail,
  checkAdminStatus,
  checkIfUserExists,
  matchIds,
} from "../middlewares/user";
import checkReqData from "../middlewares/validateData.middleware";
import checkIfTokenIsValid from "../middlewares/validateToken.middleware";

import { reqUserSchema } from "../schemas";
import { updateUserSchema } from "../schemas/user.schemas";

const userRouters: Router = Router();

userRouters.post(
  "",
  checkReqData(reqUserSchema),
  checkUniqueEmail,
  registerUserController
);
userRouters.get(
  "",
  checkIfTokenIsValid,
  checkAdminStatus,
  getAllUsersController
);

userRouters.patch(
  "/:id",
  checkIfTokenIsValid,
  checkIfUserExists,
  checkReqData(updateUserSchema),
  matchIds,
  checkUniqueEmail,
  updateUserController
);

userRouters.delete(
  "/:id",
  checkIfTokenIsValid,
  checkIfUserExists,
  checkAdminStatus,
  deleteUserController
);

export default userRouters;
