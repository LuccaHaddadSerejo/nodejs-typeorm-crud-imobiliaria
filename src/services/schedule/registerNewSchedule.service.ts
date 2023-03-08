import { Brackets, Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate, Schedule, User } from "../../entities";
import AppError from "../../errors/appError";
import { iReqSchedule } from "../../interfaces/schedule.interfaces";

const registerScheduleService = async (
  data: iReqSchedule,
  userId: number
): Promise<void> => {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const scheduleRepository: Repository<Schedule> =
    AppDataSource.getRepository(Schedule);

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const checkValidDataAndHour = await scheduleRepository
    .createQueryBuilder("schedules")
    .select("schedules")
    .where("schedules.realEstate = :id", { id: data.realEstateId })
    .andWhere("schedules.hour = :dataHour", { dataHour: data.hour })
    .andWhere("schedules.date = :dataDate", { dataDate: data.date })
    .getOne();

  if (checkValidDataAndHour) {
    throw new AppError(
      "Schedule to this real estate at this date and time already exists",
      409
    );
  }

  const checkIfUserIsScheduled = await scheduleRepository
    .createQueryBuilder("schedules")
    .select("schedules")
    .where("schedules.user = :id", { id: userId })
    .andWhere(
      new Brackets((qb) => {
        qb.where("schedules.date = :dataDate", {
          dataDate: data.date,
        }).andWhere("schedules.hour = :dataHour", { dataHour: data.hour });
      })
    )
    .getOne();

  if (checkIfUserIsScheduled) {
    throw new AppError(
      "User schedule to this real estate at this date and time already exists",
      409
    );
  }

  if (parseFloat(data.hour) < 8 || parseFloat(data.hour) > 18) {
    throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);
  }

  const getDate = new Date(data.date);
  const day = getDate.getDay();
  if (day === 0 || day === 6) {
    throw new AppError("Invalid date, work days are monday to friday", 400);
  }

  const realEstate = await realEstateRepository
    .createQueryBuilder("realEstate")
    .select("realEstate")
    .where("realEstate.id = :id", { id: data.realEstateId })
    .getOne();

  if (!realEstate) {
    throw new AppError("RealEstate not found", 404);
  }

  const userQuery = await userRepository
    .createQueryBuilder("user")
    .select("user")
    .where("user.id = :id", { id: userId })
    .getOne();

  const schedule: Schedule = scheduleRepository.create({
    date: data.date,
    hour: data.hour,
    realEstate: realEstate!,
    user: userQuery!,
  });

  await scheduleRepository.save(schedule);
};

export default registerScheduleService;
