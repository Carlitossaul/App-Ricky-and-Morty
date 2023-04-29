import Nav from "./components/Nav/Nav.jsx";
import Cards from "./components/Cards/Cards.jsx";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Favorites from "./components/Favorites/Favorites.jsx";
import Error404 from "./components/Error404/Error404.jsx";
import Form from "./components/Form/Form.jsx";
import style from "./App.module.css";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteFavorite, getUsers, idUser } from "./Redux/actions/index.js";
import Footer from "./components/Footer/Footer.jsx";
import Register from "./components/Register/Register.jsx";
import axios from "axios";
axios.defaults.baseURL = "app-ricky-and-morty-production.up.railway.app/";
// axios.defaults.baseURL = "http://localhost:3001/";

//
function App() {
  const [characters, setCharacters] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  useEffect(() => {
    dispatch(getUsers());
    !access && navigate("/");
  }, [access]);

  const users = useSelector((state) => state.users);

  const login = (userData) => {
    let user = users.find(
      (user) =>
        user.password === userData.password && user.username === userData.email
    );

    if (user) {
      dispatch(idUser(user.id));
      setAccess(true);
      navigate("/home");
    }
  };

  const Random = () => {
    let randomId = Math.floor(Math.random() * 826);
    onSearch(randomId);
  };

  const logout = () => {
    setAccess(false);
    navigate("/");
  };

  const onSearch = (character) => {
    let search = characters.filter((per) => per.id == character);
    if (search.length === 0) {
      fetch(
        `app-ricky-and-morty-production.up.railway.app/rickandmorty/character/${character}`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("No hay personajes con ese ID");
          }
        });
    } else {
      alert("ya tienes este personaje");
    }
  };

  const onClose = (id) => {
    setCharacters(characters.filter((pers) => pers.id !== id));
    dispatch(deleteFavorite(id));
  };

  const location = useLocation();
  //location = {pathname: url} te dice donde estas parado?

  return (
    <div className={style.App}>
      {access && (
        <>
          <Nav Random={Random} logout={logout} onSearch={onSearch} />
          <Footer />
          {/* <Welcome /> */}
        </>
      )}
      <Routes>
        {access ? (
          <>
            <Route
              exact
              path="/home"
              element={<Cards characters={characters} onClose={onClose} />}
            />
            <Route exact path="/favorites" element={<Favorites />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/detail/:detailId" element={<Detail />} />
            <Route path="*" element={<Error404 />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Form login={login} />} />
            <Route exact path="/register" element={<Register />} />
            <Route path="*" element={<Error404 />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
