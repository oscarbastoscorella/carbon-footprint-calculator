import Summary from "./Summary";
import { getFootprintSummary } from "@services/electricity";
import { useQuery } from "@tanstack/react-query";

export function SummaryFeature() {
  const { data: footprintSummary, isLoading: summaryIsLoading } = useQuery({
    queryKey: ["footprintSummary"],
    queryFn: getFootprintSummary,
  });
  return (
    <Summary footprintSummary={footprintSummary} isLoading={summaryIsLoading} />
  );
}

export default SummaryFeature;
