import { AbsoluteCenter, Flex } from "@chakra-ui/react";

import { ColorModeButton } from "@ui/color-mode";
import Dock from "../common/dock/Dock";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "@common/site/ErrorFallback";
import Header from "../common/header/Header";
import { Outlet } from "react-router-dom";
import { Toaster } from "@ui/toaster";

export function Layout() {
  return (
    <>
      <Flex flexDirection="column" w="100%" minH="100vh" overflowY="scroll">
        <Header />
        <Flex flex={1} as="main" justify="center">
          <Flex py={5} w="100%" maxW="1350px" h="100%">
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Outlet />
            </ErrorBoundary>
          </Flex>
          <Flex position={"absolute"} right={16} bottom={8} zIndex={1}>
            <ColorModeButton />
          </Flex>
        </Flex>
        <AbsoluteCenter axis="horizontal" bottom={8} zIndex={1}>
          <Dock />
        </AbsoluteCenter>
      </Flex>
      <Toaster />
    </>
  );
}
