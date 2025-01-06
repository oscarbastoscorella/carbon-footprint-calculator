import {
  EnergyConsumption,
  FootprintLocation,
  FootprintSummary,
} from "@ts-types/electricity";

export const energyConsumptionList: EnergyConsumption[] = [
  {
    id: "1",
    date: "Dec 27, 2024",
    consumption: 15,
  },
  {
    id: "2",
    date: "Dec 28, 2024",
    consumption: 22.1,
  },
  {
    id: "3",
    date: "Dec 29, 2024",
    consumption: 35.87,
  },

  {
    id: "4",
    date: "Dec 30, 2024",
    consumption: 35.87,
  },
  {
    id: "5",
    date: "Dec 31, 2024",
    consumption: 16.12,
  },
  {
    id: "6",
    date: "Jan 01, 2025",
    consumption: 21.66,
  },
  {
    id: "7",
    date: "Jan 02, 2025",
    consumption: 21.66,
  },
  {
    id: "8",
    date: "Jan 03, 2025",
    consumption: 21.66,
  },
  {
    id: "9",
    date: "Jan 04, 2025",
    consumption: 78.66,
  },
  {
    id: "10",
    date: "Jan 05, 2025",
    consumption: 65.61,
  },
];

export const footprintSummary: FootprintSummary = {
  id: "summary-1",
  consumption: 210.18,
  average: 1203.86,
  emissions: 8427,
};

export const footprintLocation: FootprintLocation = {
  id: "location-1",
  country: "United States",
  state: "California",
};
