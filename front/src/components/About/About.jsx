import React from "react";
import image from "../../assets/photo1674935309.jpeg";
import style from "./About.module.css";
import { FaLinkedin } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";
import { BsBoxArrowUpRight } from "react-icons/bs";

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
          <div className={style.links}>
            <a
              target="_blank"
              className={style.link}
              href="https://www.linkedin.com/in/carloslovey"
              rel="noopener noreferrer"
            >
              <FaLinkedin className={style.icon} />
              LinkedIn:My professional profile on LinkedIn, where you can find
              information about my work experience and skills. Click here!
            </a>
            <a
              target="_blank"
              className={style.link}
              href="https://github.com/Carlitossaul"
              rel="noopener noreferrer"
            >
              <GoMarkGithub className={style.icon} />
              GitHub: "My GitHub profile, where I share some of my projects and
              collaborations with the developer community. Click here!
            </a>
            <a
              target="_blank"
              className={style.link}
              href="https://carloslovey.vercel.app/"
              rel="noopener noreferrer"
            >
              <BsBoxArrowUpRight className={style.icon} />
              Portfolio: My portfolio of projects, where you can see some of the
              work I have done and my work style. Click here!
            </a>
          </div>
        </div>
        <div className={style.divImage}>
          <img className={style.image} src={image} alt="profile" />
        </div>
      </div>
    </div>
  );
};
export default About;
