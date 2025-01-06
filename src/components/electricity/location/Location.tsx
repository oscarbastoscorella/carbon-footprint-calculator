import { Flex, Grid, Skeleton, Text } from "@chakra-ui/react";

import { FootprintLocation } from "@ts-types/electricity";

export type LocationProps = {
  location?: FootprintLocation;
  isLoading?: boolean;
};

export function Location({
  location = emptyLocation,
  isLoading,
}: LocationProps) {
  const { country, state } = location;
  return (
    <Flex direction="column" w="100%" gap={2}>
      <Grid templateColumns="1fr 1fr">
        {[
          { label: "Country", value: country },
          { label: "State", value: state },
        ].map(({ label, value }) => (
          <Flex key={label} direction="column">
            <Text color="gray.500" fontSize={"xs"}>
              {label}
            </Text>
            {isLoading ? (
              <Skeleton w="120px" height={"24px"} bg={"whiteAlpha.50"} />
            ) : (
              <Text fontSize="sm" fontWeight="semibold" lineHeight={"24px"}>
                {value}
              </Text>
            )}
          </Flex>
        ))}
      </Grid>
    </Flex>
  );
}

export default Location;

const emptyLocation: FootprintLocation = {
  id: "",
  country: "",
  state: "",
};
