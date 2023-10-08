import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenresList } from "../../Store/features/GetGenresSlice";
import { Link } from "react-router-dom";
//css
import styles from "./Genres.module.css";

const Genres = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.genres.status);
  useEffect(() => {
    if (status === "idle") dispatch(fetchGenresList());
  }, [dispatch]);

  const genres = useSelector((state) => state.genres.genres);

  return (
    <div className={styles.container}>
      <h1>Genres</h1>
      <div className={styles.genresContainer}>
        {genres.map((genre) => (
          <Link
            key={genre.id}
            className={styles.genre}
            to={`/genre/${genre.id}`}
          >
            <div>{genre.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Genres;
