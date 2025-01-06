import { Flex, Heading, Icon } from "@chakra-ui/react";

import { RiLeafLine } from "react-icons/ri";

type LogoProps = {
  title: string;
};

export default function Logo({ title }: LogoProps) {
  return (
    <Flex gap={1} alignItems={"center"}>
      <Icon fontSize="22px" color={"whiteAlpha.800"}>
        <RiLeafLine aria-label="leaf icon" />
      </Icon>
      <Heading size={"sm"} color={"whiteAlpha.800"} fontWeight={"bold"}>
        {title}
      </Heading>
    </Flex>
  );
}
