import { z } from "zod";

const completeScheduleSchema = z.object({
  id: z.number(),
  date: z.string(),
  hour: z.string(),
  realEstateId: z.number(),
  userId: z.number(),
});

const reqScheduleSchema = completeScheduleSchema.omit({
  id: true,
  userId: true,
});

export { completeScheduleSchema, reqScheduleSchema };
