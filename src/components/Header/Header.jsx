import { Link } from "react-router-dom";
import style from "./header.module.css";
import { NavBar } from "./NavBar.jsx";
import Proptypes from "prop-types";
import { useContext } from "react";
import { GlobalContext } from "../../providers/globalContext.jsx";

export const Header = (props) => {
  const { isLogged } = useContext(GlobalContext);
  return (
    <header
      className={style.Header}
      style={{ backgroundColor: isLogged && "black" }}
    >
      {isLogged ? (
        <Link to={"/"}>
          <h1 style={{ color: "white" }}>
            EVENT <span className={style.span}>&#10040;</span>
            <br /> HUNTERS
          </h1>
        </Link>
      ) : (
        <Link to={"/"}>
          <h1>
            EVENT <span className={style.span}>&#10040;</span>
            <br /> HUNTERS
          </h1>
        </Link>
      )}
      <NavBar {...props} />
    </header>
  );
};

Header.propTypes = {
  isLogged: Proptypes.bool,
}.isRequired;
