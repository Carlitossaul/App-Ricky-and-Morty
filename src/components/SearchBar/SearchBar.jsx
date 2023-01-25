import style from "./SearchBar.module.css"
import img from "../../assets/pngwing.com.png"
import { useState } from "react";

const SearchBar = ({ onSearch }) => {

   const [character, setCharacter] = useState("")

   const handleChange = (e) => {
      setCharacter(e.target.value)
   }

   return (
      <div className={style.searchbar}>
         <div className={style.container}> {/* encerrar lo de abajo en un form */}
            <input className={style.input} type='namber' placeholder="Search character..." value={character} onChange={handleChange} />
            <button className={style.button} onClick={() => onSearch(character)}>
               <img className={style.img} src={img} alt='lupa' />
            </button>
         </div>
      </div >
   );
}

export default SearchBar