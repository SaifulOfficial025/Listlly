import React from "react";
import Header from "../../Shared/Header";
import Footer from "../../Shared/Footer";
import Hero from "./Hero";
import GetYourCashOffer from "../Sell/SellHomeCash/GetYourCashOffer";
import Plans from "../Pricing/Plans";
import How from "./How";
import SearchPropertyAddress from "./SearchPropertyAddress";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import FAQ from "./FAQ";

function RootPage() {
  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <FAQ />
      <Footer />
    </div>
  );
}

export default RootPage;
