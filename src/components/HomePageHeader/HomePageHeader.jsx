import { useState, useEffect } from "react";
import { NavBar } from "../Header/NavBar";
import style from "../HomePageHeader/homepageheader.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const HomePageHeader = ({ isLogged }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${style.Header} ${scrolled ? style.scrolled : ""} ${
        isLogged ? style.logged : ""
      }`}
    >
      <Link to={"/"}>
        <h1 className={scrolled ? style.loggedTitle : style.notLoggedTitle}>
          EVENT <span className={style.span}>&#10040;</span>
          <br /> HUNTERS
        </h1>
      </Link>
      <NavBar isLogged={isLogged} />
    </header>
  );
};

HomePageHeader.propTypes = {
  isLogged: PropTypes.bool,
};
