/* eslint-disable react-refresh/only-export-components */

import React, { ReactElement } from "react";
import { RenderOptions, render } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { beforeAll } from "vitest";
import system from "../theme/customTheme";

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ChakraProvider value={system}>
      <BrowserRouter>{children} </BrowserRouter>
    </ChakraProvider>
  );
};

const customRender: (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) => ReturnType<typeof render> = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) => render(ui, { wrapper: AllTheProviders, ...options });

// Mocking ResizeObserver
class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

window.ResizeObserver = ResizeObserver;

beforeAll(() => {
  // Suppress the specific error
  const originalConsoleError = console.error;
  console.error = (message, ...args) => {
    if (message.includes("Could not parse CSS stylesheet")) {
      // Ignore specific CSS parsing errors
      return;
    }
    originalConsoleError(message, ...args);
  };
});

export * from "@testing-library/react";
export { customRender as render };
