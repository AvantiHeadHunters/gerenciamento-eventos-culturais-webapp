import { useLocation } from "react-router-dom";
import { GlobalContext } from "../../providers/globalContext";
import { useContext } from "react";
import { Box, Text, SimpleGrid } from "@chakra-ui/react";
import { EventCard } from "../../components/EventCard/EventCard";
import style from "./resultSearch.module.css";

export const ResultSearch = () => {
  const { events } = useContext(GlobalContext);
  const location = useLocation();
  const searchQuery = location.state.query;

  const filteredEvents = events.filter((event) => {
    return event.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className={style.container}>
      <Text fontWeight="bold" fontSize="3xl" mb="4">
        Resultado da busca
      </Text>
      {searchQuery.length > 0 && filteredEvents.length > 0 ? (
        <>
          <Text> Você buscou por: {searchQuery}</Text>
          {filteredEvents.map((event) => (
            <Box key={event.id} padding="10px" margin="10px 0">
              <EventCard event={event} />
            </Box>
          ))}
        </>
      ) : (
        <div>
          <Text>
            Não foi encontrado nenhum evento com o termo: {searchQuery}
          </Text>
          <Text fontWeight="bold" fontSize="3xl" mb="4">
            Recomendados
          </Text>
          {
            <SimpleGrid
              columns={[1, 2, 3]}
              spacing="5"
              flexWrap="wrap"
              padding="10px"
              margin="10px 0"
            >
              {events.map((event) => (
                <Box key={event.id} padding="10px" margin="10px 0">
                  <EventCard event={event} />
                </Box>
              ))}
            </SimpleGrid>
          }
        </div>
      )}
    </div>
  );
};
