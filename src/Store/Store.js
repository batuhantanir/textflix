import { configureStore } from "@reduxjs/toolkit";
//slice
import TrendingMoviesSlice from "./features/GetTrendingMovies";
import TopRatedMoviesSlice from "./features/GetTopRatedMovies";
import UpComingMoviesSlice from "./features/GetUpComingMovies";
import NowPlayingMoviesSlice from "./features/GetNowPlayingMovies";

export const store = configureStore({
  reducer: {
    trendingMovies: TrendingMoviesSlice,
    topRatedMovies: TopRatedMoviesSlice,
    upComingMovies: UpComingMoviesSlice,
    nowPlayingMovies: NowPlayingMoviesSlice,
  },
});