import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  upComingMovies: [],
};

export const GetUpComingMovies = createAsyncThunk(
  "getUpComingMovies",
  async () => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/upcoming",
      params: { language: "en-US", page: "3" },
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

export const UpComingMoviesSlice = createSlice({
  name: "UpComingMoviesSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetUpComingMovies.fulfilled, (state, { payload }) => {
      state.upComingMovies = payload;
    });
  },
});

export const { upComingMovies } = UpComingMoviesSlice.actions;

export default UpComingMoviesSlice.reducer;
