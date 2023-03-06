import { Router } from "express";
import { registerUserController } from "../controllers/user.controller";
import checkReqData from "../middlewares/validateData.middleware";
import { reqUserSchema } from "../schemas";

const userRouters: Router = Router();

userRouters.post("", checkReqData(reqUserSchema), registerUserController);

export default userRouters;
