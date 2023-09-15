//CSS
import "./App.css";
//Router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//Layouts
import Header from "./Layouts/Header/Header";
import Footer from "./Layouts/Footer/Footer";
//Redux
import { useDispatch } from "react-redux";
import { useEffect } from "react";
//Slice
import { GetTrendingMovies } from "./Store/features/GetTrendingMovies";
import { GetTopRatedMovies } from "./Store/features/GetTopRatedMovies";
import { GetUpComingMovies } from "./Store/features/GetUpComingMovies";
import { GetNowPlayingMovies } from "./Store/features/GetNowPlayingMovies";

//Pages
import Home from "./Pages/Home/Home";
import Search from "./Pages/Search/Search";
import Contact from "./Pages/Contact/Contact";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetTrendingMovies());
    dispatch(GetTopRatedMovies());
    dispatch(GetUpComingMovies());
    dispatch(GetNowPlayingMovies());
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
