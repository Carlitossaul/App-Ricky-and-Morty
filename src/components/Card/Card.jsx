import style from "./Card.module.css"
import { NavLink } from "react-router-dom";

const Card = (props) => {
   return (
      <div className={style.container}>
         <div className={style.card}>
            <div className={style.divButton}>
               <button className={style.button} onClick={() => props.onClose(props.id)}>X</button>
            </div>
            <NavLink to={`/detail/${props.detailId}`} >
               <h5 className={style.name}>{props.name}</h5>
            </NavLink>
            <div className={style.img}>
               <img src={props.image} alt="image" />
            </div>
            <div className={style.data}>
               <ul className={style.ulData}>
                  <li>{props.species}</li>
                  <li>{props.gender}</li>
                  <li>{props.status}</li>
               </ul>
            </div>
         </div>
      </div>
   );
}
export default Card