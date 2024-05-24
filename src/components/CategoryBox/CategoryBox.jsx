import { Box, ButtonGroup, IconButton } from "@chakra-ui/react";
import style from "./CategoryBox.module.css";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import { GlobalContext } from "../../providers/globalContext";
import { useNavigate } from "react-router-dom";

export const CategoryBox = ({ category, margin }) => {
  const { setEditingCategory, deleteCategoryRequest, loggedUser } =
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
    <Box
      className={style.Box}
      size={["xs", "sm"]}
      width={["xs", "sm", "md"]}
      margin={margin}
    >
      <h1>{name}</h1>
      {loggedUser.isAdmin ? (
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
      ) : (
        false
      )}
    </Box>
  );
};
