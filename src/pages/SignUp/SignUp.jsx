import { Button, ButtonGroup, Flex } from "@chakra-ui/react";
import style from "./SignUp.module.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../providers/globalContext";

export const SignUp = () => {
  const { registerUserRequest } = useContext(GlobalContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "", password: "", name: "", image: "" },
  });

  const onsubmit = (data) => {
    registerUserRequest(data);
    navigate("/login");
  };

  return (
    <Flex className={style.Container} flexDirection={"row"}>
      <div className={style.logoContainer}>
        <h1 className={style.title}>
          EVENT <span style={{ color: "yellow" }}>&#10040;</span>
          <br />
          HUNTERS
        </h1>
      </div>

      <div className={style.formContainer}>
        <form className={style.form} onSubmit={handleSubmit(onsubmit)}>
          <h1>Cadastro</h1>
          <div className={style.inputBox}>
            <label>Nome</label>
            <input
              type="text"
              {...register("name", { required: "Insira o nome" })}
              placeholder="Digite seu nome"
            />
          </div>
          <div className={style.inputBox}>
            <label>Email</label>
            <input
              type="email"
              {...register("email", { required: "Insira o email" })}
              placeholder="Digite seu email"
            />
          </div>
          <div className={style.inputBox}>
            <label>Senha</label>
            <input
              type={"password"}
              {...register("password", {
                required: "Insira a senha",
                // pattern: /\S+@\S+\.\S+/,
              })}
              placeholder="Digite uma senha"
            />
          </div>
          <div className={style.inputBox}>
            <label>Imagem</label>
            <input
              type="text"
              {...register("image", {
                required: "Insira o link de uma imagem",
              })}
              placeholder="Digite o link de uma imagem"
            />
          </div>

          {(errors.name || errors.email || errors.password || errors.image) && (
            <span
              style={{
                color: "red",
                fontWeight: "bold",
                margin: "10px 0",
                fontSize: 15,
                textAlign: "center",
              }}
            >
              Email ou senha Incorretos
            </span>
          )}

          <ButtonGroup
            gap={4}
            flexDirection={"row"}
            justifyContent={"center"}
            marginTop={"15px"}
          >
            <button className={style.button} type="submit">
              Cadastrar
            </button>
          </ButtonGroup>

          <ButtonGroup flexDirection={"column"} alignItems={"center"}>
            <p style={{ textAlign: "center", margin: "10px 0" }}>
              Já tem conta?
            </p>
            <Button
              variant={"ghost"}
              colorScheme="gray"
              width={"max-content"}
              margin={"5px 0px"}
              onClick={() => {
                navigate("/login");
              }}
            >
              Entre
            </Button>

            <Button
              variant={"ghost"}
              colorScheme="gray"
              width={"max-content"}
              onClick={() => {
                navigate("/");
              }}
            >
              Voltar para a Tela Inicial
            </Button>
          </ButtonGroup>
        </form>
      </div>
    </Flex>
  );
};
