import {
  MdDirectionsCar,
  MdElectricalServices,
  MdOutlineFlightTakeoff,
  MdOutlineHome,
  MdOutlineTrain,
} from "react-icons/md";

import { DockCard } from "./Card";
import { Flex } from "@chakra-ui/react";

function App() {
  return (
    <Flex
      as={"nav"}
      bg="gray.300"
      _dark={{ bg: "whiteAlpha.200" }}
      h={14}
      align="end"
      gap={2}
      borderRadius={8}
      py={2}
      px={3}
    >
      <DockCard IconButton={MdElectricalServices} />
      <DockCard IconButton={MdDirectionsCar} />
      <DockCard IconButton={MdOutlineFlightTakeoff} />
      <DockCard IconButton={MdOutlineTrain} />
      <DockCard IconButton={MdOutlineHome} />
    </Flex>
  );
}

export default App;
