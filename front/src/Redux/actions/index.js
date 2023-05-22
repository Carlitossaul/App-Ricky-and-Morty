import axios from "axios";
import toast from "react-hot-toast";
import {
  ADD_FAVORITE,
  DELETE_FAVORITE,
  FILTER,
  ORDER,
  GET_FAVS,
  ID_USER,
  LOGIN,
  LOGOUT,
} from "./types";

export const addFavorite = (idUser, personaje) => {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        `/rickandmorty/fav?idUser=${idUser}`,
        personaje
      );
      if (response.data) {
        dispatch({ type: ADD_FAVORITE, payload: response.data });
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
};

export const deleteFavorite = (id, idUser) => {
  return async function (dispatch) {
    try {
      const response = await axios.delete(
        `/rickandmorty/fav/${id}?idUser=${idUser}`
      );
      if (response.data.success)
        dispatch({ type: DELETE_FAVORITE, payload: id });
    } catch (error) {
      console.log(error);
      toast.error("An error occurred while deleted favorite.");
    }
  };
};

export const getFavorite = (idUser) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/rickandmorty/fav?idUser=${idUser}`);

      dispatch({ type: GET_FAVS, payload: response.data });
    } catch (error) {
      console.log(error);
      toast.error("An error occurred while retrieving the favorites.");
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

export const user = (payload) => {
  return {
    type: ID_USER,
    payload: payload,
  };
};

export function loginUser() {
  return {
    type: LOGIN,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}
