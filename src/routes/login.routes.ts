import { Router } from "express";
import { loginController } from "../controllers/login.controller";
import checkReqData from "../middlewares/validateData.middleware";
import { loginSchema } from "../schemas";

const loginRouters: Router = Router();

loginRouters.post("", checkReqData(loginSchema), loginController);

export default loginRouters;
