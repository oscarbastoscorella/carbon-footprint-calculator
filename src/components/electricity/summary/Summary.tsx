import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";

import { FootprintSummary } from "@ts-types/electricity";
import { Skeleton } from "@chakra-ui/react";

type SummaryDetailsProps = {
  footprintSummary?: FootprintSummary;
  isLoading?: boolean;
};

export function Summary({
  footprintSummary = emptyFootprintSummary,
  isLoading,
}: SummaryDetailsProps) {
  const { consumption, average, emissions } = footprintSummary;

  return (
    <Flex direction="column" gap={2} w="100%">
      <Heading
        fontSize="md"
        fontWeight="semibold"
        color="yellow.600"
        _dark={{ color: "yellow.500" }}
      >
        Summary
      </Heading>
      <Grid templateColumns="1fr 1fr">
        <Box>
          {[
            { label: "Consumption", value: `${consumption} mvh` },
            { label: "Average", value: `${average} kg/day` },
          ].map(({ label, value }) => (
            <Box key={label} mb={6}>
              <Text color="gray.500" fontSize="xs">
                {label}
              </Text>
              {isLoading ? (
                <Skeleton h={6} w="100px" bg={"whiteAlpha.50"} />
              ) : (
                <Text fontWeight="semibold">{value}</Text>
              )}
            </Box>
          ))}
        </Box>
        <Box>
          <Text color="gray.500" fontSize="xs">
            Total Emissions
          </Text>
          {isLoading ? (
            <Skeleton h={10} w="150px" bg={"whiteAlpha.50"} />
          ) : (
            <Flex align="end" gap={2} mt={1}>
              <Text fontSize="4xl" fontWeight="bold" lineHeight="38px">
                {emissions}
              </Text>
              <Text fontWeight="semibold">kg</Text>
            </Flex>
          )}
        </Box>
      </Grid>
    </Flex>
  );
}

export default Summary;

const emptyFootprintSummary: FootprintSummary = {
  id: "empty-summary",
  consumption: 0,
  average: 0,
  emissions: 0,
};
