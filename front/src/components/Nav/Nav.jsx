import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import img from "../../assets/fotor_2023-3-14_8_5_33.png";

const Nav = ({ onSearch, logout, Random }) => {
  const handleSubmit = () => {
    logout();
  };
  const handleRandom = () => {
    Random();
  };

  return (
    <nav className={style.container}>
      <div className={style.linksOne}>
        <NavLink className={style.logoContainer} to="/home">
          <img className={style.logo} src={img} alt="logo" />
        </NavLink>
        <NavLink className={style.NavLink} to="/home">
          Home
        </NavLink>
        <NavLink className={style.NavLink} to="/favorites">
          Favorites
        </NavLink>
        <NavLink className={style.NavLink} to="/about">
          About
        </NavLink>
      </div>

      <div className={style.SearchBar}>
        <SearchBar onSearch={onSearch} />
      </div>
      <div className={style.divButon}>
        <button className={style.button} onClick={handleRandom}>
          Add Random
        </button>
        <button className={style.button} onClick={handleSubmit}>
          Log Out
        </button>
      </div>
    </nav>
  );
};

export default Nav;
