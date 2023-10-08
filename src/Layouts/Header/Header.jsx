import React from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
//CSS
import styles from "./Header.module.css";
//Component
import SearchForm from "../../Components/SearchForm/SearchForm";

const Header = () => {
  const changClass = () => {
    document.getElementById(styles.nav).classList.toggle(styles.active);
  };

  return (
    <header>
      <Link to="/">Textflix</Link>
      <SearchForm />
      <div className={styles.hamburgerContainer} onClick={changClass}>
        <div id={styles.hamburger}></div>
      </div>
      <ul id={styles.nav}>
        <li onClick={changClass}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={changClass}>
          <Link to="/genres">Genres</Link>
        </li>
        <li onClick={changClass}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
