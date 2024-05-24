import { Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { GlobalContext } from "../../../providers/globalContext";
import { EventBox } from "../../../components";
import style from "./ListEvents.module.css";

export const ListEvents = () => {
  const { events } = useContext(GlobalContext);
  console.log(events);
  return (
    <Flex flexDirection={"column"} minHeight={"60vh"}>
      <h1 className={style.title}>Eventos</h1>
      <Flex
        flexDirection={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-evenly"}
      >
        {events.map((event) => {
          return <EventBox key={event.id} margin={"20px"} event={event} />;
        })}
      </Flex>
    </Flex>
  );
};
