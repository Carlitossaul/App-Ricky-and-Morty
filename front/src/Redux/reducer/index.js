import {
  ADD_FAVORITE,
  DELETE_FAVORITE,
  FILTER,
  GET_FAVS,
  ORDER,
  VALIDATION,
} from "../actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
  errors: {},
  idUser: null,
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAVORITE:
      console.log(payload);
      if (!state.allCharacters) {
        return state;
      }
      const addFavorites = [...state.allCharacters, payload];
      console.log(addFavorites);
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload],
        allCharacters: [...addFavorites],
      };
    case GET_FAVS:
      console.log(payload);
      return {
        ...state,
        myFavorites: [...payload],
        allCharacters: [...payload],
      };
    case DELETE_FAVORITE:
      let stateCopy = [...state.allCharacters];
      let filtrados = stateCopy.filter((char) => char.id !== payload);
      return {
        ...state,
        myFavorites: filtrados,
        allCharacters: filtrados,
        errors: {},
      };
    case FILTER:
      const filterCopy = [...state.allCharacters];
      const filtered = filterCopy.filter((pers) => pers.gender === payload);

      return {
        ...state,
        myFavorites: filtered,
      };
    case ORDER:
      const orderCopy = [...state.allCharacters];
      if (payload === "Ascendiente") {
        orderCopy.sort((a, b) => a.id - b.id);
      }
      if (payload === "Descendente") {
        orderCopy.sort((a, b) => b.id - a.id);
      }
      return {
        ...state,
        myFavorites: orderCopy,
      };

    case "ERROR":
      return {
        ...state,
        errors: payload,
      };
    case VALIDATION:
      return {
        state,
        idUser: payload,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
