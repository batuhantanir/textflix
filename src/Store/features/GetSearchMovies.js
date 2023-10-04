import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  value: "",
  searchMovies: [],
  status: "idle",
  error: null,
};

export const GetSearchMovies = createAsyncThunk(
  "getSearchMovies",
  async ({ value, page }) => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/search/movie",
      params: {
        query: `${value}`,
        include_adult: "false",
        language: "en-US",
        page: page,
      },
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

export const SearchMoviesSlice = createSlice({
  name: "SearchMoviesSlice",
  initialState,
  reducers: {
    searchMovies: (state, action) => {
      state.searchMovies = action.payload;
    },
    changePage: (state) => {
      state.page++;
    },
    changeValue: (state, action) => {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(GetSearchMovies.pending, (state, { payload }) => {
      state.status = "loading";
    });
    builder.addCase(GetSearchMovies.fulfilled, (state, { payload }) => {
      state.status = "success";
      state.searchMovies = payload;
    });
    builder.addCase(GetSearchMovies.rejected, (state, action) => {
      state.status = "fialed";
      state.error = action.error.message;
    });
  },
});

export const { searchMovies, changePage, changeValue } =
  SearchMoviesSlice.actions;

export default SearchMoviesSlice.reducer;
