
import Nav from './components/Nav/Nav.jsx'
import Cards from './components/Cards/Cards.jsx'
import style from "./App.module.css"
import { useState } from 'react'

function App() {
  const [characters, setCharacters] = useState([])

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
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

  return <div className={style.App} >
    <Nav onSearch={onSearch} />
    <Cards characters={characters} onClose={onClose} />
  </div>
}

export default App
