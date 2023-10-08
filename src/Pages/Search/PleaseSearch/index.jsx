import React from "react";

//CSS
import styles from "./PleaseSearch.module.css";

//components
import SearchForm from "../../../Components/SearchForm/SearchForm";

const PleaseSearch = () => {
  return (
    <div className={styles.container}>
      <div className={styles.idle}>
        <p>Please Search.</p>
        <SearchForm />
      </div>
    </div>
  );
};

export default PleaseSearch;
