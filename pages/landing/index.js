import React from "react";
import HomeOneRoadMap from "../../components/roadmap/HomeOneRoadMap2";
import Hero from "../../components/hero";
import Layout from "../../components/layouts/Layout";
import FaqOne from "../../components/faq/FaqOne";

import ChoseUs from "../../components/choseus/ChoseUS";
import HomeOneMinting from "../../components/minting/HomeOneMinting";
import Divider from "../../components/Divider";
import HomeFiveRoadMap from "../../components/roadmap/HomeFiveRoadMap";
import Newsletter from "../../components/newsletter/Newsletter";
import HomeThreeMinting from "../../components/minting/HomeThreeMinting";

const Landing = () => {
  return (
    <Layout>
      <Hero />
      <HomeFiveRoadMap />
      <HomeThreeMinting />
      <Divider />
      <ChoseUs />
      <HomeOneRoadMap />
      <FaqOne />
      <Newsletter />
    </Layout>
  );
};

export default Landing;
