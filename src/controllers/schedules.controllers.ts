import { Request, Response } from "express";
import getAllSchedulesService from "../services/schedule/getAllSchedules.service";
import registerScheduleService from "../services/schedule/registerNewSchedule.service";

const getRealEstatesByScheduleController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const realEstate = await getAllSchedulesService(+req.params.id);
  return res.status(200).json(realEstate);
};

const registerScheduleController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  await registerScheduleService(req.body, +req.user.id);

  return res.status(201).json({ message: "Schedule created" });
};

export { getRealEstatesByScheduleController, registerScheduleController };
