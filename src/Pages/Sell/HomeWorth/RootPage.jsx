import React from "react";
import Header from "../../../Shared/Header";
import Footer from "../../../Shared/Footer";
import Hero from "./Hero";
import HomeWorth from "./HomeWorth";
import FAQ from "./FAQ";

function RootPage() {
  return (
    <div>
      <Header />
      <Hero />
      {/* <HomeWorth /> */}
      <FAQ />
      <Footer />
    </div>
  );
}

export default RootPage;
