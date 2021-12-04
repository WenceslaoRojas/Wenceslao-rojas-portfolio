import React from "react";
import tecStyle from "./Tecnologias.module.css";
import jsfile from "./imgTecnolgias/jsfile.svg";
import nodejs from "./imgTecnolgias/nodejs.svg";
import express from "./imgTecnolgias/express.svg";
import react from "./imgTecnolgias/react.svg";
import redux from "./imgTecnolgias/redux.svg";
import css3 from "./imgTecnolgias/css3.svg";
import sequelize from "./imgTecnolgias/sequelize.svg";
import postgresql from "./imgTecnolgias/postgresql.svg";
import postman from "./imgTecnolgias/postman.svg";
import html from "./imgTecnolgias/html.svg";
import sass from "./imgTecnolgias/sass.svg";
import typescript from "./imgTecnolgias/typescript.svg";

function Tecnologias() {
  return (
    <article className={tecStyle.skills}>
      <h1>Tecnologias</h1>
      <div className={tecStyle.parent}>
        <div className={tecStyle.div1}>
          <img src={jsfile} alt='JavaScript' />
          <p>JavaScript</p>
        </div>
        <div className={tecStyle.div2}>
          <img src={nodejs} alt='Node Js' />
          <p>Node Js</p>
        </div>
        <div className={tecStyle.div3}>
          <img src={express} alt='express js' />
          <p>Express Js</p>
        </div>
        <div className={tecStyle.div4}>
          <img src={react} alt='react js' />
          <p>React Js</p>
        </div>
        <div className={tecStyle.div5}>
          <img src={redux} alt='redux' />
          <p>Redux Js</p>
        </div>
        <div className={tecStyle.div6}>
          <img src={css3} alt='css3' />
          <p>Css3</p>
        </div>
        <div className={tecStyle.div7}>
          <img src={sequelize} alt='sequelize' />
          <p>Sequelize Js</p>
        </div>
        <div className={tecStyle.div8}>
          <img src={postman} alt='postman' />
          <p>Postman</p>
        </div>
        <div className={tecStyle.div9}>
          <img src={postgresql} alt='postgresql' />
          <p>PostgreSQL</p>
        </div>
        <div className={tecStyle.div10}>
          <img src={html} alt='html5' />
          <p>HTML5</p>
        </div>
        <div className={tecStyle.div11}>
          <img src={sass} alt='sass' />
          <p>Sass</p>
        </div>
        <div className={tecStyle.div12}>
          <img src={typescript} alt='TypeScript' />
          <p>TypeScript</p>
        </div>
      </div>
    </article>
  );
}

export default Tecnologias;
