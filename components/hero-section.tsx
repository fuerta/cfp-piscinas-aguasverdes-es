import Image from "next/image"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero-aguas-verdes.jpg"
        alt="Piscinas naturales de Aguas Verdes en Fuerteventura"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/90" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tight text-foreground mb-6 text-balance">
          Aguas Verdes: Charco de los Peñascos
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light italic max-w-2xl mx-auto">
          El secreto mejor guardado de Fuerteventura
        </p>
      </div>

      {/* Scroll Indicator */}
      <a 
        href="#intro"
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
        aria-label="Scroll to explore"
      >
        <span className="text-xs tracking-[0.3em] uppercase">Scroll to explore</span>
        <ChevronDown className="w-6 h-6 animate-bounce-subtle group-hover:text-accent" />
      </a>
    </section>
  )
}
