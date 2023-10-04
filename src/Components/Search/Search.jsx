import React, { useState } from "react";
//CSS
import styles from "./Search.module.css";
//REACT İCON
import { BiSearch } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
  GetSearchMovies,
  changeValue,
} from "../../Store/features/GetSearchMovies";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") return alert("Please enter a movie name");
    dispatch(changeValue(value));
    dispatch(GetSearchMovies({ value, page:1 }));
    navigate("/search");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchContainer}>
      <input
        onChange={(e) => {
          setValue(e.target.value);
        }}
        type="text"
        id="search-input"
        placeholder="Search.."
      />
      <button type="submit">
        <BiSearch />
      </button>
    </form>
  );
};

export default Search;
