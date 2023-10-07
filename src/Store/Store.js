import { configureStore } from "@reduxjs/toolkit";
//slice
import TrendingMoviesSlice from "./features/GetTrendingMovies";
import TopRatedMoviesSlice from "./features/GetTopRatedMovies";
import UpComingMoviesSlice from "./features/GetUpComingMovies";
import NowPlayingMoviesSlice from "./features/GetNowPlayingMovies";
import SearchMoviesSlice from "./features/GetSearchMovies";
import GenresSlice from "./features/GetGenresSlice";
import MovieDetailSlice from "./features/FetchMovieDetailSlice";
import FetchGenreDetailsSlice from "./features/FetchGenreDetails";

export const store = configureStore({
  reducer: {
    trendingMovies: TrendingMoviesSlice,
    topRatedMovies: TopRatedMoviesSlice,
    upComingMovies: UpComingMoviesSlice,
    nowPlayingMovies: NowPlayingMoviesSlice,
    searchMovies: SearchMoviesSlice,
    genres: GenresSlice,
    movieDetail: MovieDetailSlice,
    genre:FetchGenreDetailsSlice,
  }
});
