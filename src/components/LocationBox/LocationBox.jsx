import {
  Box,
  ButtonGroup,
  Flex,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import style from "./LocationBox.module.css";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import Proptypes from "prop-types";
import { useContext } from "react";
import { GlobalContext } from "../../providers/globalContext";
import { useNavigate } from "react-router-dom";

export const LocationBox = ({ location, margin }) => {
  const { name, address, zip_code, image, link_maps, city, state } = location;
  const { setEditingLocation, deleteLocationRequest, loggedUser } =
    useContext(GlobalContext);
  const navigate = useNavigate();

  const handleUpdateClick = (location) => {
    setEditingLocation(location);
    navigate("/form/edit/location");
  };

  const handleDeleteClick = (location) => {
    deleteLocationRequest(location.id);
  };

  return (
    <Box className={style.Box} margin={margin}>
      <Image src={image} height={"60%"} width={"100%"} borderRadius={"14px"} />

      <Flex
        flexDirection={"row"}
        justifyContent={"space-between"}
        padding={"10px"}
      >
        <Flex
          flexDirection={"column"}
          justifyContent={"space-evenly"}
          gap={[2, 3]}
        >
          <h2 style={{ fontWeight: "bold" }}>
            {name}, {city}
          </h2>
          <Text fontSize={["xs", "sm"]}>{address}</Text>
          <a href={link_maps} target="_blank">
            <h2>Link do Google Maps</h2>
          </a>
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
              onClick={() => handleUpdateClick(location)}
            />

            <IconButton
              icon={<DeleteIcon />}
              size={["xs", "sm", "md"]}
              onClick={() => handleDeleteClick(location)}
            />
          </ButtonGroup>
        ) : (
          false
        )}
      </Flex>
    </Box>
  );
};

LocationBox.propTypes = {
  event: Proptypes.object,
}.isRequired;
