import React from "react";
import Apply from "./Apply";
import Blogs from "./Blogs";
import Events from "./Events";
import Programs from "./Programs";
import Reach from "./Reach";
import Story from "./Story";
import SwiperComp from "./Swiper";

function Home() {
  return (
    <>
      <SwiperComp />
      <Programs />
      <Events />
      <Reach />
      <Story />
      <Blogs />
      <Apply />
    </>
  );
}

export default Home;
