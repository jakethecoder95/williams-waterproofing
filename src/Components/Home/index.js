import React from "react";

import Carousel from "./Carousel";
import Cards from "./Cards";
import Brian from "./Brian";

const Home = props => {
  return (
    <main role="main">
      <Carousel />
      <Cards />
      <Brian />
    </main>
  );
};

export default Home;
