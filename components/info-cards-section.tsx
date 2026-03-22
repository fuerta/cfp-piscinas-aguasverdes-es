import { Waves, Mountain, ShieldAlert } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const infoCards = [
  {
    icon: Waves,
    title: "Las Mareas",
    description: "Visitar las piscinas naturales únicamente es seguro durante la marea baja. Consulta las tablas de mareas antes de planificar tu visita y nunca subestimes el poder del océano Atlántico.",
    warning: "Solo visitar con marea baja",
  },
  {
    icon: Mountain,
    title: "Acceso",
    description: "El camino hacia las piscinas transcurre sobre terreno de roca basáltica volcánica, extremadamente irregular y afilada. Calzado resistente de montaña es absolutamente imprescindible.",
    warning: "Terreno de basalto afilado",
  },
  {
    icon: ShieldAlert,
    title: "Seguridad",
    description: "El oleaje atlántico puede ser extremadamente peligroso e impredecible. Las olas pueden alcanzar las piscinas sin previo aviso. Mantén siempre vigilancia constante del mar.",
    warning: "Oleaje atlántico peligroso",
  },
]

export function InfoCardsSection() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-center mb-6 text-foreground">
          Información Esencial
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          Antes de visitar Aguas Verdes, es fundamental conocer estos aspectos de seguridad
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {infoCards.map((card) => (
            <Card 
              key={card.title}
              className="bg-card/80 backdrop-blur border-border/50 transition-all duration-300 hover:bg-card hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1"
            >
              <CardHeader className="pb-4">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <card.icon className="w-7 h-7 text-accent" strokeWidth={1.5} />
                </div>
                <CardTitle className="font-serif text-2xl text-foreground">
                  {card.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-secondary-foreground/80 leading-relaxed">
                  {card.description}
                </p>
                <div className="pt-2">
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium">
                    {card.warning}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
