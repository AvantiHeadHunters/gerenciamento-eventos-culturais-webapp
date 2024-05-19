import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Routers } from "./route/Route.jsx";

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
         <Routers />
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
