import { createContext, useEffect, useState } from "react";
import Proptypes from "prop-types";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [events, setEvents] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    listEventsRequest();
  }, []);

  console.log(events);

  const loginRequest = async (formData) => {
    try {
      const { data } = await api.post("/user/login", formData);
      localStorage.setItem("@eventHunters:token", data.token);
      navigate("/explore");
    } catch (error) {
      console.log(error);
      if (error.response?.data.message === "Unauthorized") {
        console.log("Email ou senha não correspondem 😅");
      }
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
    const { data } = await api.get("/events");
    setEvents(data);
  };

  return (
    <GlobalContext.Provider
      value={{ events, loginRequest, registerUserRequest }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: Proptypes.node,
}.isRequired;
