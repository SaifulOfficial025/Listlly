import Container from "../../Layout/Container/Container"
import Contact from "./Contact"
import EverythingYouNeed from "./EverythingYouNeed"
import FeaturedProperty from "./FeaturedProperty"
import FewSteps from "./FewSteps"
import Find from "./Find"
import Footer from "../../Shared/Footer"
import Hero from "./Hero"
import Header from "../../Shared/Header"
import NewAddress from "./NewAddress"
import NewInsights from "./NewInsights"

const Home = () => {
  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <EverythingYouNeed />
      <FewSteps />
      <FeaturedProperty />
      <Find />
      <NewAddress />
      <NewInsights />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
