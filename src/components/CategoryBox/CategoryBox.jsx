import { Box, ButtonGroup, IconButton } from "@chakra-ui/react";
import style from "./CategoryBox.module.css";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import { GlobalContext } from "../../providers/globalContext";
import { useNavigate } from "react-router-dom";

export const CategoryBox = ({ category }) => {
  const { setEditingCategory, deleteCategoryRequest } =
    useContext(GlobalContext);
  const navigate = useNavigate();
  const name = category.name;

  const handleUpdateClick = (category) => {
    setEditingCategory(category);
    navigate("/form/edit/category");
  };

  const handleDeleteClick = (category) => {
    deleteCategoryRequest(category.id);
  };

  return (
    <Box className={style.Box} size={["xs", "sm"]} width={["xs", "sm", "md"]}>
      <h1>{name}</h1>
      <ButtonGroup flexDirection={"column"} gap={[2]}>
        <IconButton
          icon={<EditIcon />}
          onClick={() => handleUpdateClick(category)}
        />
        <IconButton
          icon={<DeleteIcon />}
          onClick={() => handleDeleteClick(category)}
        />
      </ButtonGroup>
    </Box>
  );
};
