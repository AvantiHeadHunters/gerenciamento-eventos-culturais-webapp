import { createContext, useEffect, useState } from "react";
import Proptypes from "prop-types";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [locations, setLocations] = useState([]);
  const [categories, setCategories] = useState([]);
  const [editingCategory, setEditingCategory] = useState(null);
  const [editingEvent, setEditingEvent] = useState(null);
  const [editingLocation, setEditingLocation] = useState(null);
  const [users, setUsers] = useState([]);
  const [loggedUser, setLoggedUser] = useState(null);
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    listEventsRequest();
    listLocationsRequest();
    listCategoriesRequest();
    listUsersRequest();
    setIsLogged(JSON.parse(localStorage.getItem("@eventHunters:isLogged")));
    setLoggedUser(JSON.parse(localStorage.getItem("@eventHunters:user")));

  }, []);

  const loginRequest = async (formData) => {
    try {
      const { data } = await api.post("/user/login", formData);
      localStorage.setItem("@eventHunters:token", data.token);
      localStorage.setItem("@eventHunters:user", JSON.stringify(data));
      localStorage.setItem("@eventHunters:isLogged", true);
      setLoggedUser(data);
      setIsLogged(JSON.parse(localStorage.getItem("@eventHunters:isLogged")));
      navigate("/explore");
    } catch (error) {
      console.log(error);
      if (error.response?.data.message === "Unauthorized") {
        console.log("Email ou senha não correspondem 😅");
      }
    }
  };

  const handleLogout = async () => {
    try {
      localStorage.removeItem("@eventHunters:token");
      localStorage.removeItem("@eventHunters:user");
      localStorage.removeItem("@eventHunters:isLogged");
      setLoggedUser(null);
      setIsLogged(false);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const registerUserRequest = async (formData) => {
    try {
      await api.post("/user", formData);
      console.log("Cadastro realizado com sucesso 🎉");
    } catch (error) {
      if (error.response?.data.message === "Email already exists") {
        console.log("O email já está usando usado por outro cliente 😅");
      }
    }
  };

  const listEventsRequest = async (params = {}) => {
    try {
      const { data = [] } = await api.get("/events", {
        params,
      });
      setEvents([...data]);
    } catch (error) {
      console.log(error);
    }
  };

  const createEventRequest = async (formData) => {
    try {
      const token = localStorage.getItem("@eventHunters:token");
      await api.post("/event", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Evento cadastrado com sucesso 🎉");
    } catch (error) {
      console.log(error);
    }
  };

  const updateEventRequest = async (formData) => {
    try {
      const eventId = editingEvent.id;
      const token = localStorage.getItem("@eventHunters:token");

      const { data } = await api.put(`/event/${eventId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const newEventsList = events.map((event) => {
        if (event.id === editingEvent.id) {
          return data;
        } else {
          return event;
        }
      });

      setEvents(newEventsList);

      console.log("Evento editada com sucesso 🎉");
    } catch (error) {
      console.log(error);
    }
  };
  const deleteEventRequest = async (deletingId) => {
    try {
      const token = localStorage.getItem("@eventHunters:token");

      await api.delete(`/event/${deletingId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const newEventList = events.filter((event) => event.id !== deletingId);

      setEvents(newEventList);
      console.log("Evento deletado com sucesso 🎉");
    } catch (error) {
      console.log(error);
    }
  };

  const listLocationsRequest = async () => {
    try {
      const { data = [] } = await api.get("/locations");
      setLocations([...data]);
    } catch (error) {
      console.log(error);
    }
  };

  const createLocationRequest = async (formData) => {
    try {
      const token = localStorage.getItem("@eventHunters:token");
      await api.post("/location", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Local cadastrado com sucesso 🎉");
    } catch (error) {
      console.log(error);
    }
  };


  const updateLocationRequest = async (formData) => {
    try {
      const locationId = editingLocation.id;
      const token = localStorage.getItem("@eventHunters:token");

      const { data } = await api.put(`/location/${locationId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const newLocationsList = locations.map((location) => {
        if (location.id === editingLocation.id) {
          return data;
        } else {
          return location;
        }
      });

      setLocations(newLocationsList);
      console.log("Local editado com sucesso 🎉");
    } catch (error) {
      console.log(error);
    }
  };
  const deleteLocationRequest = async (deletingId) => {
    try {
      const token = localStorage.getItem("@eventHunters:token");

      await api.delete(`/location/${deletingId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const newLocationList = locations.filter(
        (location) => location.id !== deletingId,
      );
      setLocations(newLocationList);
      console.log("Local deletado com sucesso 🎉");
    } catch (error) {
      console.log(error);
    }
  };
  const listCategoriesRequest = async () => {
    try {
      const token = localStorage.getItem("@eventHunters:token");
      const { data = [] } = await api.get("/categories", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCategories([...data]);
    } catch (error) {
      console.log(error);
    }
  };

  const createCategoryRequest = async (formData) => {
    try {
      const token = localStorage.getItem("@eventHunters:token");
      await api.post("/category", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Categoria criada com sucesso 🎉");
    } catch (error) {
      console.log(error);
    }
  };

  const updateCategoryRequest = async (formData) => {
    try {
      const categoryId = editingCategory.id;
      const token = localStorage.getItem("@eventHunters:token");

      const { data } = await api.put(`/category/${categoryId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const newCategoriesList = categories.map((contact) => {
        if (contact.id === editingCategory.id) {
          return data;
        } else {
          return contact;
        }
      });

      setCategories(newCategoriesList);
      console.log("Categoria editada com sucesso 🎉");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCategoryRequest = async (deletingId) => {
    try {
      const token = localStorage.getItem("@eventHunters:token");

      await api.delete(`/category/${deletingId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const newCategoriesList = categories.filter(
        (category) => category.id !== deletingId,
      );

      setCategories(newCategoriesList);
      console.log("Categoria deletada com sucesso 🎉");
    } catch (error) {
      console.log(error);
    }
  };

  const listUsersRequest = async () => {
    try {
      const token = localStorage.getItem("@eventHunters:token");
      const { data } = await api.get("/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        events,
        locations,
        categories,
        users,
        isLogged,
        loggedUser,
        loginRequest,
        handleLogout,
        registerUserRequest,
        createCategoryRequest,
        editingCategory,
        setEditingCategory,
        updateCategoryRequest,
        deleteCategoryRequest,
        listEventsRequest,
        setEditingEvent,
        editingEvent,
        createEventRequest,
        updateEventRequest,
        createLocationRequest,
        deleteEventRequest,
        editingLocation,
        setEditingLocation,
        updateLocationRequest,
        deleteLocationRequest,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: Proptypes.node,
}.isRequired;
