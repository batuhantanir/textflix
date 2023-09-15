import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  trendingMovies: [],
};

export const GetTrendingMovies = createAsyncThunk("getTrendingMovies", async () => {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/trending/movie/day",
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmYxYzBmODUxNzljYzM2YjQwYmY3MmQyYzZjZTY5MCIsInN1YiI6IjY0ZTMyMTBlN2VmMzgxMDBlNzc4ODJkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QT812H51C3eJeYF1Xjd17YQQP6bMVbJLK0J35U8jF2U",
    },
  };
  const res = await axios.request(options);
  return res.data.results;
});

export const TrendingMoviesSlice = createSlice({
  name: "TrendingMoviesSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetTrendingMovies.fulfilled, (state, { payload }) => {
      state.trendingMovies = payload;
    });
  },
});

export const { trendingMovies } = TrendingMoviesSlice.actions;

export default TrendingMoviesSlice.reducer;
