import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { iReturnUser, tUpdateUser } from "../../interfaces/user.interface";
import { returnUserSchema } from "../../schemas";

const registerUserService = async (
  data: tUpdateUser,
  id: number
): Promise<iReturnUser> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const oldData = await userRepository.findOneBy({
    id: id,
  });

  const user: User = userRepository.create({
    ...oldData,
    ...data,
  });

  await userRepository.save(user);

  return returnUserSchema.parse(user);
};

export default registerUserService;
