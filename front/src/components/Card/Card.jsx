import style from "./Card.module.css";
import { NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { addFavorite, deleteFavorite } from "../../Redux/actions/index.js";

const Card = (props) => {
  const [isFav, setIsfav] = useState(false);

  useEffect(() => {
    props.myFavorites &&
      props.myFavorites.forEach((fav) => {
        if (fav.id === props.detailId) {
          setIsfav(true);
        }
      });
  }, []);

  const handleFavorite = () => {
    if (isFav) {
      setIsfav(false);
      props.deleteFavorite(props.id, props.idUser);
    }
    if (!isFav) {
      setIsfav(true);
      props.addFavorite(props.idUser, {
        id: props.id,
        name: props.name,
        species: props.species,
        gender: props.gender,
        image: props.image,
      });
    }
  };

  return (
    <div className={style.container}>
      <div className={style.card}>
        <div className={style.divButton}>
          {isFav ? (
            <button className={style.buttonRed} onClick={handleFavorite}>
              ❤️
            </button>
          ) : (
            <button
              id="favorites"
              data-tooltip-content="Add to favorites"
              className={style.buttonWhite}
              onClick={handleFavorite}
            >
              🤍
            </button>
          )}
          <Tooltip place="bottom" anchorId="favorites" />
          <button
            className={style.button}
            onClick={() => props.onClose(props.id)}
          >
            X
          </button>
        </div>

        <NavLink
          id="detalles"
          data-tooltip-content="Ver detalles del personaje"
          to={`/detail/${props.detailId}`}
          className={style.NavLink}
        >
          <div className={style.containerTwo}>
            <div className={style.titleDiv}>
              <h5 className={style.name}>{props.name}</h5>
            </div>
            <img className={style.image} src={props.image} alt="image" />
          </div>
          <div className={style.data}>
            <ul className={style.ulData}>
              <li className={style.text}>{props.species}</li>
              <li className={style.text}>{props.gender}</li>
            </ul>
          </div>
        </NavLink>

        <Tooltip place="right" anchorId="detalles" />
      </div>
    </div>
  );
};

export const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (personaje, idUser) => {
      dispatch(addFavorite(personaje, idUser));
    },
    deleteFavorite: (id, idUser) => {
      dispatch(deleteFavorite(id, idUser));
    },
    // getFavorite: (idUser) => {
    //   dispatch(getFavorite(idUser));
    // },
  };
};

export const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
    idUser: state.idUser,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
