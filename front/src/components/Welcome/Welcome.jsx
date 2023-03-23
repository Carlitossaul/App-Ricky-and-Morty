import React, { useState, useEffect } from "react";
import style from "./Welcome.module.css";

const Welcome = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const showTimeout = setTimeout(() => {
      setShowText(true);
    }, 4000); // Mostrar texto después de 10 segundos

    const hideTimeout = setTimeout(() => {
      setShowText(false);
    }, 21000); // Ocultar texto después de 30 segundos

    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, []);

  return (
    <div className={style.welcome}>
      {showText && (
        <div className={style.container}>
          <p className={style.p}>
            Bienvenido a mi App de Rick & Morty! Para comenzar puedes buscar un
            personaje. Como hacerlo? Introduce un numero en el Search o presiona
            el boton ADD RANDOM y te traera un personaje aleatorio. Ahora si que
            te diviertas!!
          </p>
        </div>
      )}
    </div>
  );
};

export default Welcome;
