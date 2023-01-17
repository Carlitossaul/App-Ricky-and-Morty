import style from "./Card.module.css"

export default function Card(props) {
   return (
      <div className={style.card}>
         <div className={style.divButton}>
            <button className={style.button} onClick={props.onClose}>X</button>
         </div>
         <h2 className={style.name}>{props.name}</h2>
         <div className={style.img}>
            <img src={props.image} alt="image" />
         </div>
         <div className={style.data}>
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
         </div>
      </div>
   );
}
