import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchMovieDetail } from "../../Store/features/FetchMovieDetailSlice";

import Loading from "../Loading/Loading";

//CSS
import styles from "./Detail.module.css";

const Detail = () => {
  const { movie_id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieDetail({ movie_id }));
  }, [dispatch]);

  const movieDetail = useSelector((state) => state.movieDetail).detail;
  const status = useSelector((state) => state.movieDetail).status;
  console.log(movieDetail);
  console.log(movie_id);

  if (status === "loading") return <Loading />;

  return (
    movieDetail &&
    status == "success" && (
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>{movieDetail.title}</h1>
          {movieDetail.vote_average > 8 || movieDetail.vote_average == 8 ? (
            <div className={styles.voteAverage} id={styles.green}>
              {movieDetail.vote_average.toFixed(1)}
            </div>
          ) : movieDetail.vote_average >= 4 ? (
            <div className={styles.voteAverage} id={styles.orange}>
              {movieDetail.vote_average.toFixed(1)}
            </div>
          ) : movieDetail.vote_average >= 0 ? (
            <div className={styles.voteAverage} id={styles.red}>
              {movieDetail.vote_average.toFixed(1)}
            </div>
          ) : (
            <div>no vote</div>
          )}
        </div>
        <div className={styles.genres}>
          Genres:
          {movieDetail.genres.map((genre) => (
            <div key={genre.id} style={{ marginLeft: 15 }}>
              <Link to={`/genre/${genre.id}`}>
                {">"}
                {genre.name}
              </Link>
            </div>
          ))}
        </div>
        <img
          className={styles.img}
          src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`}
          alt=""
        />
        <p className={styles.runtime}>
          Runtime: <span>{movieDetail.runtime} minute</span>
        </p>
        <span style={{ fontWeight: 600 }}>Overview:</span>
        <p className={styles.overview}>{movieDetail.overview}</p>
        <div></div>
      </div>
    )
  );
};

export default Detail;
