import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  topRatedMovies: [],
};

export const GetTopRatedMovies = createAsyncThunk(
  "getTopRatedMovies",
  async () => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/top_rated",
      params: { language: "en-US", page: "1" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmYxYzBmODUxNzljYzM2YjQwYmY3MmQyYzZjZTY5MCIsInN1YiI6IjY0ZTMyMTBlN2VmMzgxMDBlNzc4ODJkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QT812H51C3eJeYF1Xjd17YQQP6bMVbJLK0J35U8jF2U",
      },
    };
    const res = await axios.request(options);
    return res.data.results;
  }
);

export const TopRatedMoviesSlice = createSlice({
  name: "TopRatedMoviesSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetTopRatedMovies.fulfilled, (state, { payload }) => {
      state.topRatedMovies = payload;
    });
  },
});

export const { topRatedMovies } = TopRatedMoviesSlice.actions;

export default TopRatedMoviesSlice.reducer;
