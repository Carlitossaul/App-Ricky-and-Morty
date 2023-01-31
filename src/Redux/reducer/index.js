import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "../actions"

const initialState = {
    myFavorites: [],
    allCharacters: [],
}

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_FAVORITE:
            return {
                ...state,
                myFavorites: [...state.allCharacters, payload],
                allCharacters: [...state.allCharacters, payload]
            }
        case DELETE_FAVORITE:
            return {
                ...state,
                myFavorites: state.myFavorites.filter((pers) => {
                    return pers.id !== payload
                })
            }
        case FILTER:
            const filterCopy = [...state.allCharacters]
            const filtered = filterCopy.filter(pers => pers.gender === payload)

            return {
                ...state,
                myFavorites: filtered
            }
        case ORDER:
            const orderCopy = [...state.allCharacters]
            if (payload === "Ascendiente") {
                orderCopy.sort((a, b) => a.id - b.id)
            }
            if (payload === "Descendente") {
                orderCopy.sort((a, b) => b.id - a.id)
            }
            return {
                ...state,
                myFavorites: orderCopy
            }
        default:
            return { ...state }
    }
}



export default rootReducer