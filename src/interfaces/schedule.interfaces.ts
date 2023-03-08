import { z } from "zod";
import { completeScheduleSchema, reqScheduleSchema } from "../schemas";

type iCompleteSchedule = z.infer<typeof completeScheduleSchema>;
type iReqSchedule = z.infer<typeof reqScheduleSchema>;

export { iCompleteSchedule, iReqSchedule };
