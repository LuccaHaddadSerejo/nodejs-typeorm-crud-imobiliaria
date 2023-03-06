import { z } from "zod";
import {
  completeCategorySchema,
  multipleCategoriesSchema,
  reqCategorySchema,
} from "../schemas";

type iReturnCategory = z.infer<typeof completeCategorySchema>;
type iReqCategory = z.infer<typeof reqCategorySchema>;
type tMultipleCategories = z.infer<typeof multipleCategoriesSchema>;

export { iReqCategory, iReturnCategory, tMultipleCategories };
