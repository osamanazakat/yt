import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import CompaniesSection from "./components/companiesSection/CompaniesSection";
import FeatureSection from "./components/featureSection/FeatureSection";
import HabitsSection from "./components/habitsSection/HabitsSection";
import BuildSection from "./components/buildSection/BuildSection";
import PriceSection from "./components/priceSection/PriceSection";
import Testimonials from "./components/testimonials/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CompaniesSection />
      <FeatureSection />
      <HabitsSection />
      <BuildSection />
      <PriceSection />
      <Testimonials />
    </>
  );
}

export default App;
