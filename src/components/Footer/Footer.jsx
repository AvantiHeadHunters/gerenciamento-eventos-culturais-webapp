import { Box, Flex, Text, Link as ChakraLink } from "@chakra-ui/react";
import style from "./footer.module.css";
import socialMediaIcons from "../../assets/img/socialicons.png";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const Footer = () => {
  return (
    <footer>
      <Flex
        textColor="white"
        className={style.Footer}
        flexDirection="row"
        alignItems="flex-start"
      >
        <Box marginBottom="20px">
          <Text className={style.logo} margin="0 10px">
            EVENT <span className={style.span}>&#10040;</span> HUNTERS
          </Text>
          <Text className={style.copyright} margin="0 10px">
            HEAD Hunters &#169; Todos os direitos reservados
          </Text>
          <img src={socialMediaIcons} alt="Icones de redes sociais" />
        </Box>

        <Flex flexDirection="column" alignItems="flex-end">
          <ItemFooter to="/" text="Sobre Nós" />
          <ItemFooter to="/" text="Pagamento" />
          <ItemFooter to="/" text="Entre em Contato" />
        </Flex>
      </Flex>
    </footer>
  );
};

export const ItemFooter = (props) => {
  const { to, text } = props;

  return (
    <ChakraLink as={Link} to={to} marginY="5px">
      <Text>{text}</Text>
    </ChakraLink>
  );
};

ItemFooter.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
