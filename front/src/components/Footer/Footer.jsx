import { NavLink } from "react-router-dom";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.container}>
      <NavLink
        target={"_blank"}
        className={style.Navlink}
        to={"https://github.com/Carlitossaul"}
      >
        <p className={style.p}>Designed & Built by Carlos Lovey</p>
      </NavLink>
    </div>
  );
};

export default Footer;
