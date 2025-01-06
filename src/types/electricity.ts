export type CarbonFootprint = [string, number][];

export type EnergyConsumption = {
  id: string;
  date: string;
  consumption: number;
};

export type FootprintSummary = {
  id: string;
  consumption: number;
  average: number;
  emissions: number;
};

export type FootprintLocation = {
  id: string;
  country: string;
  state: string;
};
