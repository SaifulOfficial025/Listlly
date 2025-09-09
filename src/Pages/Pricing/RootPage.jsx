import React from 'react'
import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer' 

import Hero from './Hero'
import Plans from './Plans'
import Map from "../Sell/FlatFeeMLS/Map"
import Steps from "../Sell/FlatFeeMLS/Steps"
import SaveCalculator from "../Sell/FlatFeeMLS/SaveCalculator"
import CommissionSavings from "../Sell/FlatFeeMLS/CommissionSavings"
import LosAngeles from "../Sell/FlatFeeMLS/LosAngeles"
import TimetoSell from "../Sell/FlatFeeMLS/TimetoSell"
import HiddenFees from "../Sell/FlatFeeMLS/HiddenFees"
import FAQ from "../Sell/FlatFeeMLS/FAQ"



function RootPage() {
  return (
    <div>
      <Header />
      <Hero/>
      <Plans />
      <Map />
      <Steps />
      <SaveCalculator />
      <CommissionSavings />
        <LosAngeles />
        <TimetoSell />
        <HiddenFees />
        <FAQ />
      <Footer />
    </div>
  )
}

export default RootPage
