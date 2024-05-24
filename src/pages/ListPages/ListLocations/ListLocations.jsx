import { Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { GlobalContext } from "../../../providers/globalContext";
import { LocationBox } from "../../../components";
import style from "./ListLocations.module.css";

export const ListLocations = () => {
  const { locations } = useContext(GlobalContext);
  console.log(locations);
  return (
    <Flex flexDirection={"column"} minHeight={"60vh"}>
      <h1 className={style.title}>Locais</h1>
      <Flex
        flexDirection={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-evenly"}
      >
        {locations.map((location) => {
          return (
            <LocationBox
              key={location.id}
              margin={"20px"}
              location={location}
            />
          );
        })}
      </Flex>
    </Flex>
  );
};
