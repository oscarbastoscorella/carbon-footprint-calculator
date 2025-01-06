import { Flex, Icon, Text } from "@chakra-ui/react";

import { FallbackProps } from "react-error-boundary";
import { MdErrorOutline } from "react-icons/md";

export function ComponentFallback({ error }: FallbackProps) {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      w="100%"
      gap={4}
      mb={4}
    >
      <Flex direction={"column"} justify={"center"} align={"center"} gap={1}>
        <Flex align={"center"} justify={"center"} gap={1}>
          <Icon fontSize={"md"}>
            <MdErrorOutline />
          </Icon>
          <Text fontSize={"sm"} fontWeight={"light"}>
            {`Oops! ${error.message}`}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default ComponentFallback;
