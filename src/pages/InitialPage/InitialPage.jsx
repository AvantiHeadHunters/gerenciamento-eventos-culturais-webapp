import { SearchIcon } from "@chakra-ui/icons";
import style from "./InitialPage.module.css";
import image from "../../assets/img/marriage.jpg";
import { CategoryContainer, EventBox } from "../../components/index.js";

import {
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";

export const InitialPage = (props) => {
  const event = {
    name: "Casamento dos Vasques",
    description: "Venha prestigiar o casamento de uma família muito querida",
    date: new Date().toLocaleTimeString(),
    image: image,
    location: 1,
  };

  const category = {
    id: 1,
    name: "Casamentos",
    description: "Casamentos diversos. Venha celebrar o matrimônio",
  };

  return (
    <div className={style.container}>
      <Flex
        flexDirection={"column"}
        alignItems={"center"}
        className={style.search}
      >
        <h1 className={style.title}>
          Nós te ajudamos a encontrar seu próximo evento
        </h1>
        <InputGroup
          width={"40%"}
          margin={"auto"}
          marginTop={"20px"}
          marginBottom={"10px"}
        >
          <InputLeftAddon>
            <IconButton icon={<SearchIcon />} />
          </InputLeftAddon>
          <Input
            background={"white"}
            type="text"
            placeholder="Pesquise seu evento"
          />
        </InputGroup>
        <button className={style.searchButton}>Pesquisar</button>
      </Flex>
      <CategoryContainer category={category}>
        <EventBox event={event} />
        <EventBox event={event} />
        <EventBox event={event} />
        <EventBox event={event} />
        <EventBox event={event} />
      </CategoryContainer>
    </div>
  );
};
