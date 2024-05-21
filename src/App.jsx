import { useContext } from "react";
import { Routers } from "./route/Route.jsx";
import { GlobalContext } from "./providers/globalContext.jsx";

const App = () => {
  const { testFunction } = useContext(GlobalContext);

  testFunction();
  return <Routers />;
};

export default App;
