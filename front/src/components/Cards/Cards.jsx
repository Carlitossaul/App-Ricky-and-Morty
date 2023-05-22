import Card from "../Card/Card";
import styles from "./Cards.module.css";
import React from "react";

const Cards = ({ characters, onClose }) => {
  return characters.length > 0 ? (
    <div className={styles.Cards}>
      {characters.map((person, i) => (
        <Card
          key={person.name}
          name={person.name}
          species={person.species}
          gender={person.gender}
          status={person.status}
          image={person.image}
          id={person.id}
          detailId={person.id}
          onClose={onClose}
          //location={person.location.name}
        />
      ))}
    </div>
  ) : (
    <div className={styles.container}>
      <div className={styles.welcomeContainer}>
        <p className={styles.contentWelcome}>
          Welcome to the Rick & Morty App! You can start by searching for a
          character in the search engine or press the ADD RANDOM button and it
          will bring you a random character, have fun!!!
        </p>
      </div>
    </div>
  );
};
export default Cards;
