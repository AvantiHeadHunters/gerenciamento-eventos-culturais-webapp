import { createContext, useState } from "react";
import Proptypes from "prop-types";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [estado, setEstado] = useState();
  const testFunction = () => {
    console.log("teste");
  };

  const testFunctionTwo = () => {
    console.log("teste2");
  };

  return (
    <GlobalContext.Provider
      value={{ testFunction, testFunctionTwo, estado, setEstado }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: Proptypes.node
}.isRequired;