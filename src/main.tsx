import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "./components/App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeProvider } from "@ui/color-mode";
import ReactDOM from "react-dom/client";
import system from "./theme/customTheme.ts";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

async function enableMocking() {
  if (process.env.NODE_ENV !== "development") return;

  const { worker } = await import("./mocks/browser");

  return worker.start({
    onUnhandledRequest: "bypass",
  });
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ChakraProvider value={system}>
          <ColorModeProvider>
            <App />
          </ColorModeProvider>
        </ChakraProvider>
      </BrowserRouter>
    </QueryClientProvider>,
  );
});
