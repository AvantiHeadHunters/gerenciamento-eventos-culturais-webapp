import { Outlet } from "react-router-dom"
import { Footer, Header } from "../components"

export const BasicLayout = props => {
   return (
      <>
         <Header islogged={true} />
            <Outlet />
         <Footer />
      </>
   )
}