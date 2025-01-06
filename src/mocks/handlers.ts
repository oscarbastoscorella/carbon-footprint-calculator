import { EnergyConsumption, FootprintLocation } from "@ts-types/electricity";
import { HttpResponse, delay, http } from "msw";

import { db } from "./db";
import { v4 as uuidv4 } from "uuid";

export const handlers = [
  http.get("/api/energyConsumption", async () => {
    await delay();
    const energyConsumptionList = db.energyConsumption
      .getAll()
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    return HttpResponse.json(energyConsumptionList);
    //return new HttpResponse(null, { status: 500 }); //simulate error
  }),
  http.get("/api/carbonFootprint", async () => {
    await delay();
    const carbonFootprintList = db.carbonFootprint
      .getAll()
      .map((item) => [item.date, item.consumption]);
    return HttpResponse.json(carbonFootprintList);
  }),
  http.get("/api/footprintSummary", async () => {
    await delay();
    const summary = db.footprintSummary.getAll();
    return HttpResponse.json(summary[0]);
  }),
  http.get("/api/footprintLocation", async () => {
    await delay();
    const location = db.footprintLocation.getAll();
    return HttpResponse.json(location[0]);
  }),
  http.put("/api/footprintLocation", async ({ request }) => {
    const location = (await request.json()) as FootprintLocation;

    const updatedLocation = db.footprintLocation.update({
      where: {
        id: {
          equals: location.id,
        },
      },
      data: location,
    });

    await delay();
    return HttpResponse.json(updatedLocation);
  }),
  http.post("/api/energyConsumption", async ({ request }) => {
    const energyConsumption = (await request.json()) as EnergyConsumption;

    const newEnergyConsumption = db.energyConsumption.create({
      ...energyConsumption,
      id: uuidv4(),
    });
    await delay();
    return HttpResponse.json(newEnergyConsumption, { status: 201 });
  }),
];
