import { Button, Flex, Heading, Text } from "@chakra-ui/react";

import { FallbackProps } from "react-error-boundary";

export function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      w="100%"
      h="100%"
      color="pink.400"
      gap={4}
    >
      <Flex direction={"column"} justify={"center"} align={"center"}>
        <Heading size="2xl" mb={4}>
          Oops! Something went wrong!
        </Heading>
        <Text>{error.message}</Text>
      </Flex>
      <Button onClick={resetErrorBoundary} mt={4} variant={"outline"}>
        Try again
      </Button>
    </Flex>
  );
}

export default ErrorFallback;
