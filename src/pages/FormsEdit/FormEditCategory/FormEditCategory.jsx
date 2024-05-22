import { ButtonGroup } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import style from "./FormEditCategory.module.css";
import { useState } from "react";

export const FormEditCategory = (props) => {
  const { id } = props;
  // get category by id

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      description: "",
      image: "",
    },
  });
  const onsubmit = (data) => console.log(data);

  return (
    <div className={style.formContainer}>
      <form onSubmit={handleSubmit(onsubmit)}>
        <h1>Edite a Categoria</h1>
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
