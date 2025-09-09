import React from 'react'
import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer' 
import Hero from './Hero'
import GetYourCashOffer from '../Sell/SellHomeCash/GetYourCashOffer'
import Plans from '../Pricing/Plans'
import How from "./How"
import FAQ from '../Sell/SellHomeCash/FAQ'
import SearchPropertyAddress from './SearchPropertyAddress'

function RootPage() {
  return (
  <div className="bg-white">
      <Header />
      <Hero />
      <GetYourCashOffer />
      <Plans />
      <How />
      <FAQ />
      <SearchPropertyAddress />
      <Footer />
    </div>
  )
}

export default RootPage
