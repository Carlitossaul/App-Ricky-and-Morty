import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import style from "./Detail.module.css"

const Detail = () => {
    const { detailId } = useParams();
    const navigate = useNavigate()
    const [character, setCharacter] = useState({})

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
            .then((response) => response.json())
            .then((char) => {
                console.log(char)
                if (char.name) {
                    setCharacter(char);
                } else {
                    window.alert("No hay personajes con ese ID");
                }
            })
            .catch((err) => {
                window.alert("No hay personajes con ese ID");
            });
        return setCharacter({});
    }, [detailId]);

    return (
        <div>
            <button onClick={() => navigate("/home")}>Home</button>
            <div className={style.container}>
                <div className={style.info}>
                    <h1>NOMBRE: {character.name}</h1>
                    <h3>STATUS: {character.status}</h3>
                    <h3>ESPECIE: {character.species}</h3>
                    <h3>GENERO: {character.gender}</h3>
                    <h3>ORIGIN: {character.origin?.name}</h3>
                </div>
                <div className="image">
                    <img src={character.image} alt="image" />
                </div>
            </div>
        </div>
    )

}

export default Detail