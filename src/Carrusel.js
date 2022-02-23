// 1.Mostrar una imatge
// 2.Afegir botó per canviar a una altra imatge
// 3.Afegir botó per tornar a l’anterior
// 4.Afegir més imatges darrera (només una es mostra)
// 5.Afegir una barra amb un punt per cada imatge
// 6.Ressaltar el punt de la imatge actual
// 7.Anar a la imatge del punt en fer clic

import "./style.css";
import { useState } from "react";

export default function Carrusel() {
  let galeria = [
    { src: "img/0.jpg", alt: "Prueba0" },
    { src: "img/1.jpg", alt: "Prueba1" },
    { src: "img/2.jpg", alt: "Prueba2" },
    { src: "img/3.jpg", alt: "Prueba3" },
    { src: "img/4.jpg", alt: "Prueba4" },
    { src: "img/5.jpg", alt: "Prueba5" },
  ];

  const [indexFotoActual, setIndexFotoActual] = useState(1);

  function visualiza(foto) {
    setIndexFotoActual(foto);
  }

  return (
    <>
   
        <div id="header">
          <h1> Actividad CARRUSEL DE FOTOGRAFÍAS </h1>
          <p> Práctica de</p> REACT
        </div>
       
        <div id="contenedor">
          <div id="col1">
            <img
              onClick={() => {indexFotoActual > 0 ? visualiza(indexFotoActual-1) : visualiza(indexFotoActual)}}
              src="img/izquierda.png"
              alt="Imagen 1"
            ></img>
          </div>
          
          <div id="col2">
            <img
              src={"img/"+ indexFotoActual + ".jpg"}
              alt="Imagen 2"
            ></img>
          </div>

          <div id="col3">
            <img
                onClick={() => {indexFotoActual < galeria.length ? visualiza(indexFotoActual-1) : visualiza(indexFotoActual)}}
                src="img/derecha.png"
                alt="Imagen 3">
            </img>
          </div>
        </div>

    </>
  );
}
