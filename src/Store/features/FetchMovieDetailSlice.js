import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  detail: [],
  status: "idle",
  error: null,
};

export const fetchMovieDetail = createAsyncThunk(
  "fetchMovieDetail",
  async ({ movie_id }) => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${movie_id}`,
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmYxYzBmODUxNzljYzM2YjQwYmY3MmQyYzZjZTY5MCIsInN1YiI6IjY0ZTMyMTBlN2VmMzgxMDBlNzc4ODJkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QT812H51C3eJeYF1Xjd17YQQP6bMVbJLK0J35U8jF2U",
      },
    };
    const res = await axios.request(options);
    return res.data;
  }
);

export const MovieDetailSlice = createSlice({
  name: "MovieDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovieDetail.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchMovieDetail.fulfilled, (state, { payload }) => {
      state.status = "success";
      state.detail = payload;
    });
    builder.addCase(fetchMovieDetail.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export const { detail } = MovieDetailSlice.actions;

export default MovieDetailSlice.reducer;
