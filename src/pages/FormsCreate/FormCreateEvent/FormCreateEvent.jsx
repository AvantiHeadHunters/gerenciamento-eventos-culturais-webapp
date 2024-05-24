import { ButtonGroup } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import style from "./FormCreateEvent.module.css";
import { useContext } from "react";
import { GlobalContext } from "../../../providers/globalContext";
import { SelectCategory, SelectLocation } from "../../../components/index.js";
import { useNavigate } from "react-router-dom";

export const FormCreateEvent = () => {
  const { createEventRequest, loggedUser, categories, locations } =
    useContext(GlobalContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      name: "",
      description: "",
      date: "",
      locationId: "",
      categoryId: "",
      image: "",
      userId: Number(loggedUser.isAdmin ? loggedUser.userId : null),
    },
  });

  const onSubmit = (data) => {
    createEventRequest(data);
    navigate("/explore");
  };

  return (
    <div className={style.formContainer}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Crie um Evento</h1>

        <label>Nome</label>
        <input
          className={style.input}
          type="text"
          placeholder="Digite o nome do evento"
          {...register("name", { required: "Insira o nome do evento" })}
        />
        <label>Descrição</label>
        <textarea
          {...register("description", { required: "Insira o nome do evento" })}
          placeholder="Digite uma descrição para o evento"
        />

        <label>Categoria</label>

        <SelectCategory
          control={control}
          category={categories}
          name={"categoryId"}
        />
        <label>Data</label>

        <input
          className={style.input}
          type="date"
          {...register("date", { required: "Insira o nome do evento" })}
        />
        <label>Local</label>

        <SelectLocation
          control={control}
          location={locations}
          name={"locationId"}
        />
        <label>Imagem</label>
        <input
          type="text"
          className={style.input}
          placeholder="Digite o link de uma imagem"
          {...register("image", { required: "Insira o link de uma imagem" })}
        />
        {(errors.name ||
          errors.description ||
          errors.category_id ||
          errors.location ||
          errors.date ||
          errors.image ||
          errors.userId) && (
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
            onClick={() => {
              navigate("/explore");
            }}
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
