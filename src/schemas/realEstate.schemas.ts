import { z } from "zod";
import { reqAddressSchema, completeAddressSchema } from "./address.schemas";
import { reqCategorySchema } from "./category.schemas";

const completeRealEstateSchema = z.object({
  id: z.number(),
  value: z.number().min(0).or(z.string()),
  size: z.number().positive(),
  address: completeAddressSchema,
  categoryId: z.number(),
  sold: z.boolean().optional(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const reqRealEstateSchema = completeRealEstateSchema
  .omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    sold: true,
  })
  .extend({
    address: reqAddressSchema,
  });

const returnRealEstateSchema = completeRealEstateSchema.extend({
  categoryId: reqCategorySchema,
});

const multipleRealEstatesSchema = returnRealEstateSchema
  .omit({ categoryId: true })
  .array();

export {
  completeRealEstateSchema,
  reqRealEstateSchema,
  returnRealEstateSchema,
  multipleRealEstatesSchema,
};
