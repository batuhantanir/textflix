import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  nowPlayingMovies: [],
  status: "idle",
  error: null,
};

export const GetNowPlayingMovies = createAsyncThunk(
  "GetNowPlayingMovies",
  async () => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/now_playing",
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

export const NowPlayingMoviesSlice = createSlice({
  name: "NowPlayingMoviesSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetNowPlayingMovies.pending, (state) => {
      state.status="loading"
    });
    builder.addCase(GetNowPlayingMovies.fulfilled, (state, { payload }) => {
      state.status="success"
      state.nowPlayingMovies = payload;
    });
    builder.addCase(GetNowPlayingMovies.rejected, (state, action) => {
      state.status="failed"
      state.error = action.error.message;
    });
  },
});

export const { nowPlayingMovies } = NowPlayingMoviesSlice.actions;

export default NowPlayingMoviesSlice.reducer;
