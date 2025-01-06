import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";

import ElectricityPage from "./electricity/ElectricityPage";
import { Flex } from "@chakra-ui/react";
import { Layout } from "./layouts/Layout";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Flex h="100vh" justifyContent={"center"}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ElectricityPage />} />
          </Route>
        </Routes>
      </Flex>
    </QueryClientProvider>
  );
}

export default App;
