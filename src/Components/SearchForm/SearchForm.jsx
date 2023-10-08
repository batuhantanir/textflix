import React, { useState } from "react";
//CSS
import styles from "./SearchForm.module.css";
//REACT İCON
import { BiSearch } from "react-icons/bi";
import { useDispatch } from "react-redux";
import {
  GetSearchMovies,
  changeValue,
} from "../../Store/features/GetSearchMovies";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
      return;
    }
    dispatch(changeValue(value));
    dispatch(GetSearchMovies({ value, page: 1 }));
    navigate("/search");
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchContainer}>
      <input
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
        type="text"
        id="search-input"
        placeholder="Search.."
      />
      <button type="submit">
        <BiSearch />
      </button>
      {error && <p className={styles.error}>Please enter a value</p>}
    </form>
  );
};

export default SearchForm;
