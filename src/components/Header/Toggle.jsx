import style from './header.module.css';
import { Box, IconButton, Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import Proptypes from 'prop-types';

export const Toggle = ({ isOpen, onToggle }) => {
  return (
    <IconButton
      icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
      aria-label='Toggle Menu'
      display={{ md: "none" }}
      position={"absolute"}
      right={"5px"}
      top={"5px"}
      onClick={onToggle}
    />
  )
};

export const ToggleContent = (props) => {
  const { isLogged } = props;
  return (
    <Box className={style.Toggle} border={"1px black solid"}>
      {isLogged ?

        <Stack
          position={"absolute"}
          right={"45px"}
          top={"25px"}
          marginBottom={"10px"}
          padding={"5px"}
          border={"1px #000 solid"}
          backgroundColor={"white"}
          borderRadius={"12px"}
        >

          <ToggleItem to={"/home"} logged>Página Inicial</ToggleItem>
          <ToggleItem to={"/count"} logged>Sua Conta</ToggleItem>
          <ToggleItem to={"/logout"} logged>Logout</ToggleItem>
        </Stack>
        :
        <Stack
          position={"absolute"}
          right={"45px"}
          top={"25px"}
          marginBottom={"10px"}
          backgroundColor={"white"}
          padding={"5px"}
          border={"solid 1px #000"}
          borderRadius={"13px"}
        >
          <ToggleItem to={"/home"}>Explore</ToggleItem>
          <ToggleItem to={"/form/create/event"}>Criar</ToggleItem>
          <ToggleItem to={"/signup"}>Cadastrar</ToggleItem>
          <ToggleItem to={"/login"}>Entrar</ToggleItem>
        </Stack>
      }
    </Box>
  )
};


export const ToggleItem = (props) => {
  return (
    <Link to={props.to}>
      <Box
        style={{ color: "#000" || (props.logged && "#fff") }}>
        {props.children}
      </Box>
      <hr className={style.solid} />
    </Link>
  )
};

ToggleItem.propTypes = {
  to: Proptypes.string,
  children: Proptypes.node,
  logged: Proptypes.bool
}.isRequired;

Toggle.propTypes = {
  isOpen: Proptypes.bool,
  onToggle: Proptypes.func
}.isRequired;

ToggleContent.propTypes = {
  isLogged: Proptypes.bool
}.isRequired;
