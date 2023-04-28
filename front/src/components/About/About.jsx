import React from "react";
import image from "../../assets/photo1674935309.jpeg";
import style from "./About.module.css";

const About = () => {
  return (
    <div className={style.about}>
      <div className={style.container}>
        <div className={style.text}>
          <h1 className={style.h1}>About this App</h1>
          <p className={style.parrafo}>
            I made this app during my time as a student at Henry, it was part of
            the weekly homeworks. The idea was to integrate the knowledge we
            were given. I applied the front-end, back-end and database. An app
            that consumes data from the Rick & Morty api, where users can create
            an account. Once logged in they can search for characters by ID and
            see details about them, they can also save favorites. In the
            favorites section you can filter by genre and sort by ID. I enjoyed
            making it is the fruit of many hours dedicated and I thank Henry
            that through this project I could begin to train as a full stack web
            developer.
          </p>
          <br />
          <h1 className={style.h1}>About me: I am Carlos Lovey</h1>
          <p className={style.parrafo}>I am a full stack web developer</p>
          <br />
          <h1 className={style.h1}>Contact:</h1>
          <p className={style.parrafo}>In process</p>
        </div>
        <div className={style.divImage}>
          <img className={style.image} src={image} alt="profile" />
        </div>
      </div>
    </div>
  );
};
export default About;
