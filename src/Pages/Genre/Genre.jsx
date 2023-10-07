import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchGenre } from "../../Store/features/FetchGenreDetails";

import Loading from "../Loading/Loading";

import MovieCard from "../../Components/Movie/movieCard";

//css
import styles from "./Genre.module.css";
import NextPageButtons from "../../Components/nextPageButtons";
import { fetchGenresList } from "../../Store/features/GetGenresSlice";

const Genre = () => {
  const [page, setPage] = useState(1);
  const { id } = useParams();
  const dispatch = useDispatch();

  const handlePage = (e) => {
    if (e.target.id === "prev" && page > 1) {
      setPage(page - 1);
      dispatch(fetchGenre({ id, page: page - 1 }));
    }
    if (e.target.id === "next") {
      setPage(page + 1);
      dispatch(fetchGenre({ id, page: page + 1 }));
    }
  };

  const genres = useSelector((state) => state.genres.genres);
  const genre = useSelector((state) => state.genre.genre);
  const status = useSelector((state) => state.genre.status);
  console.log(status);
  useEffect(() => {
    dispatch(fetchGenre({ id, page: 1 }));
    dispatch(fetchGenresList());
  }, [dispatch, id]);

  if(status === 'loading') return <Loading/>

  return (
    genre &&
    genres && (
      <>
        <div className={styles.title}>
          Genre: {genres.map((genre) => genre.id == Number(id) && genre.name)}
        </div>
        <div className={styles.container}>
          {genre.map((movie) => (
            <div key={movie.id} className={styles.cardContainer}>
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
        <NextPageButtons movies={genre} handlePage={handlePage} page={page} />
      </>
    )
  );
};

export default Genre;
