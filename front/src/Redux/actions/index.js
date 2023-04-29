import axios from "axios";

export const ADD_FAVORITE = "ADD_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const GET_FAVS = "GET_FAVS";
export const VALIDATION = "VALIDATION";
export const ACCESS = "ACCESS";
export const GET_USERS = "GET_USERS";
export const ID_USER = "ID_USER";

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

export const idUser = (payload) => {
  return {
    type: ID_USER,
    payload: payload,
  };
};

// export const validationBack = (email, password) => async (dispatch) => {
//   try {
//     const obj = await axios.get(
//       `/rickandmorty/login?email=${email}&password=${password}`
//     );
//     if (obj.data.access) {
//       dispatch({ type: VALIDATION, payload: obj.data.id });
//     }
//   } catch (error) {
//     Error({ error: error.message });
//   }
// };

export const getUsers = () => async (dispatch) => {
  try {
    const response = await axios.get("/rickandmorty/login/users");
    dispatch({
      type: GET_USERS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

// return (dispatch) => {
//   axios
//     .post(`/rickandmorty/fav`, personaje) //porque aca no va el signo pesos?
//     .then((response) => {
//       dispatch({
//         type: ADD_FAVORITE,
//         payload: response.data,
//       });
//     });
// };
