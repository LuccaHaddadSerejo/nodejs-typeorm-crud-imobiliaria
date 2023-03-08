import { Request, Response } from "express";
import registerUserService from "../services/user/registerUser.service";
import getAllUsersService from "../services/user/getAllUsers.service";
import updateUserService from "../services/user/updateUser.service";
import deleteUserService from "../services/user/deleteUser.service";

const registerUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newUser = await registerUserService(req.body);

  return res.status(201).json(newUser);
};

const getAllUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users = await getAllUsersService();

  return res.status(200).json(users);
};

const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user = await updateUserService(req.body, +req.params.id);

  return res.status(200).json(user);
};

const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  await deleteUserService(req.user.admin, +req.params.id);

  return res.status(204).json();
};

export {
  registerUserController,
  getAllUsersController,
  updateUserController,
  deleteUserController,
};
