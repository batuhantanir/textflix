import React from "react";
//CSS
import styles from "./Home.module.css";
//redux
import { useSelector } from "react-redux";
//COMPONENTS
import SortMovies from "../../Components/Movies/sortMovies";
import Loading from "../Loading/Loading";

const Home = () => {
  const trendingMovies = useSelector(
    (state) => state.trendingMovies
  ).trendingMovies;
  const topRatedMovies = useSelector(
    (state) => state.topRatedMovies
  ).topRatedMovies;
  const upComingMovies = useSelector(
    (state) => state.upComingMovies
  ).upComingMovies;
  const nowPlayingMovies = useSelector(
    (state) => state.nowPlayingMovies
  ).nowPlayingMovies;

  return (
    <div className={styles.homeContainer}>
      <SortMovies movies={trendingMovies} title={"Trend"} />
      <SortMovies movies={nowPlayingMovies} title={"Now Playing"} />
      <SortMovies movies={topRatedMovies} title={"Top Rated"} />
      <SortMovies movies={upComingMovies} title={"Upcoming"} />
    </div>
  );
};

export default Home;
