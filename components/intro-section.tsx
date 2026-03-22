import type { Translation } from "@/lib/translations"

interface IntroSectionProps {
  t: Translation["intro"]
}

export function IntroSection({ t }: IntroSectionProps) {
  return (
    <section id="intro" className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-center mb-16 lg:mb-20 text-foreground">
          {t.title}
        </h2>

        {/* Two Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="space-y-6">
            <p
              className="text-lg lg:text-xl leading-relaxed text-secondary-foreground/90"
              dangerouslySetInnerHTML={{ __html: t.p1 }}
            />
            <p
              className="text-lg lg:text-xl leading-relaxed text-secondary-foreground/90"
              dangerouslySetInnerHTML={{ __html: t.p2 }}
            />
          </div>

          <div className="space-y-6">
            <p
              className="text-lg lg:text-xl leading-relaxed text-secondary-foreground/90"
              dangerouslySetInnerHTML={{ __html: t.p3 }}
            />
            <p
              className="text-lg lg:text-xl leading-relaxed text-secondary-foreground/90"
              dangerouslySetInnerHTML={{ __html: t.p4 }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
