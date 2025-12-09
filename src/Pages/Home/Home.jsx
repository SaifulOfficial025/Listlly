import Container from "../../Layout/Container/Container";
import Contact from "./Contact";
import EverythingYouNeed from "./EverythingYouNeed";
import FeaturedProperty from "./FeaturedProperty";
import FewSteps from "./FewSteps";
import Find from "./Find";
import Footer from "../../Shared/Footer";
import Hero from "./Hero";
import Header from "../../Shared/Header";
import NewAddress from "./NewAddress";
import NewInsights from "./NewInsights";

const Home = () => {
  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <EverythingYouNeed />
      <FewSteps />
      <FeaturedProperty />
      <Find />
      <h2 className="text-center text-[20px] md:text-[28px] font-bold text-[#1C1C1C]  mt-10">
        Begin Your Journey to a{" "}
        <span className="text-[#d3481a]">New Address</span>
      </h2>
      <NewAddress />
      <NewInsights />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
