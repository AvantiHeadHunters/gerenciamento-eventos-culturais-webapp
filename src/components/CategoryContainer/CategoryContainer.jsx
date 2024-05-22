import { Divider, Flex } from "@chakra-ui/react";
import style from "./categorycontainer.module.css";
import Proptypes from "prop-types";

export const CategoryContainer = (props) => {
  const { name } = props.category;

  return (
    <Flex flexDirection={"column"} marginTop={"30px"}>
      <h1 className={style.title}>{name}</h1>
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

CategoryContainer.propTypes = {
  category: Proptypes.object,
  children: Proptypes.node,
}.isRequired;
