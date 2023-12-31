import React from "react";
//CSS
import styles from "./movieCard.module.css";
import { Link } from "react-router-dom";

const movieCard = ({ movie }) => {
  return (
    <Link to={`/detail/${movie.id}`} className={styles.cardContainer}>
      <img
        className={styles.image}
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt={movie.original_title}
      />
      <div className={styles.cardHeader}>
        <div className={styles.title}>{movie.original_title}</div>
        {movie.vote_average > 8 || movie.vote_average == 8 ? (
          <div className={styles.voteAverage} id={styles.green}>
            {movie.vote_average.toFixed(1)}
          </div>
        ) : movie.vote_average >= 4 ? (
          <div className={styles.voteAverage} id={styles.orange}>
            {movie.vote_average.toFixed(1)}
          </div>
        ) : movie.vote_average >= 0 ? (
          <div className={styles.voteAverage} id={styles.red}>
            {movie.vote_average.toFixed(1)}
          </div>
        ) : (
          <div>no vote</div>
        )}
      </div>
      <span className={styles.overview}>
        {movie.overview.slice(0, 200)}...
        <Link to={`/detail/${movie.id}`} className={styles.readMore}>
          Read more
        </Link>
      </span>
    </Link>
  );
};

export default movieCard;
