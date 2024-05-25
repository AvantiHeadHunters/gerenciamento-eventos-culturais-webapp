import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Box, Text, SimpleGrid } from "@chakra-ui/react";
import { GlobalContext } from "../../providers/globalContext";
import { EventCard } from "../../components/EventCard/EventCard";
import style from "./categoriespage.module.css";

export const CategoriesPage = () => {
  const { categories, events } = useContext(GlobalContext);
  const { id } = useParams();
  //console.log(id);
  const selectedCategory = categories.find(
    (category) => category.id === parseInt(id),
  );
  //console.log(selectedCategory);
  const filteredEvents = events.filter(
    (event) => event.category_id === selectedCategory.id,
  );
  console.log(filteredEvents);

  return (
    <div className={style.container}>
      <Text fontWeight="bold" fontSize="3xl" mb="4" padding="10px 30px 0">
        {selectedCategory ? selectedCategory.name : "Categoria indefinida"}
      </Text>
      <Box margin="0" padding="0 30px">
        <Text padding="0 0 10px 0">
          Mostrando resultados para a categoria{" "}
          {selectedCategory ? selectedCategory.name : ""}
        </Text>
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
    </div>
  );
};
