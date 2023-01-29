import { ADD_FAVORITE, DELETE_FAVORITE } from "../actions"

const initialState = {
    myFavorites: []
}

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_FAVORITE:
            return {
                ...state,
                myFavorites: [...state.myFavorites, payload]
            }
        case DELETE_FAVORITE:
            return {
                ...state,
                myFavorites: state.myFavorites.filter((pers) => {
                    return pers.id !== payload
                })
            }
        default:
            return { ...state }
    }
}



export default rootReducer