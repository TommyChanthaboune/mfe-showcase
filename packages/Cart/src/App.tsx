import { ChakraProvider } from "@chakra-ui/react";
import CartOrderSummary from "./component/CartOrderSummary";

const App = () => {
  return (
    <ChakraProvider>
      <CartOrderSummary />
    </ChakraProvider>
  );
};

export default App;
