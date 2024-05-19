import { Route, Routes } from "react-router-dom"
import { BasicLayout } from "../layouts/index.js"
import { Inicial } from "../pages/inicial/Inicial.jsx"
import { PageNotFound } from "../pages/pagenotfound/PageNotFound.jsx"
import { FormCreateEvent } from "../pages/FormCriaEvento/FormCreateEvent.jsx"
import { FormCreateCategory } from "../pages/FormCriaCategoria/FormCreateCategory.jsx"
import { FormCreateLocation } from "../pages/FormCriaLocal/FormCreateLocation.jsx"
import { Cadastro } from "../pages/Cadastro/Cadastro.jsx"
import { Login } from "../pages/Login/Login.jsx"
import { EventBox } from "../components/EventBox/EventBox.jsx"

export const Routers = props => {
   return (
      <Routes>
         <Route path="/" element={<BasicLayout />}>
            <Route path="/home" element={<Inicial/>} />
            <Route path="/formevent" element={<FormCreateEvent />} />
            <Route path="/formcategory" element={<FormCreateCategory/>}/>
            <Route path="/formlocation" element={<FormCreateLocation/>} />
            <Route path="/teste/eventbox" element={<EventBox/>} />
         </Route>
         <Route path="*" element={<PageNotFound/>} />
         <Route path="/cadastro" element={<Cadastro/>}/>
         <Route path="/login" element={<Login/>}/>
         
      </Routes>
   )
}