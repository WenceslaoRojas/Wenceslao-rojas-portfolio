import React from "react";
import proyectosStyle from "./Proyectos.module.css";
import wikidog from "./img/Landing Page.jpeg";
import TipApp from "./img/TipApp.jpeg";
import WhaterApp from "./img/WhaterApp.png";
import github from "./img/github.svg";
import web from "./img/web.svg";

function Proyectos() {
  return (
    <div id='proyectos' className={proyectosStyle.container}>
      <div className={proyectosStyle.title}>
        <h1>Proyectos</h1>
        <p>
          Estos son algunos de mis principales proyectos, los cuales podrás
          visitar haciendo clic en cada imagen.
        </p>
        <div></div>
      </div>
      <div className={proyectosStyle.parent}>
        <div className={proyectosStyle.div1}>
          <a href='https://wikidog-wenceslaorojas.netlify.app/'>
            <div className={proyectosStyle.imgContainer}>
              <img src={wikidog} alt='proyecto Wikidog' />
            </div>
          </a>
          <div className={proyectosStyle.textContainer}>
            <h3>WikiDogs</h3>
            <p>
              React Js, Redux Js, Node Js, Express Js, PostgreSQL, Sequelize,
              CSS3
            </p>
            <div className={proyectosStyle.imgEnlace}>
              <a
                href='https://wikidog-wenceslaorojas.netlify.app/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src={web} alt='enlace web' />
              </a>
              <a
                href='https://github.com/WenceslaoRojas'
                target='_blank'
                rel='noopener noreferrer'
              >
                {" "}
                <img src={github} alt='enlace web' />
              </a>
            </div>
          </div>
        </div>
        <div className={proyectosStyle.div2}>
          <a href='https://wikidog-wenceslaorojas.netlify.app/'>
            <div className={proyectosStyle.imgContainer}>
              <img src={WhaterApp} alt='proyecto Wikidog' />
            </div>
          </a>
          <div className={proyectosStyle.textContainer}>
            <h3>WeatherApp</h3>
            <p>
              React Js, CSS3, Geolocalización de Google, datos de api
              "MetaWeather"
            </p>
            <div className={proyectosStyle.imgEnlace}>
              <a
                href='https://clima-app-rh-wr.netlify.app/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src={web} alt='enlace web' />
              </a>
              <a
                href='https://github.com/WenceslaoRojas'
                target='_blank'
                rel='noopener noreferrer'
              >
                {" "}
                <img src={github} alt='enlace web' />
              </a>
            </div>
          </div>
        </div>
        <div className={proyectosStyle.div3}>
          <a href='https://wikidog-wenceslaorojas.netlify.app/'>
            <div className={proyectosStyle.imgContainer}>
              <img src={TipApp} alt='proyecto Wikidog' />
            </div>
          </a>
          <div className={proyectosStyle.textContainer}>
            <h3>TipApp</h3>
            <p>React Js, CSS3</p>
            <div className={proyectosStyle.imgEnlace}>
              <a
                href='https://wenceslaorojas-tipapp.netlify.app/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src={web} alt='enlace web' />
              </a>
              <a
                href='https://github.com/WenceslaoRojas'
                target='_blank'
                rel='noopener noreferrer'
              >
                {" "}
                <img src={github} alt='enlace web' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proyectos;
