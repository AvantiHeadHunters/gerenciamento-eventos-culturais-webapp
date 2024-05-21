import { Divider, Flex } from "@chakra-ui/react";
import style from "./categorycontainer.module.css";
export const CategoryContainer = (props) => {
  const { category } = props;

  return (
    <Flex flexDirection={"column"} marginTop={"30px"}>
      <h1 className={style.title}>{category.name}</h1>
      <Divider
        margin={"10px 0px"}
        orientation="horizontal"
        bg="black"
        border={"1px solid black "}
      />

      <Flex flexDirection={"row"} flexWrap={"wrap"} justifyContent={"center"}>
        {props.children}
      </Flex>
    </Flex>
  );
};
