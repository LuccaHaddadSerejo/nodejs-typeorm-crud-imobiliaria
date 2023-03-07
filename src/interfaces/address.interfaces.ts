import { z } from "zod";
import { completeAddressSchema, reqAddressSchema } from "../schemas";

type iCompleteAddress = z.infer<typeof completeAddressSchema>;
type iReqAddress = z.infer<typeof reqAddressSchema>;

export { iCompleteAddress, iReqAddress };
