import style from "./Card.module.css"
import { NavLink } from "react-router-dom";
import { Tooltip } from 'react-tooltip'
// import 'react-tooltip/dist/react-tooltip.css'

const Card = ({ onClose, detailId, name, image, species, gender, id }) => {
   return (
      <div className={style.container}>

         <div className={style.card}>
            <div className={style.divButton}>
               <button className={style.button} onClick={() => onClose(id)}>X</button>
            </div>
            <NavLink id="detalles" data-tooltip-content="Ver detalles del personaje" to={`/detail/${detailId}`} className={style.NavLink} >
               <div className={style.containerTwo}>
                  <div className={style.titleDiv}>
                     <h5 className={style.name}>{name}</h5>
                  </div>
                  <img className={style.image} src={image} alt="image" />
               </div>
               <div className={style.data}>
                  <ul className={style.ulData}>
                     <li>{species}</li>
                     <li>{gender}</li>
                  </ul>
               </div>
            </NavLink>
            <Tooltip place="right" anchorId="detalles" />
         </div>
      </div>
   );
}
export default Card