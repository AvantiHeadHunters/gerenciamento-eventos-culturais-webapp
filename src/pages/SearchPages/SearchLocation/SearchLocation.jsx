import { SearchIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";
import style from "./SearchLocation.module.css";
import { EventBox } from "../../../components";
import { useContext, useState } from "react";
import { GlobalContext } from "../../../providers/globalContext";

export const SearchLocation = () => {
  const { control, watch } = useForm();
  const [search, setSearch] = useState(false);
  const value = watch("search");
  const valueDate = watch("searchDate");
  const { locations, listLocationsRequest } = useContext(GlobalContext);

  const searchFun = (search) => {
    setSearch(true);
  };

  return (
    <Flex
      className={style.Container}
      width={"100%"}
      height={search == false && "60vh"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Flex
        className={style.SearchContainer}
        alignItems={"center"}
        flexDirection={"column"}
        width={"max-content"}
      >
        <h1 className={style.title}>Locais</h1>

        <InputGroup className={style.InputSearch}>
          <InputLeftAddon border={"none"}>
            <SearchIcon />
          </InputLeftAddon>

          <Controller
            name="search"
            control={control}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <input
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                ref={ref}
                placeholder="Insira o local"
              />
            )}
          />
        </InputGroup>
        <Flex alignItems={"center"} justifyContent={"center"} width={"100%"}>
          <Button
            className={style.ButtonSearch}
            onClick={() => searchFun(value)}
          >
            Pesquisar
          </Button>
        </Flex>
      </Flex>
      {search ? (
        <Flex
          className={style.SearchResultContainer}
          width={"100%"}
          justifyContent={"left"}
          flexDirection={"column"}
        >
          <h1 className={style.title}>Resultados da sua Busca</h1>
          <h2 className={style.h2}>Você buscou por &quot;{value}&quot;</h2>

          <Flex className={style.Result}>
            <h1>Resultados</h1>
          </Flex>
        </Flex>
      ) : null}
    </Flex>
  );
};
