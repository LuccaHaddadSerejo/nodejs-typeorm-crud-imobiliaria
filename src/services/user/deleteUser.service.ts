import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import AppError from "../../errors/appError";

const deleteUserService = async (data: boolean, id: number): Promise<void> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  if (!data) {
    throw new AppError("Insufficient permission", 403);
  }
  const user: User | null = await userRepository.findOneBy({
    id: id,
  });

  await userRepository.softRemove(user!);
};

export default deleteUserService;
