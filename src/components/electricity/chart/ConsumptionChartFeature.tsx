import ConsumptionChart from "./ConsumptionChart";
import { getCarbonFootprint } from "@services/electricity";
import { useQuery } from "@tanstack/react-query";

export function ConsumptionChartFeature() {
  const { data: carbonFootprint, isLoading: footprintIsLoading } = useQuery({
    queryKey: ["carbonFootprint"],
    queryFn: getCarbonFootprint,
    throwOnError: true,
  });

  return (
    <ConsumptionChart data={carbonFootprint} isLoading={footprintIsLoading} />
  );
}

export default ConsumptionChartFeature;
