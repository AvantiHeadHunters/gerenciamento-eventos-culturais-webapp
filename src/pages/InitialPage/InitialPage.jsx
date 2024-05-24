import { SearchIcon } from "@chakra-ui/icons";
import style from "./InitialPage.module.css";
// import image from "../../assets/img/marriage.jpg";
import { CategoryContainer, EventBox } from "../../components/index.js";
import { GlobalContext } from "../../providers/globalContext.jsx";

import {
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftAddon,
  // list,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";

export const InitialPage = () => {
  // const event = {
  //   name: "Casamento dos Vasques",
  //   description: "Venha prestigiar o casamento de uma família muito querida",
  //   date: new Date().toLocaleTimeString(),
  //   image: image,
  //   location: 1,
  // };

  // const category = {
  //   id: 1,
  //   name: "Casamentos",
  //   description: "Casamentos diversos. Venha celebrar o matrimônio",
  // };

  const { listEventsRequest, events, categories, setEvents } =
    useContext(GlobalContext);

  const [searchEvents, setSearchEvents] = useState("");
  const [eventsRender, setEventsRender] = useState([]);

  const handleSearchChange = ({ target }) => {
    setSearchEvents(target.value);
    if (target.value === "") {
      listEventsRequest();
      setEventsRender(events);
    }
  };

  const getAllEvents = async () => {
    try {
      const data = await listEventsRequest();
      setEvents(data);
      setEventsRender(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllEvents();
  }, []);

  useEffect(() => {
    const filteredEvents = events.filter((event) =>
      event.name.toLowerCase().includes(searchEvents.toLowerCase()),
    );
    setEventsRender(filteredEvents);
  }, [searchEvents]);

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
          sx={{
            width: "80%",
            "@media (min-width: 750px)": {
              width: "40%",
            },
          }}
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
            value={searchEvents}
            onChange={handleSearchChange}
          />
        </InputGroup>
        <button className={style.searchButton}>Pesquisar</button>
      </Flex>
      <CategoryContainer category={categories}>
        {/* <EventBox event={events} />
        <EventBox event={events} />
        <EventBox event={events} />
        <EventBox event={events} />
        <EventBox event={events} /> */}
        {eventsRender &&
          eventsRender.map((event) => (
            <li key={event.id}>
              <EventBox event={event} />
            </li>
          ))}
      </CategoryContainer>
    </div>
  );
};
