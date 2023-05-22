import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import { Link, useLocation } from "react-router-dom";
import img from "../../assets/fotor_2023-3-14_8_5_33.png";

const Nav = ({ onSearch, logoutUser, Random }) => {
  const handleSubmit = () => {
    logoutUser();
  };
  const handleRandom = () => {
    Random();
  };
  const location = useLocation();
  const isAboutOrFavorites =
    location.pathname === "/about" || location.pathname === "/favorites";

  return (
    <nav className={style.container}>
      <div className={style.linksOne}>
        <Link className={style.logoContainer} to="/home">
          <img className={style.logo} src={img} alt="logo" />
        </Link>
        <Link
          className={`${style.link} ${
            window.location.pathname === "/home" && style["link-active"]
          }`}
          to="/home"
        >
          Home
        </Link>
        <Link
          className={`${style.link} ${
            window.location.pathname === "/favorites" && style["link-active"]
          }`}
          to="/favorites"
        >
          Favorites
        </Link>
        <Link
          className={`${style.link} ${
            window.location.pathname === "/about" && style["link-active"]
          }`}
          to="/about"
        >
          About
        </Link>
      </div>

      {!isAboutOrFavorites && (
        <div className={style.SearchBar}>
          <SearchBar onSearch={onSearch} />
        </div>
      )}
      <div className={style.divButon}>
        {!isAboutOrFavorites && (
          <button className={style.button} onClick={handleRandom}>
            Add Random
          </button>
        )}
        <button className={style.button} onClick={handleSubmit}>
          Log Out
        </button>
      </div>
    </nav>
  );
};

export default Nav;
