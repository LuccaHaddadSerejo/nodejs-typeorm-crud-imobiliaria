import "dotenv/config";
import AppError from "../../errors/appError";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { Repository } from "typeorm";
import { iLoginReq } from "../../interfaces/login.interface";

const loginService = async (data: iLoginReq): Promise<string> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const foundUser: User | null = await userRepository.findOneBy({
    email: data.email,
  });

  if (!foundUser) {
    throw new AppError("Invalid credentials", 401);
  }

  const checkPassword: boolean = await compare(
    data.password,
    foundUser.password
  );

  if (!checkPassword) {
    throw new AppError("Invalid credentials", 401);
  }

  const token: string = jwt.sign(
    {
      admin: foundUser.admin,
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: process.env.EXPIRES_IN,
      subject: foundUser.id + "",
    }
  );

  return token;
};

export default loginService;
