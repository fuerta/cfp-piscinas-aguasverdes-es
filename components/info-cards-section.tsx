import { Waves, Mountain, ShieldAlert } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Translation } from "@/lib/translations"

const icons = [Waves, Mountain, ShieldAlert]

interface InfoCardsSectionProps {
  t: Translation["info"]
}

export function InfoCardsSection({ t }: InfoCardsSectionProps) {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-center mb-6 text-foreground">
          {t.title}
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          {t.subtitle}
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {t.cards.map((card, index) => {
            const Icon = icons[index]
            return (
              <Card
                key={card.title}
                className="bg-card/80 backdrop-blur border-border/50 transition-all duration-300 hover:bg-card hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1"
              >
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-accent" strokeWidth={1.5} />
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
            )
          })}
        </div>
      </div>
    </section>
  )
}
