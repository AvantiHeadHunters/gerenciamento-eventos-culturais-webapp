import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";

export const BasicLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
