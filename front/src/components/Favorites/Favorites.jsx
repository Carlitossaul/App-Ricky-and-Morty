import style from "./Favorites.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  orderCards,
  filterCards,
  getFavorite,
  deleteFavorite,
} from "../../Redux/actions/index";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

const Favorites = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const idUser = useSelector((state) => state.idUser);
  const myFavorites = useSelector((state) => state.myFavorites);

  useEffect(() => {
    dispatch(getFavorite(idUser));
  }, [dispatch]);

  const handlerOrder = (event) => {
    dispatch(orderCards(event.target.value));
  };

  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;

    if (scrollPosition > 400) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={style.Favorites}>
      <div className={style.botones}>
        <div>
          <button onClick={() => navigate("/home")} className={style.button}>
            Go Back!
          </button>
        </div>
        <div className={style.selects}>
          <select className={style.select} onChange={handlerOrder}>
            <option>Order</option>
            <option value="Ascendente">Ascendente</option>
            <option value="Descendente">Descendente</option>
          </select>
          <select
            className={style.select}
            onChange={(e) => dispatch(filterCards(e.target.value))}
          >
            <option>Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
          </select>
          <button
            className={style.reset}
            onClick={() => dispatch(getFavorite(idUser))}
          >
            Reset
          </button>
        </div>
      </div>
      <div className={style.container}>
        {myFavorites &&
          myFavorites.length &&
          myFavorites.map((pers, i) => (
            <div key={i} className={style.card}>
              <button
                className={style.onClose}
                onClick={() => dispatch(deleteFavorite(pers.id, idUser))}
              >
                X
              </button>
              <h1 className={style.title}>{pers.name}</h1>
              <img className={style.image} src={pers.image} />
            </div>
          ))}
      </div>
      <div className={style.space}></div>
      {showScrollButton && (
        <button className={style.scrollToTopButton} onClick={handleScrollToTop}>
          <FaAngleDoubleUp />
        </button>
      )}
    </div>
  );
};

export default Favorites;
