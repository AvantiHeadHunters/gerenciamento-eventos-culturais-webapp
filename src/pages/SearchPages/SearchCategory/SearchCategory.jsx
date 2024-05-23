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
import { useContext, useState } from "react";
import { GlobalContext } from "../../../providers/globalContext";

export const SearchCategory = () => {
  const { categories } = useContext(GlobalContext);

  const { control, watch } = useForm();
  const [search, setSearch] = useState(false);
  const value = watch("search");

  const filteredCategories = categories?.filter((category) =>
    category.name.toLowerCase().includes(value?.toLowerCase()),
  );

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
            <ul>
              {filteredCategories.map((category) => (
                // <li>
                <CategoryBox key={category.id} category={category} />
                // </li>
              ))}
            </ul>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};
