import { ButtonGroup } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import style from "./FormCreateCategory.module.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../../providers/globalContext";

export const FormCreateCategory = () => {
  const { createCategoryRequest } = useContext(GlobalContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    name: "",
    description: "",
    image: "",
  });

  const onSubmit = (data) => {
    createCategoryRequest(data);
    navigate("/explore");
  };

  return (
    <div className={style.formContainer}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Crie uma Categoria</h1>
        <label>Nome</label>
        <input
          type="text"
          {...register("name", { required: "Insira o nome da categoria" })}
        />
        <label>Descrição</label>
        <textarea
          {...register("description", {
            required: "Insira o nome da Categoria",
          })}
        />
        <label>Imagem</label>
        <input
          type="text"
          {...register("image", { required: "Insira a Imagem da Categoria" })}
        />
        {(errors.name || errors.description || errors.image) && (
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
