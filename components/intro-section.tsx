export function IntroSection() {
  return (
    <section id="intro" className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-center mb-16 lg:mb-20 text-foreground">
          Donde el Atlántico se funde con la roca volcánica
        </h2>

        {/* Two Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="space-y-6">
            <p className="text-lg lg:text-xl leading-relaxed text-secondary-foreground/90">
              En la costa oeste de Fuerteventura, lejos de las rutas turísticas convencionales, 
              se esconde un tesoro natural de extraordinaria belleza. Las <strong className="text-foreground">Piscinas Naturales 
              de Aguas Verdes</strong>, también conocidas como el <em>Charco de los Peñascos</em>, representan 
              uno de los fenómenos geológicos más fascinantes del archipiélago canario.
            </p>
            <p className="text-lg lg:text-xl leading-relaxed text-secondary-foreground/90">
              Formadas durante miles de años por la acción incesante del océano Atlántico sobre 
              la roca basáltica volcánica, estas piscinas naturales ofrecen un espectáculo visual 
              que desafía cualquier descripción. El contraste entre el negro profundo del basalto 
              y las aguas de tonalidades verdes y turquesas crea un paisaje que parece sacado 
              de otro planeta.
            </p>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg lg:text-xl leading-relaxed text-secondary-foreground/90">
              El nombre <em>&quot;Aguas Verdes&quot;</em> no es casual. La particular composición mineral 
              de las rocas volcánicas, combinada con la presencia de algas microscópicas y el 
              reflejo de la luz solar sobre las aguas poco profundas, produce esa característica 
              coloración esmeralda que ha cautivado a viajeros y fotógrafos de todo el mundo.
            </p>
            <p className="text-lg lg:text-xl leading-relaxed text-secondary-foreground/90">
              Este enclave natural forma parte del paisaje protegido de la costa occidental de 
              Fuerteventura, donde la isla muestra su cara más salvaje y auténtica. Aquí, el 
              tiempo parece detenerse, y el visitante puede experimentar la conexión primordial 
              entre el mar, la tierra y el cielo que define la esencia misma de las Islas Canarias.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
