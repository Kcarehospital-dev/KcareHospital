import { getSiteData } from "../lib/data"
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

export default async function Home() {
  const data = await getSiteData()
  return (
    <main className="min-h-screen">
      <Header hospital={data.hospital} />
      <HeroSlider slides={data.slides} />
      <StatsRibbon stats={data.stats} />
      <AboutUs about={data.about} />
      <AwardsRibbon awards={data.awards} />
      <Departments departments={data.departments} />
      <Services services={data.services} />
      <OurTeam doctors={data.doctors} />
      <Testimonials testimonials={data.testimonials} />
      <Collaborators partners={data.partners} />
      <Footer hospital={data.hospital} departments={data.departments} services={data.services} />
    </main>
  )
}
