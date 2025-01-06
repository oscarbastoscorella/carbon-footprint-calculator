import { FootprintLocation } from "@ts-types/electricity";
import { create } from "zustand";

type FootprintLocationState = {
  location: FootprintLocation;
  setLocation: (location: FootprintLocation) => void;
};

const defaultLocation: FootprintLocation = {
  id: "location-1",
  country: "United States",
  state: "California",
};

export const useFootprintLocationStore = create<FootprintLocationState>(
  (set) => ({
    location: defaultLocation,
    setLocation: (location) => set({ location }),
  }),
);
