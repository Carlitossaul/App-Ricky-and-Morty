import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";
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

// import React from "react";
// import SearchBar from "../SearchBar/SearchBar";
// import style from "./Nav.module.css";
// import { NavLink } from "react-router-dom";
// import img from "../../assets/fotor_2023-3-14_8_5_33.png";

// const Nav = ({ onSearch, logout, Random }) => {
//   const handleSubmit = () => {
//     logout();
//   };
//   const handleRandom = () => {
//     Random();
//   };

//   return (
//     <nav className={style.container}>
//       <div className={style.linksOne}>
//         <NavLink className={style.logoContainer} to="/home">
//           <img className={style.logo} src={img} alt="logo" />
//         </NavLink>
//         <NavLink activeClass={style.active} className={style.link} to="/home">
//           Home
//         </NavLink>
//         <NavLink
//           activeClass={style.active}
//           className={style.link}
//           to="/favorites"
//         >
//           Favorites
//         </NavLink>
//         <NavLink
//           activeClassName={style.active}
//           className={style.link}
//           to="/about"
//         >
//           About
//         </NavLink>
//       </div>

//       <div className={style.SearchBar}>
//         <SearchBar onSearch={onSearch} />
//       </div>
//       <div className={style.divButon}>
//         <button className={style.button} onClick={handleRandom}>
//           Add Random
//         </button>
//         <button className={style.button} onClick={handleSubmit}>
//           Log Out
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Nav;
