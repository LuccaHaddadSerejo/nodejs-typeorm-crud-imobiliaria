import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { iMultipleUsers } from "../../interfaces/user.interfaces";
import { returnMultipleUsersSchema } from "../../schemas";

const getAllUsersService = async (): Promise<iMultipleUsers> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const users: Array<User> = await userRepository.find();

  return returnMultipleUsersSchema.parse(users);
};

export default getAllUsersService;
