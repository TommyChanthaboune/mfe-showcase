import { lazy, Suspense } from "react";
import { ChakraProvider, Box, SimpleGrid } from "@chakra-ui/react";

import Header from "./components/Header";
import Footer from "./components/Footer";

//@ts-ignore
const Cart = lazy(() => import("mfeCart/App"));

//@ts-ignore
const Listing = lazy(() => import("mfeListing/App"));

const App = () => {
  return (
    <ChakraProvider>
      <Box h="100%">
        <Header />

        <SimpleGrid columns={2} spacing={2} h="100%">
          <Box>
            <Suspense fallback={"loading listing..."}>
              <Listing />
            </Suspense>
          </Box>
          <Box>
            <Suspense fallback={"loading cart..."}>
              <Cart />
            </Suspense>
          </Box>
        </SimpleGrid>
      </Box>
    </ChakraProvider>
  );
};

export default App;
