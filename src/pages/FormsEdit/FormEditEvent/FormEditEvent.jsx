import { ButtonGroup } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import style from "./FormEditEvent.module.css";
import { SelectCategory, SelectLocation } from "../../../components/index.js";
import { useContext } from "react";
import { GlobalContext } from "../../../providers/globalContext.jsx";
import { useNavigate } from "react-router-dom";

export const FormEditEvent = () => {
  const { categories, locations, editingEvent, updateEventRequest } =
    useContext(GlobalContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: editingEvent.name,
      description: editingEvent.description,
      categoryId: editingEvent.category_id,
      date: editingEvent.date.slice(0, 10),
      locationId: editingEvent.location_id,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    updateEventRequest(data);
  };

  return (
    <div className={style.formContainer}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Edite o Evento</h1>

        <label>Nome</label>
        <input
          className={style.input}
          type="text"
          {...register("name", { required: "Insira o nome do evento" })}
        />
        <label>Descrição</label>
        <textarea
          {...register("description", {
            required: "Insira a descrição do evento",
          })}
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
          {...register("date", { required: "Insira a data do evento" })}
        />
        <label>Local</label>
        <SelectLocation
          control={control}
          location={locations}
          name={"locationId"}
        />

        {(errors.name ||
          errors.description ||
          errors.categoryId ||
          errors.locationId ||
          errors.date) && (
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
            onClick={navigate("/search/event")}
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
