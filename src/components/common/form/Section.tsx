import { Flex, FlexProps, Heading } from "@chakra-ui/react";
import React, { JSX } from "react";

import ComponentFallback from "@common/site/ComponentFallback";
import { ErrorBoundary } from "react-error-boundary";
import { toaster } from "@ui/toaster";

export type SectionProps = {
  children: React.ReactNode;
} & FlexProps;

const Section = ({ children, ...props }: SectionProps) => (
  <Flex
    as="section"
    w="100%"
    direction="column"
    bg="blackAlpha.50"
    _dark={{ bg: "blackAlpha.500" }}
    p={6}
    {...props}
  >
    {children}
  </Flex>
);

Section.Header = ({
  heading,
  ActionElement,
}: {
  heading: string;
  ActionElement?: () => JSX.Element;
}) => (
  <Flex justify="space-between" align="center">
    <Heading
      fontSize="md"
      fontWeight="semibold"
      color="yellow.600"
      _dark={{ color: "yellow.500" }}
    >
      {heading}
    </Heading>
    {ActionElement && (
      <ErrorBoundary
        fallbackRender={() => <ActionElement />}
        onError={(error) =>
          toaster.create({
            title: "An error has occurred",
            description: error.message,
            type: "error",
          })
        }
      >
        <ActionElement />
      </ErrorBoundary>
    )}
  </Flex>
);

Section.Content = ({ children, ...props }: SectionProps) => (
  <ErrorBoundary
    FallbackComponent={ComponentFallback}
    onError={(error) =>
      toaster.create({
        title: "An error has occurred",
        description: error.message,
        type: "error",
      })
    }
  >
    <Flex direction="column" {...props}>
      {children}
    </Flex>
  </ErrorBoundary>
);

export default Section;
