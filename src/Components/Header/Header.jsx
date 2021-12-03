import React from "react";
import headerStyle from "./Header.module.css";
import logo1 from "../img/male1.png";

function Header() {
  return (
    <nav id='nav' className={headerStyle.nav}>
      <div className={headerStyle.hamburguesa}>
        <input type='checkbox' id='active' className={headerStyle.active} />
        <label for='active' className={headerStyle.menuBtn}>
          <span></span>
        </label>
        <label for='active' className={headerStyle.close}></label>
        <div className={headerStyle.wrapper}>
          <ul>
            <li>
              <a href='#conoceme'>SOBRE MI</a>
            </li>
            <li>
              <a href='#proyectos'>PROYECTOS</a>
            </li>
            <li>
              <a href='#contacto'>CONTACTO</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={headerStyle.pantallaGrande}>
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
      </div>
    </nav>
  );
}

export default Header;
