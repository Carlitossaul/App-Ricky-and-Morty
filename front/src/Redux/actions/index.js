import axios from "axios";

export const ADD_FAVORITE = "ADD_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const GET_FAVS = "GET_FAVS";

export const addFavorite = (personaje) => {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        `http://localhost:3001/rickandmorty/fav`,
        personaje
      );
      dispatch({
        type: ADD_FAVORITE,
        payload: response.data,
      });
    } catch (error) {
      return dispatch({ type: "ERROR", payload: error });
    }
  };
};
export const deleteFavorite = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.delete(
        `http://localhost:3001/rickandmorty/fav/${id}`
      );
      return dispatch({
        type: DELETE_FAVORITE,
        payload: response.data,
      });
    } catch (error) {
      return dispatch({ type: "ERROR", payload: error });
    }
  };
};

export const getFavorite = () => {
  return async function (dispatch) {
    try {
      const response = await axios(
        `http://localhost:3001/rickandmorty/fav/get`
      );
      return dispatch({ type: "GET_FAVS", payload: response.data });
    } catch (error) {
      return dispatch({ type: "ERROR", payload: error });
    }
  };
};

export const filterCards = (status) => {
  return {
    type: FILTER,
    payload: status,
  };
};

export const orderCards = (id) => {
  return {
    type: ORDER,
    payload: id,
  };
};

// return (dispatch) => {
//   axios
//     .post(`http://localhost:3001/rickandmorty/fav`, personaje) //porque aca no va el signo pesos?
//     .then((response) => {
//       dispatch({
//         type: ADD_FAVORITE,
//         payload: response.data,
//       });
//     });
// };
