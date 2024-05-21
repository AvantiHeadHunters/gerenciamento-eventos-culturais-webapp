import { Route, Routes } from "react-router-dom";
import { BasicLayout } from "../layouts/index.js";
import {
  InitialPage,
  Login,
  SignUp,
  FormCreateCategory,
  FormCreateEvent,
  FormCreateLocation,
  PageNotFound
} from '../pages/index.js';

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<BasicLayout />}>
        <Route index element={<InitialPage />} />
        <Route path="/form/create/event" element={<FormCreateEvent />} />
        <Route path="/form/create/category" element={<FormCreateCategory />} />
        <Route path="/form/create/location" element={<FormCreateLocation />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />

    </Routes>
  )
};
