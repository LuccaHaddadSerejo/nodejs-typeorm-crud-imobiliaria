import { DeepPartial } from "typeorm";
import { z } from "zod";
import {
  completeUserSchema,
  reqUserSchema,
  returnMultipleUsersSchema,
  returnUserSchema,
} from "../schemas";

type iCompleteUser = z.infer<typeof completeUserSchema>;
type iReqUser = z.infer<typeof reqUserSchema>;
type iReturnUser = z.infer<typeof returnUserSchema>;
type iMultipleUsers = z.infer<typeof returnMultipleUsersSchema>;
type tUpdateUser = DeepPartial<iReqUser>;

export { iCompleteUser, iReqUser, iReturnUser, iMultipleUsers, tUpdateUser };
