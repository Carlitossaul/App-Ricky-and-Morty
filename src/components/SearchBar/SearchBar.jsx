import style from "./SearchBar.module.css"
import img from "../../assets/pngwing.com.png"

export default function SearchBar(props) {
   return (
      <div className={style.searchbar}>
         <div className={style.container}>
            <input className={style.input} type='namber' placeholder="Search" />
            <button className={style.button} onClick={props.onSearch}>
               <img className={style.img} src={img} alt='lupa' />
            </button>
         </div>
      </div>
   );
}
