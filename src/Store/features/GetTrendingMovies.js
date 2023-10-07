import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  trendingMovies: [],
  status: "idle",
  error: null,
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
    builder.addCase(GetTrendingMovies.pending, (state) => {
      state.status="loading"
    });
    builder.addCase(GetTrendingMovies.fulfilled, (state, { payload }) => {
      state.status="success"
      state.trendingMovies = payload;
    });
    builder.addCase(GetTrendingMovies.rejected, (state, action) => {
      state.status="failed"
      state.error = action.error.message;
    });
  },
});

export const { trendingMovies } = TrendingMoviesSlice.actions;

export default TrendingMoviesSlice.reducer;
