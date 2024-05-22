import { Route, Routes } from "react-router-dom";
import { BasicLayout } from "../layouts/index.js";
import {
  InitialPage,
  Login,
  SignUp,
  FormCreateCategory,
  FormCreateEvent,
  FormCreateLocation,
  FormEditCategory,
  FormEditEvent,
  FormEditLocation,
  PageNotFound,
  Dashboard,
} from "../pages/index.js";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<BasicLayout />}>
        <Route index element={<InitialPage />} />
        <Route path="/form/create/event" element={<FormCreateEvent />} />
        <Route path="/explore" element={<Dashboard/>} />
        <Route path="/form/create/category" element={<FormCreateCategory />} />
        <Route path="/form/create/location" element={<FormCreateLocation />} />
        <Route path="/form/edit/event" element={<FormEditEvent />} />
        <Route path="/form/edit/category" element={<FormEditCategory />} />
        <Route path="/form/edit/location" element={<FormEditLocation />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
