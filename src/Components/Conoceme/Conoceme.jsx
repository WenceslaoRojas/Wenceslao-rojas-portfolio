import React from "react";
import conocemeStyle from "./Conoceme.module.css";
import Tecnologias from "./TecnlogogiasHerramientas/Tecnologias";

function Conoceme() {
  return (
    <section id='conoceme' className={conocemeStyle.section}>
      <div className={conocemeStyle.container}>
        <Tecnologias />
        <article className={conocemeStyle.historia}>
          <h1>Mi historia</h1>
          <p>
            Mi nombre es Wenceslao Rojas, tengo 22 años y vivo en Tucumán,
            provincia de Argentina.
            <br />
            <br /> De chico me gusto siempre desarrollar juegos de lógica, me
            interesaba las ciencias y el espacio como una materia de estudio,
            semana a semana esperaba las revistas informativas de la gaceta de
            mi ciudad. Esas ansias de aprender y obtener nuevos conocimientos me
            llevaron a en mi adultez joven estudiar marketing, administración de
            empresas, y otras áreas relacionadas, de manera informal.
            <br /> <br />
            En esta etapa fue que conocí el mundo de la programación, donde
            comencé probando un pequeño de juego de programación del MIT &
            Google diseñado para niños.
            <br />
            <br />
            Hoy, 2 años después de esa hermosa experiencia me encuentro
            terminando el bootcamp de +800hs de Henry en el cual pude aprender a
            fondo lógica de programación y desarrollo web de alto nivel.
            <br />
            <br />A pesar de todo el tiempo transcurrido desde mi niñez esas
            ansias por el conocimiento no han desaparecido y hoy me encuentro en
            búsqueda de mi primer acercamiento al mundo laboral IT para seguir
            descubriendo y asombrándome con este nuevo mundo.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Conoceme;
