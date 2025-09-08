import React from 'react'
import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'
import Hero from './Hero'
import CashHomeSellers from './CashHomeSellers'
import ListllyVsTraditional from './ListllyVsTraditional'
import EstimateYourCash from './EstimateYourCash'
import GetYourCashOffer from './GetYourCashOffer'
import WhenGetOffer from './WhenGetOffer'
import WhyChooseListlly from './WhyChooseListlly'
import Beware from './Beware'
import CashBuyerMarketPlace from './CashBuyerMarketPlace'
import FAQ from './FAQ'

function RootPage() {
  return (
    <div>
      <Header />
      <Hero />
      <CashHomeSellers />
      <ListllyVsTraditional />
      <EstimateYourCash />
      <GetYourCashOffer />
      <WhenGetOffer />
      <WhyChooseListlly />
      <Beware />
      <CashBuyerMarketPlace />
      <FAQ />
      <Footer />
    </div>
  )
}

export default RootPage
        