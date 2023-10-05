import Hero from '@/sections/Hero'
import AboutUs from "@/sections/AboutUs";
import StepInfo from "@/sections/StepInfo";
import InfoOne from "@/sections/InfoOne";
import InfoTwo from "@/sections/InfoTwo";
import Service from "@/sections/Service";
import ContactUs from "@/sections/ContactUs";
import Ceo from "@/sections/Ceo";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="">
      <div className=' bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Hero />
      </div>
      <AboutUs />
      <StepInfo />
      <InfoTwo />
      <InfoOne />
      <Service />
      <ContactUs />
      <Ceo />
      <Footer />
    </main>
  )
}
