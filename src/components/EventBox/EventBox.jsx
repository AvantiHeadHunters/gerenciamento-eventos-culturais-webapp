import { Box, ButtonGroup, Flex, IconButton, Image } from "@chakra-ui/react";
import style from "./eventbox.module.css";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import Proptypes from "prop-types";
import { useContext } from "react";
import { GlobalContext } from "../../providers/globalContext";
import { useNavigate } from "react-router-dom";

export const EventBox = ({ event }) => {
  const { name, description, date, image } = event;
  const { setEditingEvent, deleteEventRequest } = useContext(GlobalContext);

  const navigate = useNavigate();

  const handleUpdateClick = (event) => {
    setEditingEvent(event);
    navigate("/form/edit/event");
  };

  const handleDeleteClick = (event) => {
    deleteEventRequest(event.id);
  };

  const convertDate = (dateString) => {
    const [year, month, day] = dateString.split("-");
    return `${day}-${month}-${year}`;
  };

  return (
    <Box className={style.Box}>
      <Image src={image} height={"60%"} width={"100%"} borderRadius={"14px"} />

      <Flex
        flexDirection={"row"}
        justifyContent={"space-between"}
        padding={"10px"}
      >
        <Flex flexDirection={"column"} gap={["1", " 4"]}>
          <h2 style={{ fontWeight: "bold" }}>{name}</h2>
          <p>{description}</p>
          <h2>{convertDate(date.slice(0, 10))}</h2>
        </Flex>
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
      </Flex>
    </Box>
  );
};

EventBox.propTypes = {
  event: Proptypes.object,
}.isRequired;
