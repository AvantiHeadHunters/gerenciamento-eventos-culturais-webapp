import { ButtonGroup } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import style from "./FormCreateEvent.module.css";
import { useContext } from "react";
import { GlobalContext } from "../../../providers/globalContext";

export const FormCreateEvent = () => {
  const { createEventRequest } = useContext(GlobalContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      description: "",
      date: "",
      location: "",
      image: "",
    },
  });

  const onsubmit = (data) => {
    createEventRequest(data);
    console.log(data);
  };

  return (
    <div className={style.formContainer}>
      <form onSubmit={handleSubmit(onsubmit)}>
        <h1>Crie um Evento</h1>

        <label>Nome</label>
        <input
          type="text"
          placeholder="Digite o nome do evento"
          {...register("name", { required: "Insira o nome do evento" })}
        />
        <label>Descrição</label>
        <textarea
          {...register("description", { required: "Insira o nome do evento" })}
          placeholder="Digite uma descrição para o evento"
        />
        <label>Data</label>
        <input
          type="date"
          {...register("date", { required: "Insira o nome do evento" })}
        />
        <label>Local</label>
        <input
          type="text"
          {...register("location", { required: "Insira o local" })}
        />
        <label>Imagem</label>
        <input
          type="text"
          placeholder="Digite o link de uma imagem"
          {...register("image", { required: "Insira o link de uma imagem" })}
        />
        {(errors.name ||
          errors.description ||
          errors.category_id ||
          errors.location ||
          errors.date ||
          errors.image) && (
          <span style={errorStyle}>Preencha todos os campos</span>
        )}

        <ButtonGroup
          gap={4}
          flexDirection={"row"}
          justifyContent={"center"}
          marginTop={"10px"}
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
  fontFamily: "Inter",
  margin: "10px 0",
  color: "red",
  fontWeight: "bold",
  fontSize: 15,
  textAlign: "center",
};
