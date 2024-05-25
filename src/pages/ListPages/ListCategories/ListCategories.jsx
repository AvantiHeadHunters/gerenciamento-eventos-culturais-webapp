import { useContext } from "react";
import { GlobalContext } from "../../../providers/globalContext";
import { CategoryBox } from "../../../components";
import style from "./ListCategories.module.css";
import { Flex } from "@chakra-ui/react";

export const ListCategories = () => {
  const { categories } = useContext(GlobalContext);
  return (
    <Flex flexDirection={"column"} minHeight={"60vh"}>
      <h1 className={style.title}>Categorias</h1>
      <Flex
        flexDirection={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-evenly"}
        margin={"20px"}
      >
        {categories.map((category) => {
          return (
            <CategoryBox
              key={category.id}
              category={category}
              margin={"20px"}
            />
          );
        })}
      </Flex>
    </Flex>
  );
};