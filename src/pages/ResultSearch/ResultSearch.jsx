import { useLocation } from "react-router-dom";
import { GlobalContext } from "../../providers/globalContext";
import { useContext } from "react";
import { Box, Text } from "@chakra-ui/react";
import { EventCard } from "../../components/EventCard/EventCard";

export const ResultSearch = () => {
  const { events } = useContext(GlobalContext);
  const location = useLocation();
  const searchQuery = location.state.query;

  const filteredEvents = events.filter((event) => {
    return event.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div>
      <Text fontWeight="bold" fontSize="3xl" mb="4">
        Resultado da busca
      </Text>
      <Text> Você buscou por: {searchQuery}</Text>
      {filteredEvents.map((event) => (
        <Box key={event.id} padding="10px" margin="10px 0">
          <EventCard event={event} />
        </Box>
      ))}
    </div>
  );
};
