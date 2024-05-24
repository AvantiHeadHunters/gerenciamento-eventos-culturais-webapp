import { Box, ButtonGroup, Select } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import style from "./FormEditLocation.module.css";

import { States } from "./States.js";
import { useContext } from "react";
import { GlobalContext } from "../../../providers/globalContext.jsx";
import { Navigate, useNavigate } from "react-router-dom";

export const FormEditLocation = (props) => {
  const { editingLocation, updateLocationRequest } = useContext(GlobalContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: editingLocation.name,
      zipCode: editingLocation.zip_code,
      address: editingLocation.address,
      city: editingLocation.city,
      state: editingLocation.state,
      linkMaps: editingLocation.link_maps,
    },
  });
  const onsubmit = (data) => {
    console.log(data);
    updateLocationRequest(data);
    navigate("/explore")
  };

  return (
    <div className={style.formContainer}>
      <form onSubmit={handleSubmit(onsubmit)}>
        <h1>Edite o Local</h1>
        <label>Nome</label>
        <input
          type="text"
          {...register("name", { required: "Insira o nome do local" })}
        />
        <label>CEP</label>
        <input
          type="text"
          {...register("zipCode", { required: "Insira o cep do local" })}
        />

        <label>Endereço</label>
        <input
          type="text"
          {...register("address", { required: "Insira o endereço do local" })}
        />
        <label>Cidade</label>
        <input
          type="text"
          {...register("city", { required: "Insira a cidade do local" })}
        />

        <label>Estado</label>
        <Box p={4}>
          <Select {...register("state", { required: "Insira o Estado" })}>
            {Object.entries(States).map(([key, value]) => (
              <option key={key} value={key}>
                {value}
              </option>
            ))}
          </Select>
        </Box>

        <label>Link do Google Maps</label>
        <input
          type="text"
          {...register("linkMaps", {
            required: "Insira o link do maps do local",
          })}
        />

        {(errors.name ||
          errors.address ||
          errors.cep ||
          errors.state ||
          errors.city) && (
          <span style={errorStyle}>Preencha todos os campos</span>
        )}

        <ButtonGroup
          gap={4}
          flexDirection={"row"}
          justifyContent={"center"}
          marginTop={"15px"}
        >
          <button
            className={style.button}
            style={{ border: "2px solid red", color: "red" }}
          >
            Cancelar
          </button>
          <button className={style.button} type="submit">
            Confirmar
          </button>
        </ButtonGroup>
      </form>
    </div>
  );
};

const errorStyle = {
  margin: "10px 0",
  color: "red",
  fontWeight: "bold",
  fontSize: 15,
  textAlign: "center",
};
