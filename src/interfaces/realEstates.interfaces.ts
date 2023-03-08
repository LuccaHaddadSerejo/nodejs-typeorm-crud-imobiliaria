import { z } from "zod";
import {
  returnRealEstateSchema,
  reqRealEstateSchema,
  multipleRealEstatesSchema,
} from "../schemas";

type iCompleteRealEstate = z.infer<typeof returnRealEstateSchema>;
type iReqRealEstate = z.infer<typeof reqRealEstateSchema>;
type iMultipleRealEstates = z.infer<typeof multipleRealEstatesSchema>;

export { iCompleteRealEstate, iReqRealEstate, iMultipleRealEstates };
