import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import style from "./Detail.module.css";
import toast from "react-hot-toast";
import axios from "axios";
import img from "../../assets/map_loader.gif";

const Detail = () => {
  const { detailId } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1100);
    axios(`/rickandmorty/detail/${detailId}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacter(data);
        }
      })
      .catch((err) => {
        toast.error("An error occurred while fetching the data.");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <div className={style.detail}>
      {loading ? (
        <div>
          <img className={style.loading} src={img} alt="loading" />
        </div>
      ) : (
        <div className={style.container}>
          <div className={style.info}>
            <button onClick={() => navigate("/home")} className={style.button}>
              Go Back!
            </button>
            <h1 className={style.text}>{character.name}</h1>
            <h3 className={style.text}>STATUS: {character.status}</h3>
            <h3 className={style.text}>ESPECIE: {character.species}</h3>
            <h3 className={style.text}>GENERO: {character.gender}</h3>
            <h3 className={style.text}>ORIGIN: {character.origin}</h3>
            <h3 className={style.text}>LOCATION: {character.location}</h3>
          </div>
          <div className={style.divImage}>
            <img className={style.image} src={character.image} alt="image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
