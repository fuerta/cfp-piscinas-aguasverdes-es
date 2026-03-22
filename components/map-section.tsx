import { MapPin } from "lucide-react"
import type { Translation } from "@/lib/translations"

interface MapSectionProps {
  t: Translation["map"]
}

export function MapSection({ t }: MapSectionProps) {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-6 text-foreground">
            {t.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Map Placeholder */}
        <div className="relative aspect-[16/9] lg:aspect-[21/9] w-full rounded-2xl overflow-hidden bg-secondary/50 border border-border/50">
          {/* Replace this div with your Google Maps iframe */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d671.014186440514!2d-14.094845175622387!3d28.48623429830461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc47bb2a67d30dc5%3A0xa67851ba1938a873!2sAguas%20Verdes!5e0!3m2!1sen!2suk!4v1774200769017!5m2!1sen!2suk" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

        {/* Location Details */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-muted-foreground text-sm uppercase tracking-wider mb-1">
              {t.municipality}
            </p>
            <p className="text-foreground font-medium">{t.municipalityValue}</p>
          </div>
          <div>
            <p className="text-muted-foreground text-sm uppercase tracking-wider mb-1">
              {t.fromAirport}
            </p>
            <p className="text-foreground font-medium">{t.fromAirportValue}</p>
          </div>
          <div>
            <p className="text-muted-foreground text-sm uppercase tracking-wider mb-1">
              {t.roadType}
            </p>
            <p className="text-foreground font-medium">{t.roadTypeValue}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
