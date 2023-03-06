import "dotenv/config";
import AppError from "../../errors/appError";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { Repository } from "typeorm";

const loginService = async (data: any): Promise<string> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const foundUser: User | null = await userRepository.findOneBy({
    email: data.email,
  });

  if (!foundUser) {
    throw new AppError("Wrong email or password", 401);
  }

  const checkPassword: boolean = await compare(
    data.password,
    foundUser.password
  );

  if (!checkPassword) {
    throw new AppError("Wrong email or password", 401);
  }

  const token: string = jwt.sign(
    {
      admin: foundUser.admin,
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: "24h",
      subject: foundUser.id + "",
    }
  );

  return token;
};

export default loginService;
