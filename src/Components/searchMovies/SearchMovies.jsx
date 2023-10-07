import React from "react";
//CSS
import styles from "./searchMovies.module.css";
import { Link } from "react-router-dom";

const SearchMovies = ({ movie }) => {
  return (
    <div className={styles.container} key={movie.id}>
      <img
        className={styles.img}
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt=""
      />
      <h1 className={styles.title}>{movie.title}</h1>
      {movie.overview !== "" ? (
        <p className={styles.overview}>
          {movie.overview.slice(0, 200)}<Link to={`/detail/${movie.id}`} className={styles.readMore}>...Read more</Link>
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default SearchMovies;
