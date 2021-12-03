import React from "react";
import Header from "./Components/Header/Header";
import Intro from "./Components/Intro/Intro.jsx";
import Conoceme from "./Components/Conoceme/Conoceme.jsx";
import "./App.css";
import Proyectos from "./Components/Proyectos/Proyectos";
import Contacto from "./Components/Contacto/Contacto";

function App() {
  return (
    <div className='App'>
      <Header />
      <Intro />
      <Conoceme />
      <Proyectos />
      <Contacto />
    </div>
  );
}

export default App;
