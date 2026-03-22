export function Footer() {
  return (
    <footer className="py-12 lg:py-16 px-6 lg:px-8 bg-secondary/20 border-t border-border/30">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        {/* Disclaimer */}
        <p className="text-muted-foreground text-sm leading-relaxed max-w-3xl mx-auto">
          Esta es una guía turística independiente publicada por My Fuerta Ltd. para el 
          disfrute responsable del entorno natural. No tiene afiliación oficial con la 
          Comunidad de Propietarios local ni con la administración pública.
        </p>

        {/* Divider */}
        <div className="w-16 h-px bg-border mx-auto" />

        {/* Copyright */}
        <p className="text-muted-foreground/60 text-xs">
          © 2026 My Fuerta Ltd. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
