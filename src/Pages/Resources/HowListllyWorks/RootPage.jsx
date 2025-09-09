import React from 'react'
import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'
import Hero from './Hero'
import HowtoList from './HowtoList'
import Manage from './Manage'

function RootPage() {
  return (
    <div>
      <Header />
      <Hero/>
      <HowtoList />
      <Manage />
      <Footer />
    </div>
  )
}

export default RootPage
