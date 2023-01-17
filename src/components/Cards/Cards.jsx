import Card from '../Card/Card';
import style from "./Cards.module.css"

export default function Cards(props) {
   const { characters, } = props;
   return <div className={style.Cards}>
      {characters.map(person => <Card key={person.name} name={person.name} species={person.species} gender={person.gender} image={person.image} onClose={() => window.alert('Emulamos que se cierra la card')} />)}
   </div>;
}
