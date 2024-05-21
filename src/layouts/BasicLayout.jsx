import { Outlet } from "react-router-dom"
import { Footer, Header } from "../components"

export const BasicLayout = props => {
   return (
      <>
         <Header isLogged={false} />
            <Outlet />
         <Footer />
      </>
   )
}