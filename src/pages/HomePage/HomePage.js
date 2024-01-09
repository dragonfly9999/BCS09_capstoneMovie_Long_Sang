import React from "react";
import Banner from "./Banner";
import LichChieuRap from "./LichChieuRap";
import FilmList from "./FilmList";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <FilmList/>
      <LichChieuRap />
    </div>
  );
};

export default HomePage;
