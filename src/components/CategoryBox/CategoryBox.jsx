import { Box, ButtonGroup, IconButton } from "@chakra-ui/react";
import style from "./CategoryBox.module.css";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

export const CategoryBox = ({ category }) => {
  const name = category;
  return (
    <Box className={style.Box} size={["xs", "sm"]} width={["xs", "sm", "md"]}>
      <h1>{name}</h1>
      <ButtonGroup flexDirection={"column"} gap={[2]}>
        <IconButton icon={<EditIcon />} />
        <IconButton icon={<DeleteIcon />} />
      </ButtonGroup>
    </Box>
  );
};
