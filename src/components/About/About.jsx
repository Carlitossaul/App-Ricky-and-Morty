import React from "react"
import image from "../../assets/profile-pic (7).png"
import style from "./About.module.css"


const About = () => {
    return (
        <div className={style.container}>
            <div className={style.text}>
                <h1 className={style.h1}>Sobre esta App</h1>
                <p>• Esto es una aplicacion hecha con React,</p>
                <p>para integrar los conocimientos adquiridos </p>
                <p>en front-end vistos en el Modulo 2 de Henry </p>
                <p>• Esta App consume data de una appi sobre la serie </p>
                <p> "Rick and Morty" </p>
                <p>• En el search se puede buscar personajes</p>
                <p>por numeros y obtener detalles sobre ellos</p>
                <br />
                <h1 className={style.h1}>Sobre mi: Soy Carlos Lovey</h1>
                <p>• Estudio en Henry la carrera de </p>
                <p> Desarrollador web full stack</p>
            </div>
            <div>
                <img className={style.image} src={image} alt="profile" />
            </div>

        </div>
    )
}
export default About