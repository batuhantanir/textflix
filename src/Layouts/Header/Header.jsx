import React from "react";
import { Link } from "react-router-dom";
//CSS
import styles from "./Header.module.css";
//Component
import SearchForm from "../../Components/SearchForm/SearchForm";

const Header = () => {
  return (
    <header>
      <Link to="/">Textflix</Link>
      <SearchForm />
      <ul className={styles.nav}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/genres">Genres</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
