import { connect } from 'react-redux';

const Favorites = ({ myFavorites }) => {
    console.log(myFavorites)
    return (
        <div>
            {myFavorites.map((pers, i) => {
                return (<div key={i}>
                    <h1>{pers.name}</h1>
                    <img src={pers.image} alt="image" />
                </div>)
            })}
        </div>
    )

}

export const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}


export default connect(mapStateToProps, null)(Favorites)