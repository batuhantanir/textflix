import React from "react";
//CSS
import styles from "./Search.module.css";
//REACT İCON
import { BiSearch } from "react-icons/bi";

const Search = () => {
    
    let value = "";
    const handleSubmit = (e) => {
    e.preventDefault()
    value = e.target.children[0].value;
    console.log(value)
  };

  return (
    <form action="/search" onSubmit={handleSubmit} className={styles.searchContainer}>
      <input
        type="text"
        id="search-input"
        placeholder="Search.."
      />
      <button>
        <BiSearch />
      </button>
    </form>
  );
};

export default Search;
