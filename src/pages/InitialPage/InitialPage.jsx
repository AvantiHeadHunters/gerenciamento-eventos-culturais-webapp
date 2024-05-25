import { SearchIcon } from "@chakra-ui/icons";
import image from "../../assets/img/marriage.jpg";
import style from "./InitialPage.module.css";
import { useState } from "react";
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

export const InitialPage = () => {
  const events = [
    {
      name: "Por do sol na praia",
      description: "Venha ver o melhor por do sol na praia de iracema",
      date: new Date().toLocaleDateString(),
      image: image,
      location: 1,
    },
    {
      name: "Festival de Música",
      description: "Desfrute de um dia de muita música e diversão",
      date: new Date().toLocaleDateString(),
      image: image,
      location: 2,
    },
    {
      name: "Feira de Artesanato",
      description: "Compre produtos únicos e artesanais",
      date: new Date().toLocaleDateString(),
      image: image,
      location: 3,
    },
    {
      name: "Show de Pop",
      description: "Acompanhe os novos artistas de música Pop da região",
      date: new Date().toLocaleDateString(),
      image: image,
      location: 1,
    },
    {
      name: "Cinema ao ar livre",
      description: "Reviva os cinemas ao ar livre no estacionamento lote",
      date: new Date().toLocaleDateString(),
      image: image,
      location: 2,
    },
    {
      name: "Competição de skate",
      description: "Presencie manobras radicais e decida o campeão da Cidade",
      date: new Date().toLocaleDateString(),
      image: image,
      location: 3,
    },
  ];

  const categories = [
    {
      name: "Casamentos",
      image:
        "https://img.freepik.com/fotos-gratis/noivo-segura-as-maos-da-noiva-onde-estao-dois-aneis-de-casamento_8353-10454.jpg?t=st=1716518252~exp=1716521852~hmac=53f102a26e722e91ec095f30dcff8f46d8044899cab55e798ee5570c79a0697b&w=826",
    },
    {
      name: "Festivais",
      image:
        "https://img.freepik.com/fotos-gratis/mulheres-bonitas-se-divertindo-juntas_329181-15566.jpg?t=st=1716518287~exp=1716521887~hmac=5ab8761e8f11109fdec33ffc3f67c5324df56c743ed3359d114edcfe92616652&w=826",
    },
    {
      name: "Feiras",
      image:
        "https://img.freepik.com/fotos-gratis/frutas-e-vegetais-frescos-para-uma-alimentacao-saudavel-gerada-por-ia_188544-54353.jpg?t=st=1716518323~exp=1716521923~hmac=39bc49cb66026652de874b5bd5e5498e4124177e43d0f39cbf226b7b578af840&w=826",
    },
    {
      name: "Shows",
      image:
        "https://img.freepik.com/fotos-gratis/uma-pista-de-danca-energetica-com-pessoas-comemorando-aniversario_1268-30650.jpg?t=st=1716429274~exp=1716432874~hmac=8da201f3b03a38baa2147bb7f28c5c63a57a999d8faeebe24c768ef78d1ef9bd&w=1060",
    },
    {
      name: "Cinema",
      image:
        "https://img.freepik.com/fotos-gratis/grupo-de-jovens-no-cinema_23-2148115397.jpg?t=st=1716518356~exp=1716521956~hmac=1c2ce2b6513913e86c8f758d651c80e22480d5e94dfae14654274c31c0bcd86c&w=826",
    },
    {
      name: "Esportes",
      image:
        "https://img.freepik.com/fotos-gratis/mulher-determinada-de-construcao-muscular-correndo-enquanto-se-exercita-na-natureza-copie-o-espaco_637285-4877.jpg?t=st=1716518411~exp=1716522011~hmac=b62e9ea4d9814175ef1939fd14ea7b74296aa6d26fcb56b711448cfb08ba6bbc&w=826",
    },
  ];
  const locations = [
    {
      name: "Casa de show Olimpo",
      image:
        "https://s2-extra.glbimg.com/6_PbukxI4h-p0n7W3I7bnLtdxPY=/0x0:1648x1064/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f551ea7087a47f39ead75f64041559a/internal_photos/bs/2023/T/5/03UCtDRsiswMVQ8l854Q/104318650-ri-exclusivo-rio-de-janeiro-rj-15-09-2023-reabertura-da-casa-de-show-olimpo-na-zona-no.jpg",
    },
    {
      name: "Palau de la Música Catalana",
      image: "https://bcnmagica.com/imagenes/palau-de-la-musica-930x620.jpg",
    },
    {
      name: "Musikverein",
      image:
        "https://www.musikverein.at/wp-content/uploads/2023/01/WGM0002c-Wolf-Dieter-Grabner_900x600.jpg",
    },
    {
      name: "Teatro Colón",
      image:
        "https://cnnespanol.cnn.com/wp-content/uploads/2022/05/Teatro-Colon-fachada.jpg?quality=100&strip=info",
    },
    {
      name: "Konzerthaus Berlin",
      image:
        "https://bilder.deutschlandfunk.de/FI/LE/_0/d9/FILE_0d94dd50c5e0ee554c1c7905a93b4fbe/konzerthausberlin-felixloechner-sichtkreis-5013-jpg-100-original.jpg",
    },
  ];

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
      <Box margin="20px" padding="20px">
        <Text fontWeight="bold" fontSize="larger" mb="4">
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
      <Box margin="20px" padding="20px">
        <Text fontWeight="bold" fontSize="larger" mb="4">
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
      <Box margin="20px" padding="20px">
        <Text fontWeight="bold" fontSize="larger" mb="4">
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
