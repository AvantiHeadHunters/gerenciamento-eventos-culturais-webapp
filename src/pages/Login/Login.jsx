import { Button, ButtonGroup, Flex, Text } from "@chakra-ui/react";
import style from "./login.module.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../providers/globalContext";

export const Login = () => {
  const { loginRequest } = useContext(GlobalContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { email: "", password: "" } });

  const onsubmit = (data) => {
    loginRequest(data);
    console.log(data);
  };

  return (
    <Flex className={style.Container} flexDirection={"row"}>
      <div className={style.logoContainer}>
        <h1 className={style.title}>
          EVENT <span style={{ color: "yellow" }}>&#10040;</span>
          <br /> HUNTERS
        </h1>
      </div>
      <div className={style.formContainer}>
        <form onSubmit={handleSubmit(onsubmit)}>
          <h1>Login</h1>

          <label>Email</label>

          <input
            type="email"
            {...register("email", {
              required: "Insira o email",
              pattern: /\S+@\S+\.\S+/,
            })}
          />

          <label>Senha</label>
          <input
            type={"password"}
            {...register("password", { required: "Insira a senha" })}
          />

          {(errors.password || errors.email) && (
            <Text
              style={{
                margin: "10px 0",
                color: "red",
                fontWeight: "bold",
                fontSize: 15,
                textAlign: "center",
              }}
            >
              Email ou senha Incorretos
            </Text>
          )}

          <ButtonGroup
            gap={4}
            flexDirection={"row"}
            justifyContent={"center"}
            marginTop={"35px"}
          >
            <button className={style.button} type="submit">
              Entrar
            </button>
          </ButtonGroup>

          <ButtonGroup flexDirection={"column"} alignItems={"center"}>
            <p style={{ textAlign: "center", margin: "10px 0 0 5px" }}>
              Ainda não tem conta?
            </p>
            <Button
              variant={"ghost"}
              colorScheme="gray"
              width={"max-content"}
              onClick={() => {
                navigate("/signup");
              }}
            >
              Cadastre-se
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
