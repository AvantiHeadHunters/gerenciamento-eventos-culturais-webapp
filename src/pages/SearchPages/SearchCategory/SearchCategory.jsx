import { SearchIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";
import style from "./SearchCategory.module.css";
import { CategoryBox } from "../../../components";
import { useState } from "react";

export const SearchCategory = () => {
  const { control, watch } = useForm();
  const [search, setSearch] = useState(false);
  const value = watch("search");

  const searchFun = (search) => {
    setSearch((state) => !state);
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
        <h1 className={style.title}>Categoria</h1>

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
                placeholder="Insira a categoria"
              />
            )}
          />
        </InputGroup>
        <Flex justifyContent={"right"} width={"100%"}>
          <Button
            className={style.ButtonSearch}
            onClick={() => searchFun(value)}
          >
            Pesquisar
          </Button>
        </Flex>

        {console.log(value)}
      </Flex>
      {search && (
        <Flex
          className={style.SearchResultContainer}
          width={"100%"}
          justifyContent={"left"}
          flexDirection={"column"}
        >
          <h1 className={style.title}>Resultados da sua Busca</h1>
          <h2 className={style.h2}>Você buscou por &quot;{value}&quot;</h2>
          <Flex className={style.Result}>
            <CategoryBox category={"Teatro"} />
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};
