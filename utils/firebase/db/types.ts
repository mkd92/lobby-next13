import { z } from "zod";
export const propertyFormSchema = z.object({
  uid: z.string(),
  propName: z.string().min(6),
  propAddress: z.object({
    line1: z.string().min(10),
    line2: z.string().optional(),
    city: z.string().min(3),
    state: z.string().min(3),
    pinCode: z.number().min(100000).max(999999),
  }),
});

export type PropertyFormDataType = z.infer<typeof propertyFormSchema>;
export interface PropertyFormState {
  data: PropertyFormDataType;
}
