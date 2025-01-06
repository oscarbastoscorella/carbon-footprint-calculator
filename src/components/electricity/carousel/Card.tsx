import { Flex, Text } from "@chakra-ui/react";
import { ProgressBar, ProgressRoot } from "@ui/progress";

import type { EnergyConsumption } from "@ts-types/electricity";

type CardProps = {
  energyConsumption: EnergyConsumption;
};

export default function Card({
  energyConsumption: { date, consumption },
}: CardProps) {
  return (
    <Flex
      w="100%"
      h="100%"
      bg="gray.50"
      _dark={{ bg: "blackAlpha.900" }}
      p={5}
      direction="column"
      justify="space-between"
      gap={1}
      flexShrink={0}
      role="carousel-card"
    >
      <Flex direction="column" gap={1}>
        <Text
          fontWeight="400"
          fontSize="xs"
          color="gray.700"
          _dark={{ color: "gray.400" }}
        >
          {date}
        </Text>
        <Flex gap={1} align="end">
          <Text fontWeight="bold" fontSize="2xl" lineHeight="32px">
            {consumption.toFixed(2)}
          </Text>
          <Text fontSize="sm">mwh</Text>
        </Flex>
      </Flex>
      <ProgressRoot size="sm" width="100%" value={consumption} mt={3}>
        <ProgressBar colorPalette={consumption > 30 ? "pink" : "teal"} />
      </ProgressRoot>
    </Flex>
  );
}
