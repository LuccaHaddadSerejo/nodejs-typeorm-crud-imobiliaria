import { array, z } from "zod";

const completeCategorySchema = z.object({
  id: z.number(),
  name: z.string().max(45),
});

const reqCategorySchema = completeCategorySchema.omit({ id: true });

const multipleCategoriesSchema = completeCategorySchema.array();

export { completeCategorySchema, reqCategorySchema, multipleCategoriesSchema };
