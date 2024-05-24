import { SearchIcon } from "@chakra-ui/icons";
import image from "../../assets/img/marriage.jpg";
import style from "./InitialPage.module.css";
// import image from "../../assets/img/marriage.jpg";
// import { CategoryContainer, EventBox } from "../../components/index.js";
// import { GlobalContext } from "../../providers/globalContext.jsx";

import {
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Box,
  Button,
  Text,
} from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { EventCard } from "../../components/EventCard/EventCard";

export const InitialPage = () => {
  const events = [
    {
      name: "Por do sol na praia",
      description: "Venha ver o melhor por do sol na praia de iracema",
      date: new Date().toLocaleTimeString(),
      image: image,
      location: 1,
    },
    {
      name: "Festival de Música",
      description: "Desfrute de um dia de muita música e diversão",
      date: new Date().toLocaleTimeString(),
      image: image,
      location: 2,
    },
    {
      name: "Feira de Artesanato",
      description: "Compre produtos únicos e artesanais",
      date: new Date().toLocaleTimeString(),
      image: image,
      location: 3,
    },
    {
      name: "Show de Pop",
      description: "Acompanhe os novos artistas de música Pop da região",
      date: new Date().toLocaleTimeString(),
      image: image,
      location: 1,
    },
    {
      name: "Cinema ao ar livre",
      description: "Reviva os cinemas ao ar livre no estacionamento lote",
      date: new Date().toLocaleTimeString(),
      image: image,
      location: 2,
    },
    {
      name: "Competição de skate",
      description: "Presencie manobras radicais e decida o campeão da Cidade",
      date: new Date().toLocaleTimeString(),
      image: image,
      location: 3,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1380,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
            // value={searchEvents}
            // onChange={handleSearchChange}
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
        >
          Pesquisar
        </Button>
      </Flex>
      <Box margin="20px" padding="20px">
        <Text fontWeight="bold" fontSize="larger">
          Eventos em Destaque
        </Text>
        <Text>Encontre os evento mais procurados</Text>
        <Slider {...settings}>
          {events.map((event, index) => (
            <Box key={index} padding="10px">
              <EventCard event={event} />
            </Box>
          ))}
        </Slider>
      </Box>
    </div>
  );
};
