import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//CSS
import styles from "./Search.module.css";

//Components
import SearchMovies from "../../Components/searchMovies/SearchMovies";
import {
  GetSearchMovies,
  changePage,
} from "../../Store/features/GetSearchMovies";
import Loading from "../Loading/Loading";

const Search = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.searchMovies.status);
  const searchMovies = useSelector((state) => state.searchMovies.searchMovies);

  const [page, setPage] = useState(1);

  const searchValue = useSelector((state) => state.searchMovies.value);

  const handlePage = (e) => {
    if (e.target.id === "prev" && page > 1) {
      setPage(page - 1);
      dispatch(changePage(page));
      dispatch(GetSearchMovies({ value: searchValue, page: page - 1 }));
    }
    if (e.target.id === "next" && !(searchMovies.length < 20)) {
      setPage(page + 1);
      dispatch(changePage(page));
      dispatch(GetSearchMovies({ value: searchValue, page: page + 1 }));
    }
  };

  if (status === "loading") return <Loading />;

  return (
    searchMovies.length !== 0 && (
      <div>
        <div className={styles.container}>
          {searchMovies.map((movie) =>
            movie.poster_path ? (
              <SearchMovies key={movie.id} movie={movie} />
            ) : (
              ""
            )
          )}
        </div>
        {!(searchMovies.length < 20) && page == 1 && (
          <div>There are no more movies</div>
        )}
        {page == 1 ? (
          <button onClick={handlePage} id="prev" disabled>
            Prev page
          </button>
        ) : (
          <button onClick={handlePage} id="prev">
            Prev page
          </button>
        )}

        {!(searchMovies.length < 20) && page == 1 ? (
          <div>{page}</div>
        ) : (
          <div>There are no more movies!</div>
        )}
        {!(searchMovies.length < 20) ? (
          <button onClick={handlePage} id="next">
            Next page
          </button>
        ) : (
          <button onClick={handlePage} id="next" disabled>
            Next page
          </button>
        )}
      </div>
    )
  );
};

export default Search;
