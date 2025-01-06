import {
  CarbonFootprint,
  EnergyConsumption,
  FootprintLocation,
  FootprintSummary,
} from "@ts-types/electricity";

import axios from "axios";

const apiCall = async <T>(
  method: "get" | "post" | "put",
  url: string,
  data?: T,
  errorMessage?: string,
): Promise<T> => {
  try {
    const response = await axios({ method, url: `/api${url}`, data });
    return response.data;
  } catch (error) {
    throw new Error(errorMessage, { cause: error });
  }
};

export const getEnergyConsumption = () =>
  apiCall<EnergyConsumption[]>(
    "get",
    "/energyConsumption",
    undefined,
    "Error loading energy consumption",
  );

export const getFootprintSummary = () =>
  apiCall<FootprintSummary>(
    "get",
    "/footprintSummary",
    undefined,
    "Error loading summary",
  );

export const getCarbonFootprint = () =>
  apiCall<CarbonFootprint>(
    "get",
    "/carbonFootprint",
    undefined,
    "Error loading carbon footprint chart",
  );

export const getFootprintLocation = () =>
  apiCall<FootprintLocation>(
    "get",
    "/footprintLocation",
    undefined,
    "Error loading carbon footprint location",
  );

//
export const updateFootprintLocation = (data: FootprintLocation) =>
  apiCall<FootprintLocation>(
    "put",
    "/footprintLocation",
    data,
    "Error updating carbon footprint location",
  );

export const createEnergyConsumption = (data: EnergyConsumption) =>
  apiCall<EnergyConsumption>(
    "post",
    "/energyConsumption",
    data,
    "Error creating energy consumption entry",
  );
