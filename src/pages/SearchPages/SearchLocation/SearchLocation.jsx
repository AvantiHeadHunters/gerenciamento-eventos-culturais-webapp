import { SearchIcon } from "@chakra-ui/icons";
import { Button, Flex, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";
import style from "./SearchLocation.module.css";
import { LocationBox } from "../../../components";
import { useContext, useState } from "react";
import { GlobalContext } from "../../../providers/globalContext";

export const SearchLocation = () => {
  const { locations } = useContext(GlobalContext);

  const { control, watch } = useForm();
  const [search, setSearch] = useState(false);
  const [renderList, setRenderList] = useState(null);
  const value = watch("search");

  const filterLocations = () => {
    if (!value || value == "") {
      setRenderList(locations);
    } else {
      const filteredList = locations?.filter((location) =>
        location.name.toLowerCase().includes(value?.toLowerCase()),
      );
      setRenderList(filteredList);
    }
    return renderList;
  };

  const searchFun = (search) => {
    setSearch(true);
    filterLocations();
  };

  return (
    <Flex
      className={style.Container}
      width={"100%"}
      minHeight={"70vh"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Flex
        className={style.SearchContainer}
        alignItems={"center"}
        flexDirection={"column"}
        width={"max-content"}
      >
        <h1 className={style.title}>Local</h1>

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
          justifyContent={"center"}
          flexDirection={"column"}
          /* sx={{ "@media (max-width: 930px)": { justifyContent: "center" } }} */
        >
          <h1 className={style.title}>Resultados da sua Busca</h1>
          <h2 className={style.h2}>Você buscou por &quot;{value}&quot;</h2>
          <Flex
            className={style.Result}
            flexDirection={"row"}
            justifyContent={"center"}
            flexWrap={"wrap"}
          >
            {renderList.map((location) => (
              <LocationBox
                key={location.id}
                location={location}
                margin={"15px"}
              />
            ))}
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};
