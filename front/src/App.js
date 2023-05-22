import Nav from "./components/Nav/Nav.jsx";
import Cards from "./components/Cards/Cards.jsx";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Favorites from "./components/Favorites/Favorites.jsx";
import Form from "./components/Form/Form.jsx";
import style from "./App.module.css";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { user, loginUser, logout } from "./Redux/actions/index.js";
import Footer from "./components/Footer/Footer.jsx";
import Register from "./components/Register/Register.jsx";
import axios from "axios";
axios.defaults.baseURL =
  "https://app-ricky-and-morty-production.up.railway.app/";
//   http://localhost:3001/

function App() {
  const [characters, setCharacters] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const access = useSelector((state) => state.login);

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const login = (userData) => {
    const { username, password } = userData;
    axios(`/rickandmorty/login?email=${username}&password=${password}`)
      .then(({ data }) => {
        if (data) {
          const { access, id } = data;
          dispatch(user(id));
          access && dispatch(loginUser());
          navigate("/home");
        }
      })
      .catch((error) => toast.error(error.response.data.message));
  };

  const Random = () => {
    let randomId = Math.floor(Math.random() * 826);
    onSearch(randomId);
  };

  const logoutUser = () => {
    dispatch(logout());
    navigate("/");
  };

  const onSearch = (character) => {
    let search = characters.filter((per) => per.id == character);
    if (search.length === 0) {
      axios(`/rickandmorty/character/${character}`).then(({ data }) => {
        if (data) {
          setCharacters((oldChars) => [...oldChars, data]);
        }
      });
    } else {
      toast("You already have that character!", {
        icon: "✋",
      });
    }
  };

  const onClose = (id) => {
    setCharacters(characters.filter((pers) => pers.id !== id));
  };

  return (
    <div className={style.App}>
      {access && (
        <>
          <Nav Random={Random} logoutUser={logoutUser} onSearch={onSearch} />
          <Footer />
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
          </>
        ) : (
          <>
            <Route path="/" element={<Form login={login} />} />
            <Route exact path="/register" element={<Register />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
