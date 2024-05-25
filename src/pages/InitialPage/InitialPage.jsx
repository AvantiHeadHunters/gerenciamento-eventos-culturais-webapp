import { SearchIcon } from "@chakra-ui/icons";
import image from "../../assets/img/marriage.jpg";
import style from "./InitialPage.module.css";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Box,
  Button,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { EventCard } from "../../components/EventCard/EventCard";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import { LocationCard } from "../../components/LocationCard/LocationCard";
import { settingslocation } from "../../components/LocationCard/settingslocation";
import { settingsdestaque } from "../../components/EventCard/settingsdestaque";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/slick-custom.css";
import { GlobalContext } from "../../providers/globalContext";

export const InitialPage = () => {
  const { events, categories, locations } = useContext(GlobalContext);

  const [searchEvents, setSearchEvents] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = ({ target }) => {
    setSearchEvents(target.value);
  };

  return (
    <div className={style.container}>
      <Flex
        flexDirection={"column"}
        alignItems={"center"}
        className={style.search}
      >
        <Text className={style.title}>
          Nós te ajudamos a encontrar seu próximo evento
        </Text>
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
          <InputLeftElement>
            <IconButton icon={<SearchIcon />} />
          </InputLeftElement>
          <Input
            background={"white"}
            type="text"
            placeholder="Pesquise seu evento"
            value={searchEvents}
            onChange={handleSearchChange}
          />
        </InputGroup>
        <Button
          className={style.searchButton}
          sx={{
            backgroundColor: "#9370DB",
            color: "white",
            borderRadius: "5px",
            borderColor: "#9370DB",
            _hover: {
              backgroundColor: "#C3A6C3",
            },
            _active: {
              backgroundColor: "#9370DB",
            },
          }}
          onClick={() =>
            navigate("/search-result", { state: { query: searchEvents } })
          }
        >
          Pesquisar
        </Button>
      </Flex>
      <Box margin="0" padding="30px">
        <Text fontWeight="bold" fontSize="2xl" mb="4">
          Eventos em Destaque
        </Text>
        <Text>Encontre os evento mais procurados</Text>
        <Slider {...settingsdestaque}>
          {events.map((event, index) => (
            <Box key={index} padding="10px" margin="10px 0">
              <EventCard event={event} />
            </Box>
          ))}
        </Slider>
      </Box>
      <Box margin="0" padding="30px">
        <Text fontWeight="bold" fontSize="2xl" mb="4">
          Eventos por Categorias
        </Text>
        <Text>Encontre os evento que fazem o seu estilo</Text>
        <SimpleGrid
          columns={[1, 2, 3]}
          spacing="5"
          flexWrap="wrap"
          padding="10px"
          margin="10px 0"
        >
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </SimpleGrid>
      </Box>
      <Box margin="0" padding="30px">
        <Text fontWeight="bold" fontSize="2xl" mb="4">
          Eventos por Localização
        </Text>
        <Text>Encontre os evento que acontecerão perto de você</Text>
        <Slider {...settingslocation}>
          {locations.map((location, index) => (
            <Box key={index} padding="10px" margin="10px 0">
              <LocationCard location={location} />
            </Box>
          ))}
        </Slider>
      </Box>
    </div>
  );
};
