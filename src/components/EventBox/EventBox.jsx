import {
  Box,
  ButtonGroup,
  Flex,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import style from "./eventbox.module.css";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import Proptypes from "prop-types";
import { useContext } from "react";
import { GlobalContext } from "../../providers/globalContext";
import { useNavigate } from "react-router-dom";

export const EventBox = ({ event, margin }) => {
  const { name, description, date, image, location_id, category_id } = event;
  const {
    setEditingEvent,
    deleteEventRequest,
    loggedUser,
    locations,
    categories,
  } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleUpdateClick = (event) => {
    setEditingEvent(event);
    navigate("/form/edit/event");
  };

  const handleDeleteClick = (event) => {
    deleteEventRequest(event.id);
  };
  const location = locations.find((l) => l.id === location_id);
  const category = categories.find((c) => c.id === category_id);
  return (
    <Box className={style.Box} margin={margin} height={"30em"}>
      <Image src={image} height={"55%"} width={"100%"} borderRadius={"14px"} />

      <Flex
        flexDirection={"row"}
        justifyContent={"space-between"}
        padding={"10px"}
      >
        <Flex flexDirection={"column"} justifyContent={"space-between"} gap={1}>
          <Text
            color={"black"}
            fontWeight={"bold"}
            textDecoration={"underline"}
          >
            {category.name}
          </Text>
          <h2 style={{ fontWeight: "bold" }}>{name}</h2>
          <Text fontSize={{}}>{description}</Text>
          <Text fontSize={["8px", "12px"]} fontWeight={"bold"}>
            {location.name}, {location.city}
          </Text>
          <h2>{new Date(date).toLocaleDateString()}</h2>
        </Flex>

        {loggedUser.isAdmin ? (
          <ButtonGroup
            className={style.ButtonGroup}
            flexDirection={"column"}
            gap={[2, 4]}
            size={["xs", "sm", "md"]}
          >
            <IconButton
              icon={<EditIcon />}
              size={["xs", "sm", "md"]}
              onClick={() => handleUpdateClick(event)}
            />

            <IconButton
              icon={<DeleteIcon />}
              size={["xs", "sm", "md"]}
              onClick={() => handleDeleteClick(event)}
            />
          </ButtonGroup>
        ) : (
          false
        )}
      </Flex>
    </Box>
  );
};

EventBox.propTypes = {
  event: Proptypes.object,
}.isRequired;
