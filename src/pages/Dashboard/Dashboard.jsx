import { Box, Button, ButtonGroup, Flex } from "@chakra-ui/react";
import style from "./Dashboard.module.css";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../providers/globalContext";
import { useContext } from "react";

export const Dashboard = () => {
  const navigate = useNavigate();
  const { loggedUser } = useContext(GlobalContext);

  return (
    <Flex
      {...styleContainer}
      height={loggedUser.isAdmin === false && "50vh"}
      className={style.Container}
    >
      <Box {...styleBoxName}>
        <h1 style={h1Style}>
          {loggedUser.name} <span className={style.span}>&#10040;</span>{" "}
        </h1>
        <h2 style={h2Style}>O que você gostaria de fazer?</h2>
      </Box>

      <Flex
        justifyContent={"center"}
        sx={{
          "@media (max-width: 690px)": {
            flexDirection: "column",
          },
        }}
      >
        <Flex {...styleSpanEntity}>
          <Box className={style.EntityName}>
            <h1>Evento</h1>
          </Box>
          <ButtonGroup {...styleButtonGroup}>
            <Button
              {...styleButtonEntity}
              onClick={() => navigate("/list/events")}
            >
              Listar todos
            </Button>
            <Button
              {...styleButtonEntity}
              onClick={() => navigate("/search/event")}
            >
              Pesquisar Eventos
            </Button>

            {loggedUser.isAdmin && (
              <>
                <Button
                  {...styleButtonEntity}
                  onClick={() => navigate("/form/create/event")}
                >
                  Criar Evento
                </Button>
              </>
            )}
          </ButtonGroup>
        </Flex>

        <Flex {...styleSpanEntity}>
          <Box className={style.EntityName}>
            <h1>Categoria</h1>
          </Box>
          <ButtonGroup {...styleButtonGroup}>
            <Button
              {...styleButtonEntity}
              onClick={() => navigate("/list/categories")}
            >
              Listar todas
            </Button>
            <Button
              {...styleButtonEntity}
              onClick={() => navigate("/search/category")}
            >
              Pesquisar Categorias
            </Button>
            {loggedUser.isAdmin && (
              <>
                <Button
                  {...styleButtonEntity}
                  onClick={() => navigate("/form/create/category")}
                >
                  Criar Categoria
                </Button>
              </>
            )}
          </ButtonGroup>
        </Flex>

        <Flex {...styleSpanEntity}>
          <Box className={style.EntityName}>
            <h1>Local</h1>
          </Box>
          <ButtonGroup {...styleButtonGroup}>
            <Button
              {...styleButtonEntity}
              onClick={() => navigate("/list/locations")}
            >
              Listar todos
            </Button>
            <Button {...styleButtonEntity}>Pesquisar Locais</Button>
            {loggedUser.isAdmin && (
              <>
                <Button
                  {...styleButtonEntity}
                  onClick={() => navigate("/form/create/location")}
                >
                  Criar Local
                </Button>
              </>
            )}
          </ButtonGroup>
        </Flex>
      </Flex>
    </Flex>
  );
};

const styleContainer = {
  flexDirection: "column",
  sx: {
    "@media (max-width: 1000px)": {
      height: "max-content",
    },
  },
};

const styleBoxName = {
  padding: "20px",
};

const h1Style = {
  fontSize: "40px",
  fontFamily: "Inter",
  fontWeight: "bold",
};
const h2Style = {
  fontSize: "15px",
  marginTop: "10px",
  fontFamily: "Inter",
};

const styleButtonEntity = {
  variant: "ghost",
};

const styleButtonGroup = {
  gap: [2, 1],
  flexDirection: "column",
  size: ["sm", "md"],
};

const styleSpanEntity = {
  margin: "10px 10%",
  flexDirection: "column",
  sx: {
    "@media (max-width: 900px)": {
      margin: "10px 5%",
    },
    "@media (max-width: 690px)": {
      margin: "10px 20px",
    },
  },
};
