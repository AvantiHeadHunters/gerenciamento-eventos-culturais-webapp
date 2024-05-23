import { Outlet, useLocation } from "react-router-dom";
import { Footer, Header, HomePageHeader } from "../components";

export const BasicLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      {isHomePage ? <HomePageHeader /> : <Header />}
      <Outlet />
      <Footer />
    </>
  );
};
