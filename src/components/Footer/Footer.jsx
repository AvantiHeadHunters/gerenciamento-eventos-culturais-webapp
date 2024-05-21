import { Box, Flex } from "@chakra-ui/react";
import style from "./footer.module.css";
import { Link } from "react-router-dom";
import Proptypes from "prop-types";

export const Footer = () => {
  return (
    <footer>
      <Flex
        textColor={"white"}
        className={style.Footer}
        flexDirection={"row"}
        justifyContent={"space-between"}
        sx={{
          "@media (max-width: 520px)": {
            fontSize: "12",
            flexDirection: "column-reverse",
            alignItems: "center",
          },
        }}
      >
        <div>
          <p className={style.logo}>
            EVENT <span className={style.span}>&#10040;</span> HUNTERS
          </p>
          <p className={style.copyright}>
            HEAD Hunters &#169; Todos os direitos reservados
          </p>
        </div>

        <Box
          marginRight={"30%"}
          sx={{ "@media (max-width: 650px) ": { marginBottom: "10px" } }}
        >
          <ItemFooter text={"Sobre Nós"} />
          <ItemFooter text={"Pagamento"} />
          <ItemFooter text={"Entre em Contato"} />
        </Box>
      </Flex>
    </footer>
  );
};

export const ItemFooter = (props) => {
  const { to, text } = props;

  return (
    <Link to={to}>
      <h1>{text}</h1>
    </Link>
  );
};

ItemFooter.propTypes = {
  to: Proptypes.string,
  text: Proptypes.string,
}.isRequired;
