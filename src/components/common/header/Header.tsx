import { Avatar } from "@ui/avatar";
import { Flex } from "@chakra-ui/react";
import Logo from "./Logo";

export default function Header() {
  return (
    <Flex
      as="header"
      bg="teal.800"
      _dark={{ bg: "teal.700" }}
      py={2}
      justifyContent={"center"}
    >
      <Flex
        width={"100%"}
        justifyContent={"space-between"}
        alignItems={"center"}
        maxWidth={"1350px"}
      >
        <Logo title="Carbon Footprint Calculator" />
        <Avatar name="Oscar Bastos" size={"xs"} />
      </Flex>
    </Flex>
  );
}
