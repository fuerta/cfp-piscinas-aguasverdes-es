import { MapPin } from "lucide-react"

export function MapSection() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-6 text-foreground">
            Cómo llegar
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Las piscinas naturales se encuentran en la costa oeste de Fuerteventura, 
            accesibles desde el municipio de Betancuria
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
              <p className="text-foreground font-medium mb-1">Google Maps Placeholder</p>
              <p className="text-muted-foreground text-sm">
                Coordenadas: 28.3847° N, 14.1089° W
              </p>
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
            <p className="text-muted-foreground text-sm uppercase tracking-wider mb-1">Municipio</p>
            <p className="text-foreground font-medium">Betancuria</p>
          </div>
          <div>
            <p className="text-muted-foreground text-sm uppercase tracking-wider mb-1">Desde Puerto del Rosario</p>
            <p className="text-foreground font-medium">~45 minutos</p>
          </div>
          <div>
            <p className="text-muted-foreground text-sm uppercase tracking-wider mb-1">Tipo de vía</p>
            <p className="text-foreground font-medium">Pista de tierra</p>
          </div>
        </div>
      </div>
    </section>
  )
}
