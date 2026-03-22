import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { IntroSection } from "@/components/intro-section"
import { InfoCardsSection } from "@/components/info-cards-section"
import { MapSection } from "@/components/map-section"
import { Footer } from "@/components/footer"
import type { Locale, Translation } from "@/lib/translations"

interface PageTemplateProps {
  locale: Locale
  t: Translation
}

export function PageTemplate({ locale, t }: PageTemplateProps) {
  return (
    <>
      <Header currentLocale={locale} logo={t.header.logo} />
      <main>
        <HeroSection t={t.hero} />
        <IntroSection t={t.intro} />
        <InfoCardsSection t={t.info} />
        <MapSection t={t.map} />
      </main>
      <Footer t={t.footer} />
    </>
  )
}
