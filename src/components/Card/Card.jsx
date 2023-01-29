import style from "./Card.module.css"
import { NavLink } from "react-router-dom";
import { Tooltip } from 'react-tooltip'
import { connect } from 'react-redux';
import { useState, useEffect } from "react";
import { addFavorite, deleteFavorite } from "../../Redux/actions/index.js"

const Card = (props, { id, detailId }) => {
   console.log(props)
   const [isFav, setIsfav] = useState(false)

   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.detailId) {
            setIsfav(true);
         }
      });
   }, [props.myFavorites]);

   const handleFavorite = () => {
      if (isFav) {
         setIsfav(false)
         props.deleteFavorite(props.id)
      }
      if (!isFav) {
         setIsfav(true)
         props.addFavorite(props)
      }
   }

   return (
      <div className={style.container}>
         <div className={style.card}>
            <div className={style.divButton}>
               {isFav ? (<button onClick={handleFavorite}>❤️</button>) : (
                  <button onClick={handleFavorite}>🤍</button>)}
               <button className={style.button} onClick={() => props.onClose(props.id)}>X</button>
            </div>
            <NavLink id="detalles" data-tooltip-content="Ver detalles del personaje" to={`/detail/${detailId}`} className={style.NavLink} >
               <div className={style.containerTwo}>
                  <div className={style.titleDiv}>
                     <h5 className={style.name}>{props.name}</h5>
                  </div>
                  <img className={style.image} src={props.image} alt="image" />
               </div>
               <div className={style.data}>
                  <ul className={style.ulData}>
                     <li>{props.species}</li>
                     <li>{props.gender}</li>
                  </ul>
               </div>
            </NavLink>
            <Tooltip place="right" anchorId="detalles" />
         </div>
      </div>
   );
}

export const mapDispatchToProps = (dispatch) => {
   return {
      addFavorite: (personaje) => { dispatch(addFavorite(personaje)) },
      deleteFavorite: (id) => { dispatch(deleteFavorite(id)) }
   };
}

export const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)