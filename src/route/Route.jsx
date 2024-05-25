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
  SearchCategory,
  SearchEvent,
  ResultSearch,
  SearchLocation,
  EventPage
} from "../pages/index.js";
import {
  ListEvents,
  ListCategories,
  ListLocations,
} from "../pages/ListPages/index.js";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<BasicLayout />}>
        <Route index element={<InitialPage />} />
        <Route path="/form/create/event" element={<FormCreateEvent />} />
        <Route path="/explore" element={<Dashboard />} />
        <Route path="/form/create/category" element={<FormCreateCategory />} />
        <Route path="/form/create/location" element={<FormCreateLocation />} />
        <Route path="/form/edit/event" element={<FormEditEvent />} />
        <Route path="/form/edit/category" element={<FormEditCategory />} />
        <Route path="/form/edit/location" element={<FormEditLocation />} />
        <Route path="/search/category" element={<SearchCategory />} />
        <Route path="/search/event" element={<SearchEvent />} />
        <Route path="/search-result" element={<ResultSearch />} />
        <Route path="/search/location" element={<SearchLocation />} />
        <Route path="/list/categories" element={<ListCategories />} />
        <Route path="/list/events" element={<ListEvents />} />
        <Route path="/list/locations" element={<ListLocations />} />
        <Route path="/event" element={<EventPage />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
