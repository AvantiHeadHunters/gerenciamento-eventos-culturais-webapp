import { Flex, HStack, useDisclosure } from "@chakra-ui/react";
import { Toggle, ToggleContent } from "./Toggle";
import { Link } from "react-router-dom";
import style from './header.module.css';
import Proptypes from 'prop-types';

export const NavBar = props => {
  const { isLogged } = props;
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      {isLogged ?
        <Flex
          className={style.NavBar}
          display={{ base: "none", md: "flex" }}
        >
          <NavBarItem to={"/home"} name={"Página Inicial"} logged />
          <NavBarItem to={"/count"} name={"Sua Conta"} logged />
          <NavBarItem to={"/logout"} name={"Logout"} logout />
        </Flex> :
        <Flex
          className={style.NavBar}
          display={{ base: "none", md: "flex" }} 
        >
          <NavBarItem to={"/home"} name={"Explore"} />
          <NavBarItem to={"/form/create/event"} name={"Criar"} />
          <NavBarItem to={"/signup"} name={"Cadastre-se"} />
          <NavBarItem to={"/login"} name={"Entrar"} bold />
        </Flex>
      }
      <HStack
        display={{ base: "flex", md: "none" }}
        position={"absolute"} right={"5px"}
        backgroundColor={"white"}
      >
        {isOpen && <ToggleContent {...props} />}
        <Toggle isOpen={isOpen} onToggle={onToggle} />
      </HStack>
    </>
  )
};

const NavBarItem = ({ name, to, bold, logged, logout }) => {
  const styleButton = {
    backgroundColor: (bold && "#000") || (logged && "#000"),
    color:
      (bold && "white") ||
      (logged && "white") ||
      (logout && "yellow"),
    borderRadius: bold && 10,
    border:
      (bold && "1px solid white") ||
      (logged && "none") ||
      (logout && "1px yellow solid"),
    paddingHorizontal: 25,
    paddingVertical: 30,
  };

  return (
    <Link to={to} >
      <button className={style.NavBarItem} style={styleButton}>{name}</button>
    </Link>
  )
};

NavBarItem.propTypes = {
  name: Proptypes.string,
  to: Proptypes.string,
  bold: Proptypes.bool,
  logged: Proptypes.bool,
  logout: Proptypes.bool
}.isRequired;

NavBar.propTypes = {
  isLogged: Proptypes.bool
}.isRequired;
