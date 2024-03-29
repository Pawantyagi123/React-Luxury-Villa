import About from "../../subComponents/About.jsx"
import Contact from "../../subComponents/Contact.jsx"
import HeroSection from "../../subComponents/HeroSection.jsx"
import Host from "../../subComponents/Host.jsx"
import OurSpecialities from "../../subComponents/OurSpecialities.jsx"
import Regions from "../../subComponents/Regions.jsx"
import TopVillas from "../../subComponents/TopVillas.jsx"
export default function Home() {
  return (
    <>
    <article className="page">
    <HeroSection/>
    <TopVillas/>
    <Regions/>
    <OurSpecialities/>
    <Host/>
    <About/>
    <Contact/>
    </article>
    </>
  )
}
