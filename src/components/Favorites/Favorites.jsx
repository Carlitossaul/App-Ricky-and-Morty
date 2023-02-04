import { connect } from 'react-redux';
import style from "./Favorites.module.css"
import { useDispatch } from 'react-redux';
import { orderCards, filterCards } from "../../Redux/actions/index"

const Favorites = ({ myFavorites }) => {
    console.log(myFavorites)

    const dispatch = useDispatch();

    const handeleOrder = (event) => {
        dispatch(orderCards(event.target.value))
    }

    return (
        <div className={style.Favorites} >
            <div>
                <select className={style.select} onChange={handeleOrder}>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
                <select className={style.select} onChange={e => dispatch(filterCards(e.target.value))}>
                    <option value="Male" >Male</option>
                    <option value="Female" >Female</option>
                    <option value="Genderless" >Genderless</option>
                    <option value="unknown" >unknown</option>
                </select>
            </div>
            <div className={style.container} >
                {myFavorites.map((pers, i) => (
                    <div key={i} className={style.card}>
                        <h1 className={style.title} >{pers.name}</h1>
                        <img className={style.image} src={pers.image} />
                    </div>
                ))}
            </div>
        </div>
    )

}

export const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}


export default connect(mapStateToProps, null)(Favorites)