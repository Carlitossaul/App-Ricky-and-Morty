import React from "react"
import image from "../../assets/profile-pic (7).png"
import style from "./About.module.css"


const About = () => {
    return (
        <div>
            <h1>Sobre esta App</h1>
            <p>Esto es una aplicacion hecha con React para integrar los conocimientos adquiridos en front-end vistos en el Modulo 2 de Henry </p>
            <p>Esta App consume data de una appi sobre la serie Rick and Morty</p>
            <p>En el search se puede buscar personajes por numeros y obtener detalles sobre ellos</p>

            <h1>Sobre mi: Soy Carlos Lovey</h1>
            <p>Estudio en Henry la carrera de Desarrollador web full stack</p>

            <img className={style.image} src={image} alt="profile" />

        </div>
    )
}
export default About