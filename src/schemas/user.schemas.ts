import { number, z } from "zod";

const completeUserSchema = z.object({
  id: number(),
  name: z.string().max(45),
  email: z.string().email(),
  password: z.string(),
  admin: z.boolean().nullish(),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullish(),
});

const reqUserSchema = completeUserSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});

const updateUserSchema = reqUserSchema
  .omit({
    admin: true,
  })
  .partial();

const returnUserSchema = completeUserSchema.omit({ password: true });

const multipleUsersSchema = reqUserSchema.array();

const returnMultipleUsersSchema = completeUserSchema
  .omit({ password: true })
  .array();

export {
  completeUserSchema,
  reqUserSchema,
  returnUserSchema,
  multipleUsersSchema,
  updateUserSchema,
  returnMultipleUsersSchema,
};
