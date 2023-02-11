import React from "react";
import SearchBar from "../SearchBar/SearchBar"
import style from "./Nav.module.css"
import { NavLink } from "react-router-dom";


const Nav = ({ onSearch, logout }) => {

    const handleSubmit = () => {
        logout()
    }

    return (
        <div className={style.container}>
            <div className={style.linksOne}  >
                <NavLink className={style.NavLink} to="/home">Home</NavLink>
                <NavLink className={style.NavLink} to="/favorites" >Favorites</NavLink>
                <NavLink className={style.NavLink} to="/about">About</NavLink>
            </div>

            <div className={style.SearchBar} >
                <SearchBar onSearch={onSearch} />
            </div>
            <div className={style.divButon}>
                <button className={style.button} onClick={handleSubmit} >Log Out</button>
            </div>


        </div>

    )
}

export default Nav