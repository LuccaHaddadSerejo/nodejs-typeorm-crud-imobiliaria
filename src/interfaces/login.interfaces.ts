import { z } from "zod";
import { loginSchema } from "../schemas";

type iLoginReq = z.infer<typeof loginSchema>;

export { iLoginReq };
