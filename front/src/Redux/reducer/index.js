import {
  ADD_FAVORITE,
  DELETE_FAVORITE,
  FILTER,
  GET_FAVS,
  ORDER,
} from "../actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
  errors: {},
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: payload,
        allCharacters: payload,
        errors: {},
      };
    case DELETE_FAVORITE:
      return {
        ...state,
        myFavorites: payload,
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
    case GET_FAVS:
      return {
        ...state,
        myFavorites: payload,
        errors: {},
      };
    case "ERROR":
      return {
        ...state,
        errors: payload,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
