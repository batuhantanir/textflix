import React from "react";
import { Link } from "react-router-dom";
//CSS
import styles from "./Header.module.css";
//Component
import Search from "../../Components/Search/Search";

const Header = () => {
  return (
    <header>
      <Link to="/">Textflix</Link>
      <Search />
      <ul className={styles.nav}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
