
import Nav from './components/Nav/Nav.jsx'
import Cards from './components/Cards/Cards.jsx'
import About from "./components/About/About.jsx"
import Detail from "./components/Detail/Detail.jsx"
import Error404 from "./components/Error404/Error404.jsx"
import style from "./App.module.css"
import { useState } from 'react'
import { Routes, Route } from "react-router-dom"

function App() {
  const [characters, setCharacters] = useState([])

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        if (data.name) {
          console.log(character);
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }


  const onClose = (id) => {
    setCharacters(characters.filter(pers => pers.id !== id))
  }

  return (
    <div className={style.App} >
      <Nav onSearch={onSearch} />
      <Routes>
        <Route exact path="/home" element={<Cards characters={characters} onClose={onClose} />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/detail/:detailId" element={<Detail />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  )
}

export default App
