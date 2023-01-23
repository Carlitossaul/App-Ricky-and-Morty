import Card from '../Card/Card';
import style from "./Cards.module.css"

const Cards = ({ characters, onClose }) => {

   return <div className={style.Cards}>
      {characters.map(person => <Card
         key={person.name}
         name={person.name}
         species={person.species}
         gender={person.gender}
         status={person.status}
         image={person.image}
         id={person.id}
         detailId={person.id}
         onClose={onClose} />)}
   </div>;
}
export default Cards