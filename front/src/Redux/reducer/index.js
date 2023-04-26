import {
  ADD_FAVORITE,
  DELETE_FAVORITE,
  FILTER,
  GET_FAVS,
  GET_USERS,
  ORDER,
  VALIDATION,
} from "../actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
  errors: {},
  idUser: null,
  users: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAVORITE:
      const result = [...payload];

      return {
        ...state,
        myFavorites: [...result],
        allCharacters: [...result],
      };
    case GET_FAVS:
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
        acceso: true,
      };
    case GET_USERS:
      return {
        ...state,
        users: payload,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
