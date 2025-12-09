import React from "react";
import Listing from "./Listing";

import Header from "../../../Shared/Header";
import RecentSells from "./RecentSells";
import Plans from "./Plans";
import Map from "./Map";
import Steps from "./Steps";
import SaveCalculator from "./SaveCalculator";
import CommissionSavings from "./CommissionSavings";
import LosAngeles from "./LosAngeles";
import TimetoSell from "./TimetoSell";
import HiddenFees from "./HiddenFees";
import FAQ from "./FAQ";
import Footer from "../../../Shared/Footer";
import BuyingBuying from "./BuyingBuying";
import Thousandsofhomeowner from "./Thousandsofhomeowner";

function RootPage() {
  return (
    <div>
      <Header />
      <div className="mt-10">
        <Listing />
      </div>

      <div className="-mt-10">
        <RecentSells />
      </div>
      <div className="">
        <Plans />
      </div>
      <div className="">
        <Map />
      </div>
      <div className="">
        <Steps />
      </div>
      <div className="">
        <SaveCalculator />
      </div>
      <div className="">
        <CommissionSavings />
      </div>
      <div>
        <Thousandsofhomeowner />
      </div>
      <div className="">
        <LosAngeles />
      </div>
      <div className="">
        <TimetoSell />
      </div>
      {/* <div className="">
        <BuyingBuying />
      </div> */}
      <div className="">
        <HiddenFees />
      </div>
      <div className="">
        <FAQ />
      </div>

      <Footer />
    </div>
  );
}

export default RootPage;
