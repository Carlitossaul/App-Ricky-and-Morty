import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Register.module.css";

const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/rickandmorty/login", user)
      .then(() => navigate("/"))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form className={style.form} onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          onChange={handleChange}
          value={user.email}
          type="text"
        />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          onChange={handleChange}
          value={user.password}
          type="text"
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
