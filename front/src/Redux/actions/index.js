import axios from "axios";

export const ADD_FAVORITE = "ADD_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

export const addFavorite = (personaje) => {
  return (dispatch) => {
    axios
      .post(`http://localhost:3001/rickandmorty/fav`, personaje) //porque aca no va el signo pesos?
      .then((response) => {
        dispatch({
          type: ADD_FAVORITE,
          payload: response.data,
        });
      });
  };
};
export const deleteFavorite = (id) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:3001/rickandmorty/fav/${id}`) //porque aca no va el signo pesos?
      .then((response) => {
        return dispatch({
          type: DELETE_FAVORITE,
          payload: response.data,
        });
      });
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
