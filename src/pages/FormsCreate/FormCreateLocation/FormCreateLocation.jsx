import { Box, ButtonGroup, Select } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import style from "./FormCreateLocation.module.css";

import { States } from "./States";
export const FormCreateLocation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      cep: "",
      address: "",
      city: "",
      state: "",
      link_maps: "",
    },
  });
  const onsubmit = (data) => console.log(data);

  return (
    <div className={style.formContainer}>
      <form onSubmit={handleSubmit(onsubmit)}>
        <h1>Crie um Local</h1>
        <label>Nome</label>
        <input
          type="text"
          {...register("name", { required: "Insira o nome do local" })}
        />
        <label>CEP</label>
        <input
          type="text"
          {...register("cep", { required: "Insira o cep do local" })}
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
          {...register("link_maps", {
            required: "Insira o link do maps do local",
          })}
        />

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
