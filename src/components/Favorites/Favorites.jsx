import { connect } from 'react-redux';
import style from "./Favorites.module.css"
import { deleteFavorite } from "../../Redux/actions/index"

const Favorites = ({ myFavorites }) => {
    console.log(myFavorites)


    return (
        <div className={style.Favorites} >
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