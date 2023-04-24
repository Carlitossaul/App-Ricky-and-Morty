import { connect } from "react-redux";
import style from "./Favorites.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  orderCards,
  filterCards,
  getFavorite,
} from "../../Redux/actions/index";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Favorites = () => {
  console.log(myFavorites);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const myFavorites = useSelector((state) => state.myFavorites);
  const idUser = useSelector((state) => state.idUser);

  useEffect(() => {
    dispatch(getFavorite(idUser));
    console.log(myFavorites);
    return () => {
      dispatch(getFavorite(idUser));
    };
  }, [myFavorites]);

  const handeleOrder = (event) => {
    dispatch(orderCards(event.target.value));
  };

  return (
    <div className={style.Favorites}>
      <div className={style.botones}>
        <div>
          <button onClick={() => navigate("/home")} className={style.button}>
            Go Back!
          </button>
        </div>
        <div>
          <select className={style.select} onChange={handeleOrder}>
            <option value="Ascendente">Ascendente</option>
            <option value="Descendente">Descendente</option>
          </select>
          <select
            className={style.select}
            onChange={(e) => dispatch(filterCards(e.target.value))}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
          </select>
        </div>
      </div>
      <div className={style.container}>
        {myFavorites.map((pers, i) => (
          <div key={i} className={style.card}>
            <h1 className={style.title}>{pers.name}</h1>
            <img className={style.image} src={pers.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
