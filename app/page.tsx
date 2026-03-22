import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { IntroSection } from "@/components/intro-section"
import { InfoCardsSection } from "@/components/info-cards-section"
import { MapSection } from "@/components/map-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <IntroSection />
        <InfoCardsSection />
        <MapSection />
      </main>
      <Footer />
    </>
  )
}
