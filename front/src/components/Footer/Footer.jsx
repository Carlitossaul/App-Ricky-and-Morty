import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.container}>
      <a
        target={"_blank"}
        className={style.Navlink}
        href="https://github.com/Carlitossaul"
        rel="noopener noreferrer"
      >
        <p className={style.p}>Designed & Built by Carlos Lovey</p>
      </a>
    </div>
  );
};

export default Footer;
