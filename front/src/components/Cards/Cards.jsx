import Card from "../Card/Card";
import style from "./Cards.module.css";
import React, { useState, useEffect } from "react";

const Cards = ({ characters, onClose }) => {
  return (
    <div className={style.Cards}>
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
  );
};
export default Cards;
