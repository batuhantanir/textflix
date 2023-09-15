import React from "react";
//CSS
import styles from "./sortMovies.module.css";
//COMPONENTS
import MovieCard from "../Movie/movieCard";
//pages
import Loading from "../../Pages/Loading/Loading";

const sortMovies = ({ movies, title }) => {
  return (
    <div className={styles.moviesContainer}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.movieScrollContainer}>
        <div className={styles.cardBox}>
          {movies != [] || movies !== undefined ? (
            movies.map((movie) => (
              <MovieCard
                movie={movie}
                key={movie.id}
              />
            ))
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
};

export default sortMovies;
