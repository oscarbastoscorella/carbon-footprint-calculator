import { Flex, Grid, Heading } from "@chakra-ui/react";

import CarouselFeature from "./carousel/CarouselFeature";
import ConsumptionChartFeature from "./chart/ConsumptionChartFeature";
import EnergyDialog from "./energy/dialog/EnergyDialog";
import LocationDialog from "./location/dialog/LocationDialog";
import LocationFeature from "./location/LocationFeature";
import Section from "@common/form/Section";
import SummaryFeature from "./summary/SummaryFeature";

export default function ElectricityPage() {
  return (
    <Flex w="100%" h={"100%"} direction={"column"} gap={5}>
      <Heading
        fontSize={"2xl"}
        fontWeight={"bold"}
        color={"blackAlpha.800"}
        _dark={{ color: "whiteAlpha.900" }}
      >
        Electricity
      </Heading>
      <Grid templateColumns="3fr 2fr" gap={5}>
        <Section>
          <Section.Content>
            <ConsumptionChartFeature />
          </Section.Content>
        </Section>
        <Section>
          <Section.Header heading="Location" ActionElement={LocationDialog} />
          <Section.Content gap={12}>
            <LocationFeature />
            <SummaryFeature />
          </Section.Content>
        </Section>
      </Grid>
      <Section gap={4}>
        <Section.Header
          heading="Energy Consumption"
          ActionElement={EnergyDialog}
        />
        <Section.Content>
          <CarouselFeature />
        </Section.Content>
      </Section>
    </Flex>
  );
}
