import React from "react";
import introStyle from "./Intro.module.css";
import startStyle from "./Starts.module.css";
import Typed from "react-typing-effect";

function Intro() {
  return (
    <div id='home' className={introStyle.intro}>
      <div className={startStyle.start1} id='stars' />
      <div className={startStyle.start2} id='stars2' />
      <div className={startStyle.start3} id='stars3' />

      <div className={introStyle.container}>
        <h1 className={introStyle.presentacion}>Hola, soy Wenceslao</h1>
        <span className={introStyle.typed}>
          <strong className='text-slider'>
            <Typed
              text={[
                "Front End Developer",
                "Back End Developer",
                "Software Engineer",
              ]}
              typespeed={80}
              eraseDelay={1100}
              eraseSpeed={50}
              typingDelay={30}
            />
          </strong>
        </span>

        <a href='#conoceme' className={introStyle.a}>
          <button className={introStyle.btn}>
            ¿Quién soy?
            <div className={introStyle.icon}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
              >
                <path d='m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z'></path>
              </svg>
            </div>
          </button>
        </a>
      </div>
    </div>
  );
}

export default Intro;
