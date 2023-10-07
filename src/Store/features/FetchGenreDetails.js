import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  genre: [],
  status: "idle",
  error: null,
};

export const fetchGenre = createAsyncThunk("fetchGenre", async ({ id, page }) => {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/movie",
    params: {
      include_adult: "false",
      include_video: "false",
      language: "en-US",
      page: page,
      sort_by: "popularity.desc",
      with_genres: id,
    },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmYxYzBmODUxNzljYzM2YjQwYmY3MmQyYzZjZTY5MCIsInN1YiI6IjY0ZTMyMTBlN2VmMzgxMDBlNzc4ODJkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QT812H51C3eJeYF1Xjd17YQQP6bMVbJLK0J35U8jF2U",
    },
  };
  const res = await axios.request(options);
  return res.data.results;
});

export const FetchGenreDetailsSlice = createSlice({
  name: "FetchGenreDetailsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGenre.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchGenre.fulfilled, (state, { payload }) => {
      state.status = "success";
      state.genre = payload;
    });
    builder.addCase(fetchGenre.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export const { nowPlayingMovies } = FetchGenreDetailsSlice.actions;

export default FetchGenreDetailsSlice.reducer;
