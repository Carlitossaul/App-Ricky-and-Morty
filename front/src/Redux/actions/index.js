import axios from "axios";

export const ADD_FAVORITE = "ADD_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const GET_FAVS = "GET_FAVS";
export const VALIDATION = "VALIDATION";

export const addFavorite = (idUser, personaje) => {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        `http://localhost:3001/rickandmorty/fav?idUser=${idUser}`,
        personaje
      );

      if (response.data) {
        dispatch({ type: ADD_FAVORITE, payload: response.data });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteFavorite = (id, idUser) => {
  return async function (dispatch) {
    try {
      const response = await axios.delete(
        `http://localhost:3001/rickandmorty/fav/${id}?idUser=${idUser}`
      );
      if (response.data.success)
        dispatch({ type: DELETE_FAVORITE, payload: id });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getFavorite = (idUser) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `http://localhost:3001/rickandmorty/fav?idUser=${idUser}`
      );
      console.log(response.data);
      if (response.data) {
        dispatch({ type: GET_FAVS, payload: response.data });
      }
    } catch (error) {
      console.log(error);
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

export const validation = (email, password) => async (dispatch) => {
  try {
    const obj = await axios.get(
      `http://localhost:3001/rickandmorty/login?email=${email}&password=${password}`
    );
    console.log(obj.data);
    if (obj.data.access) {
      dispatch({ type: VALIDATION, payload: obj.data.id });
    }
  } catch (error) {
    Error({ error: error.message });
  }
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
