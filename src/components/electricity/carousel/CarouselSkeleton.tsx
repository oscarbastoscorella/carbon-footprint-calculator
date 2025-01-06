import { Flex, Skeleton } from "@chakra-ui/react";

export function CarouselSkeleton() {
  return (
    <Flex gap={3} width={"100%"} overflow={"hidden"}>
      {Array.from({ length: 10 }).map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </Flex>
  );
}

function CardSkeleton() {
  return (
    <Flex
      w="210px"
      h="115px"
      bg="gray.100"
      _dark={{ bg: "gray.900" }}
      flexShrink={0}
      role="status"
    >
      <Skeleton w="100%" borderRadius={0} />
    </Flex>
  );
}
