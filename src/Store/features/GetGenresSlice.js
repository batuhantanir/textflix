import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  genres: [],
  status: "idle",
  error: null,
};

export const fetchGenresList = createAsyncThunk("GetGenres", async () => {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/genre/movie/list",
    params: { language: "en" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmYxYzBmODUxNzljYzM2YjQwYmY3MmQyYzZjZTY5MCIsInN1YiI6IjY0ZTMyMTBlN2VmMzgxMDBlNzc4ODJkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QT812H51C3eJeYF1Xjd17YQQP6bMVbJLK0J35U8jF2U",
    },
  };
  const res = await axios.request(options);
  return res.data.genres;
});

export const GenresSlice = createSlice({
  name: "Genres",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGenresList.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchGenresList.fulfilled, (state, { payload }) => {
      state.status = "success";
      state.genres = payload;
    });
    builder.addCase(fetchGenresList.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export const { genres } = GenresSlice.actions;

export default GenresSlice.reducer;
