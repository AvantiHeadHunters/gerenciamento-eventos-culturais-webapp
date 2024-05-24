import { createContext, useEffect, useState } from "react";
import Proptypes from "prop-types";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [locations, setLocations] = useState([]);
  const [categories, setCategories] = useState([]);
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

  const listEventsRequest = async () => {
    try {
      const { data = [] } = await api.get("/events");
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

  const createCategoryRequest = async (formData) => {
    try {
      const token = localStorage.getItem("@eventHunters:token");
      await api.post("/category", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Categoria cadastrada com sucesso 🎉");
    } catch (error) {
      console.log(error);
    }
  };


  const listLocationsRequest = async () => {
    try {
      const token = localStorage.getItem("@eventHunters:token");
      const { data = [] } = await api.get("/locations", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setLocations([...data]);
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
        registerUserRequest,
        createEventRequest,
        createCategoryRequest,
        handleLogout,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: Proptypes.node,
}.isRequired;
