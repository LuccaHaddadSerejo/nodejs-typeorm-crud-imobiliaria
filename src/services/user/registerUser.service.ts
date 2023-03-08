import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { iReqUser, iReturnUser } from "../../interfaces/user.interfaces";
import { returnUserSchema } from "../../schemas";

const registerUserService = async (data: iReqUser): Promise<iReturnUser> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User = userRepository.create(data);

  await userRepository.save(user);

  const newUser = returnUserSchema.parse(user);

  return newUser;
};

export default registerUserService;
