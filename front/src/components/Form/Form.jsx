import style from "./Form.module.css"
import { useState } from "react";
import bgVideo from "../../assets/Morty Malvado Cambiara todo __.mp4"
import React from 'react';
import validation from "./validation";

const Form = ({ login }) => {
    const [userData, setUserData] = useState({ username: '', password: '' });
    const [errors, setErrors] = useState({ username: '', password: '' })

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })

        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))

    }

    const handleSubmit = () => {
        login(userData)
    }

    return (
        <div className={style.container} >
            <video className={style.video} src={bgVideo} autoPlay loop muted />
            <form onSubmit={handleSubmit} className={style.form} >
                <div className={style.username}>
                    <label className={style.label} htmlFor="username">Username</label>
                    <input onChange={handleChange} autoComplete="off" type="text" name="username" placeholder="Write your username..." value={userData.username} className={style.input} />
                    <span className={style.span} >{errors.username ? errors.username : ""}</span>
                </div>
                <div className={style.password}>
                    <label className={style.label} htmlFor="password">Password</label>
                    <input onChange={handleChange} type="password" name="password" placeholder="Write your password..." value={userData.password} className={style.input} />
                    <span className={style.span} >{errors.password ? errors.password : ""}</span>
                </div>
                <div className={style.button}>
                    <button type="submit" className={style.login} >LOGIN</button>
                </div>
            </form>
        </div>
    );
}

export default Form;
