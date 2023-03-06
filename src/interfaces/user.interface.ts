import { z } from "zod";
import {
  completeUserSchema,
  multipleUsersSchema,
  reqUserSchema,
  returnUserSchema,
} from "../schemas";

type iCompleteUser = z.infer<typeof completeUserSchema>;
type iReqUser = z.infer<typeof reqUserSchema>;
type iReturnUser = z.infer<typeof returnUserSchema>;
type iMultipleUsers = z.infer<typeof multipleUsersSchema>;

export { iCompleteUser, iReqUser, iReturnUser, iMultipleUsers };
