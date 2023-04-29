import axios from "axios";
import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import style from "./Register.module.css";
import validation from "./validation";
import img2 from "../../assets/87ff0bff883413683816646b97babd45.webp";

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    password2: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });

    setErrors(
      validation({
        ...user,
        [name]: value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(errors).length === 0) {
      axios
        .post(
          "app-ricky-and-morty-production.up.railway.app/rickandmorty/login",
          user
        )
        .then(() => navigate("/"))
        .catch((error) => console.log(error));
      alert("User created successfully");
      navigate("/");
    } else {
      alert("Please complete all fields");
    }
  };

  return (
    <div className={style.container}>
      <button onClick={() => navigate("/")} className={style.goBack}>
        <FaAngleLeft />
      </button>
      <div className={style.containerWelcome}>
        <h1 className={style.title}>Join the adventure of Rick and Morty</h1>
        <p className={style.parrafo}>
          "Welcome to the Rick and Morty universe! Sign up to access exclusive
          content. As a member, you'll have access to a community of Rick and
          Morty fans around the world. Join the adventure and discover the
          secrets of the multiverse with us !"
        </p>
        <img className={style.img} src={img2} alt="rick" />
      </div>
      <form className={style.form} onSubmit={handleSubmit}>
        <h1 className={style.title}>Get started</h1>
        <h2 className={style.subtitle}>Create your account now</h2>
        <div className={style.username}>
          <label className={style.label} htmlFor="email">
            Mail
          </label>
          <input
            onChange={handleChange}
            autoComplete="off"
            type="text"
            name="email"
            placeholder="Write a mail..."
            value={user.email}
            className={style.input}
          />
          <span className={style.span}>{errors.email ? errors.email : ""}</span>
        </div>
        <div className={style.password}>
          <label className={style.label} htmlFor="password">
            Password
          </label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Write your password..."
            value={user.password}
            className={style.input}
          />
          <span className={style.span}>
            {errors.password ? errors.password : ""}
          </span>
          <label className={style.label} htmlFor="password2">
            Repeat Password
          </label>
          <input
            onChange={handleChange}
            type="password"
            name="password2"
            placeholder="Write your password..."
            className={style.input}
            value={user.password2}
          />
          <span className={style.span}>
            {errors.password2 ? errors.password2 : ""}
          </span>
          <button className={style.register} type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
