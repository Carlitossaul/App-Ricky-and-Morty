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
                <NavLink className={style.NavLink} to="/home">
                    <span>Home</span>
                </NavLink>
                <NavLink to="/favorites" className={style.NavLink}>
                    <span >Favorites</span>
                </NavLink>
                <NavLink className={style.NavLink} to="/about">
                    <span>About</span>
                </NavLink>
            </div>
            <div className={style.linksTwo} >
                <div className={style.SearchBar} >
                    <SearchBar onSearch={onSearch} />
                </div>
                <div>
                    <button className={style.button} onClick={handleSubmit} >Log Out</button>
                </div>
            </div>

        </div>

    )
}

export default Nav