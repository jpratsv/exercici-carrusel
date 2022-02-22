// 1.Mostrar una imatge
// 2.Afegir botó per canviar a una altra imatge
// 3.Afegir botó per tornar a l’anterior
// 4.Afegir més imatges darrera (només una es mostra)
// 5.Afegir una barra amb un punt per cada imatge
// 6.Ressaltar el punt de la imatge actual
// 7.Anar a la imatge del punt en fer clic

import "./styles.css";
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

  const visualiza = (foto) => setIndexFotoActual(foto);

  return (
    <>
      <body class="Galeria">
        <div class="general">
          <header>
            <h1>Práctica Galeria de fotografias</h1>
          </header>
          <main class="detalle">
          <div class="">

          </div>
            <img src={"img/" + indexFotoActual + ".jpg"} alt="Imagen 1"></img>
          </main>
        </div>
      </body>

      <footer>
        <p>Final</p>
      </footer>
    </>
  );
}
