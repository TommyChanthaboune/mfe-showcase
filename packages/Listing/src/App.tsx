import { ChakraProvider } from "@chakra-ui/react";

import ProductCard from "./component/ProductCard";

const App = () => {
  return (
    <ChakraProvider>
      <ProductCard />
    </ChakraProvider>
  );
};

export default App;
