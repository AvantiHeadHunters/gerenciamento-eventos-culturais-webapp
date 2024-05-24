import { useState, useEffect, useContext } from "react";
import { Flex, HStack, useDisclosure, Button } from "@chakra-ui/react";
import { Toggle, ToggleContent } from "./Toggle";
import { Link, useLocation } from "react-router-dom";
import style from "./header.module.css";
import Proptypes from "prop-types";
import { GlobalContext } from "../../providers/globalContext";

export const NavBar = () => {
  const { isLogged, handleLogout } = useContext(GlobalContext);
  const { isOpen, onToggle } = useDisclosure();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    if (isHomePage) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isHomePage]);

  const fontColor = isHomePage ? (scrolled ? "black" : "white") : "white";

  return (
    <>
      <Flex className={style.NavBar} display={{ base: "none", md: "flex" }}>
        {isLogged ? (
          <>
            <NavBarItem
              to="/"
              name="Página Inicial"
              fontColor={fontColor}
              scrolled={scrolled}
            />
            <NavBarItem
              to="/explore"
              name="Dashboard"
              fontColor={fontColor}
              scrolled={scrolled}
            />
            <NavBarItem
              to="/"
              name="Logout"
              fontColor={fontColor}
              logout
              scrolled={scrolled}
              onClick={handleLogout}
            />
          </>
        ) : (
          <>
            <NavBarItem
              to="/signup"
              name="Cadastre-se"
              fontColor={fontColor}
              scrolled={scrolled}
            />
            <NavBarItem
              to="/login"
              name="Entrar"
              fontColor={fontColor}
              scrolled={scrolled}
            />
          </>
        )}
      </Flex>
      <HStack
        display={{ base: "flex", md: "none" }}
        position={"absolute"}
        right={"5px"}
        backgroundColor={"white"}
      >
        {isOpen && <ToggleContent />}
        <Toggle isOpen={isOpen} onToggle={onToggle} />
      </HStack>
    </>
  );
};

const NavBarItem = ({ name, to, fontColor, logout, onClick, scrolled }) => {
  return (
    <Link to={to}>
      <Button
        variant="ghost"
        _hover={{
          bg: scrolled ? "var(--color-primary)" : "purple.500",
        }}
        _active={{
          bg: scrolled ? "red.800" : "blue.900",
        }}
        onClick={onClick}
        className={style.NavBarItem}
        style={{
          color: fontColor,
          fontWeight: logout ? "bold" : "normal",
        }}
      >
        {name}
      </Button>
    </Link>
  );
};

NavBarItem.propTypes = {
  name: Proptypes.string.isRequired,
  to: Proptypes.string.isRequired,
  fontColor: Proptypes.string.isRequired,
  logout: Proptypes.bool,
  onClick: Proptypes.func,
  scrolled: Proptypes.bool.isRequired,
};

NavBar.propTypes = {
  isLogged: Proptypes.bool.isRequired,
};
