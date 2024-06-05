import { SearchIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";
import style from "./SearchEvent.module.css";
import { EventBox } from "../../../components";
import { useContext, useState } from "react";
import { GlobalContext } from "../../../providers/globalContext";

export const SearchEvent = () => {
  const { control, watch } = useForm();
  const [search, setSearch] = useState(false);
  const value = watch("search");
  const valueDate = watch("searchDate");
  const { events, listEventsRequest } = useContext(GlobalContext);

  const searchFun = (search) => {
    const params = {};

    if (value) {
      params.name = value;
    }
    if (valueDate) {
      params.date = valueDate;
    }
    setSearch(true);
    listEventsRequest(params);
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
        <h1 className={style.title}>Evento</h1>

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
                placeholder="Insira o evento"
              />
            )}
          />
        </InputGroup>
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          width={"100%"}
        >
          <Controller
            name="searchDate"
            control={control}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <Input
                type="date"
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                ref={ref}
              />
            )}
          />
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

          <Flex
            className={style.Result}
            flexDirection={"row"}
            flexWrap={"wrap"}
            justifyContent={"center"}
          >
            {events.map((event) => (
              <EventBox key={event.id} event={event} margin={"20px"} />
            ))}
          </Flex>
        </Flex>
      ) : null}
    </Flex>
  );
};
