import Link from "next/link"
import { ChevronDown } from "lucide-react"
import type { Locale } from "@/lib/translations"

const languages = [
  { code: "es" as Locale, label: "Español", display: "ES" },
  { code: "en" as Locale, label: "English", display: "EN" },
  { code: "de" as Locale, label: "Deutsch", display: "DE" },
  { code: "pl" as Locale, label: "Polski", display: "PL" },
]

interface HeaderProps {
  currentLocale: Locale
  logo: string
}

export function Header({ currentLocale, logo }: HeaderProps) {
  const currentLang = languages.find((l) => l.code === currentLocale) || languages[0]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href={currentLocale === "es" ? "/" : `/${currentLocale}/`}
            className="text-xl lg:text-2xl font-serif tracking-wider text-foreground hover:text-accent transition-colors"
          >
            {logo}
          </Link>

          {/* Language Switcher */}
          <div className="relative group">
            <button
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              aria-haspopup="true"
            >
              <span>{currentLang.display}</span>
              <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
            </button>

            <ul
              role="menu"
              className="absolute right-0 mt-0 w-40 bg-card border border-border rounded-lg shadow-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
            >
              {languages.map((lang) => (
                <li key={lang.code}>
                  <Link
                    href={lang.code === "es" ? "/" : `/${lang.code}/`}
                    className={`block w-full px-4 py-3 text-left text-sm transition-colors hover:bg-secondary ${
                      currentLocale === lang.code
                        ? "text-accent font-medium"
                        : "text-foreground"
                    }`}
                  >
                    <span className="font-medium">{lang.display}</span>
                    <span className="ml-2 text-muted-foreground">{lang.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}
