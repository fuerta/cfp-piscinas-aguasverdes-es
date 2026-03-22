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
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
              <MapPin className="w-8 h-8 text-accent" strokeWidth={1.5} />
            </div>
            <div className="text-center px-6">
              <p className="text-foreground font-medium mb-1">{t.placeholder}</p>
              <p className="text-muted-foreground text-sm">{t.coordinates}</p>
            </div>
          </div>

          {/*
            To add Google Maps, replace the placeholder div above with:

            <iframe
              src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          */}
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
