import HeroSlider from "../components/hero-slider"
import StatsRibbon from "../components/stats-ribbon"
import AboutUs from "../components/about-us"
import AwardsRibbon from "../components/awards-ribbon"
import Departments from "../components/departments"
import Services from "../components/services"
import OurTeam from "../components/our-team"
import Testimonials from "../components/testimonials"
import Collaborators from "../components/collaborators"
import Footer from "../components/footer"
import Header from "../components/header"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSlider />
      <StatsRibbon />
      <AboutUs />
      <AwardsRibbon />
      <Departments />
      <Services />
      <OurTeam />
      <Testimonials />
      <Collaborators />
      <Footer />
    </main>
  )
}
