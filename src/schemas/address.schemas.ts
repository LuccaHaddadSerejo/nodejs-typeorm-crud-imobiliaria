import { z } from "zod";

const completeAddressSchema = z.object({
  id: z.number(),
  street: z.string(),
  zipCode: z.string().max(8),
  number: z.string().max(7).optional(),
  city: z.string(),
  state: z.string().max(2),
});

const reqAddressSchema = completeAddressSchema.omit({ id: true });

export { completeAddressSchema, reqAddressSchema };
