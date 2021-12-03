import React from "react";
import headerStyle from "./Header.module.css";
import logo1 from "../img/male1.png";

function Header() {
  return (
    <nav id='nav' className={headerStyle.nav}>
      <img src={logo1} alt='Logo-Men' />
      <ul className={headerStyle.ul}>
        <li>
          <a className={headerStyle.link} href='#conoceme'>
            SOBRE MI
          </a>
        </li>
        <li>
          <a className={headerStyle.link} href='#proyectos'>
            PROYECTOS
          </a>
        </li>
        <li>
          <a className={headerStyle.link} href='#contacto'>
            CONTACTO
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
