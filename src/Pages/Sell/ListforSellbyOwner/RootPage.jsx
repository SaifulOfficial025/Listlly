import React from "react";
import Hero from "./Hero";
import Header from "../../../Shared/Header";
import TraditionalVSListly from "./TraditionalVSListly";
import SaveTenThousands from "./SaveTenThousands";
import HowMuchYouCanKeep from "./HowMuchYouCanKeep";
import Plans from "./Plans";
import FAQ from "./FAQ";
import Footer from "../../../Shared/Footer";

function RootPage() {
  return (
    <div>
      <Header />
      <Hero />
      <TraditionalVSListly />
      <SaveTenThousands />
      <HowMuchYouCanKeep />
      <Plans />
      <FAQ />
      <Footer />
    </div>
  );
}

export default RootPage;
