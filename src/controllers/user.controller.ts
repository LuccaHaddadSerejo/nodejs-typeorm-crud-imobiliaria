import { Request, Response } from "express";
import registerUserService from "../services/user/registerUser.service";

const registerUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newUser = await registerUserService(req.body);

  return res.status(201).json(newUser);
};

export { registerUserController };
