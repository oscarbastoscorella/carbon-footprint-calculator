import Location from "./Location";
import { getFootprintLocation } from "@services/electricity";
import { useEffect } from "react";
import { useFootprintLocationStore } from "@store/useFootprintLocationStore";
import { useQuery } from "@tanstack/react-query";

export function LocationFeature() {
  const setLocation = useFootprintLocationStore((state) => state.setLocation);

  const { data: footprintLocation, isLoading: locationIsLoading } = useQuery({
    queryKey: ["footprintLocation"],
    queryFn: getFootprintLocation,
  });

  useEffect(() => {
    if (footprintLocation) {
      setLocation(footprintLocation);
    }
  }, [footprintLocation, setLocation]);

  return (
    <Location location={footprintLocation} isLoading={locationIsLoading} />
  );
}

export default LocationFeature;
