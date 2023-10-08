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
import NextPageButtons from "../../Components/nextPageButtons";

//pages
import PleaseSearch from "./PleaseSearch";

const Search = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.searchMovies.status);
  const searchMovies = useSelector((state) => state.searchMovies.searchMovies);

  const [page, setPage] = useState(1);

  const searchValue = useSelector((state) => state.searchMovies.value);

  const handlePage = (e) => {
    if (e.target.id === "prev" && page > 1) {
      window.scrollTo(0, 0);
      setPage(page - 1);
      dispatch(changePage(page));
      dispatch(GetSearchMovies({ value: searchValue, page: page - 1 }));
    }
    if (e.target.id === "next" && !(searchMovies.length < 20)) {
      window.scrollTo(0, 0);
      setPage(page + 1);
      dispatch(changePage(page));
      dispatch(GetSearchMovies({ value: searchValue, page: page + 1 }));
    }
  };
  if (status === "idle") {
    return <PleaseSearch />;
  }

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "failed") {
    console.log("failed");
    return <h1>Something went wrong</h1>;
  }

  return (
    searchMovies.length !== 0 &&
    status == "success" && (
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
        <NextPageButtons
          movies={searchMovies}
          page={page}
          handlePage={handlePage}
        />
      </div>
    )
  );
};

export default Search;
