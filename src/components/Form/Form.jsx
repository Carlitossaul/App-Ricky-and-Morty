import style from "./Form.module.css"
import { useState } from "react";

import React from 'react';

const Form = () => {
    const [userData, setUserData] = useState({ username: '', password: '' });
    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    return (
        <div className={style.container} >
            <form className={style.form} >
                <div className={style.username}>
                    <label className={style.label} htmlFor="username">Username</label>
                    <input onChange={handleChange} type="text" name="username" placeholder="Write your username..." value={userData.username} className={style.input} />
                </div>
                <div className={style.password}>
                    <label className={style.label} htmlFor="password">Password</label>
                    <input onChange={handleChange} type="password" name="password" placeholder="Write your password..." value={userData.password} className={style.input} />
                </div>
                <div className={style.button}>
                    <button className={style.login} >LOGIN</button>
                </div>
            </form>
        </div>
    );
}

export default Form;
