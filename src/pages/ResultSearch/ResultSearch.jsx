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
      <Text fontWeight="bold" fontSize="3xl" mb="4" padding="10px 30px 0">
        Resultado da busca
      </Text>
      {searchQuery.length > 0 && filteredEvents.length > 0 ? (
        <>
          <Box margin="0" padding="0 30px">
            <Text padding="0 0 10px 0">Você buscou por: {searchQuery}</Text>
            <SimpleGrid
              columns={{ base: 1, sm: 1, md: 2, lg: 3, xl: 4 }}
              spacing="5"
              padding="10px"
              margin="10px 0"
            >
              {filteredEvents.map((event) => (
                <Box key={event.id} padding="10px" margin="10px 0">
                  <EventCard event={event} />
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </>
      ) : (
        <div>
          <Box margin="0" padding="0 30px">
            <Text padding="0 0 10px 0">
              Não foi encontrado nenhum evento com o termo: {searchQuery}
            </Text>
            <Text fontWeight="bold" fontSize="3xl" mb="4">
              Recomendados
            </Text>
            <SimpleGrid
              columns={{ base: 1, sm: 1, md: 2, lg: 3, xl: 4 }}
              spacing="5"
              padding="10px"
              margin="10px 0"
            >
              {events.map((event) => (
                <Box key={event.id} padding="10px" margin="10px 0">
                  <EventCard event={event} />
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </div>
      )}
    </div>
  );
};
