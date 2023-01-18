import style from "./Card.module.css"

const Card = (props) => {
   return (
      <div className={style.container}>
         <div className={style.card}>
            <div className={style.divButton}>
               <button className={style.button} onClick={() => props.onClose(props.id)}>X</button>
            </div>
            <h2 className={style.name}>{props.name}</h2>
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