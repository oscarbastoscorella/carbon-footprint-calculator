import { addDays, differenceInDays, format } from "date-fns";

import { CarbonFootprint } from "@ts-types/electricity";

export function generateConsumptionData(
  min: number,
  max: number,
): CarbonFootprint {
  const endDate = new Date();
  const startDate = new Date(
    endDate.getFullYear() - 1,
    endDate.getMonth(),
    endDate.getDate() - 1,
  );

  return Array.from(
    { length: differenceInDays(endDate, startDate) + 1 },
    (_, i) => [
      format(addDays(startDate, i), "yyyy-MM-dd"),
      +(Math.random() * (max - min) + min).toFixed(2),
    ],
  );
}
