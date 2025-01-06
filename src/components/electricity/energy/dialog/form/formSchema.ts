import { z } from "zod";

export const formSchema = z.object({
  value: z.array(
    z
      .number({ message: "Value is required" })
      .min(1, { message: "Value must be greater than 1" })
      .max(100, { message: "Value must be less than 100" }),
  ),
  date: z.string().nonempty({ message: "Date is required" }),
});

export type AddEnergyFormValues = z.infer<typeof formSchema>;
