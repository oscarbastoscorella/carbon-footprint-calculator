import Carousel from "./Carousel";
import { getEnergyConsumption } from "@services/electricity";
import { useQuery } from "@tanstack/react-query";

export function ConsumptionChartFeature() {
  const { data: energyConsumption, isLoading: consumptionIsLoading } = useQuery(
    {
      queryKey: ["energyConsumption"],
      queryFn: getEnergyConsumption,
      throwOnError: true,
    },
  );

  return <Carousel data={energyConsumption} isLoading={consumptionIsLoading} />;
}

export default ConsumptionChartFeature;
