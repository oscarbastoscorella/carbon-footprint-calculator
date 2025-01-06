import {
  energyConsumptionList,
  footprintLocation,
  footprintSummary,
} from "./data";
import { factory, primaryKey } from "@mswjs/data";

import { generateConsumptionData } from "../utils";

const db = factory({
  energyConsumption: {
    id: primaryKey(String),
    date: String,
    consumption: Number,
  },
  carbonFootprint: {
    date: primaryKey(String),
    consumption: Number,
  },
  footprintSummary: {
    id: primaryKey(String),
    consumption: Number,
    average: Number,
    emissions: Number,
  },
  footprintLocation: {
    id: primaryKey(String),
    country: String,
    state: String,
  },
});

energyConsumptionList.forEach(db.energyConsumption.create);

db.footprintSummary.create(footprintSummary);

db.footprintLocation.create(footprintLocation);

generateConsumptionData(25, 65).forEach(([date, consumption]) => {
  db.carbonFootprint.create({ date, consumption });
});

export { db };
