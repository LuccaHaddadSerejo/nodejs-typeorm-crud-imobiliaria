import { hashSync } from "bcryptjs";
import { number, z } from "zod";

const completeUserSchema = z.object({
  id: number(),
  name: z.string(),
  email: z.string().email(),
  password: z.string().transform((password) => {
    return hashSync(password, 10);
  }),
  admin: z.boolean().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullable(),
});

const reqUserSchema = completeUserSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});

const returnUserSchema = completeUserSchema.omit({ password: true });

const multipleUsersSchema = reqUserSchema.array();

export {
  completeUserSchema,
  reqUserSchema,
  returnUserSchema,
  multipleUsersSchema,
};
