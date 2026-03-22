"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const languages = [
  { code: "ES", label: "Español" },
  { code: "EN", label: "English" },
  { code: "DE", label: "Deutsch" },
  { code: "PL", label: "Polski" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedLang, setSelectedLang] = useState(languages[0])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a 
            href="#" 
            className="text-xl lg:text-2xl font-serif tracking-wider text-foreground hover:text-accent transition-colors"
          >
            Aguas Verdes
          </a>

          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              aria-expanded={isOpen}
              aria-haspopup="listbox"
            >
              <span>{selectedLang.code}</span>
              <ChevronDown 
                className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} 
              />
            </button>

            {isOpen && (
              <>
                <div 
                  className="fixed inset-0" 
                  onClick={() => setIsOpen(false)}
                  aria-hidden="true"
                />
                <ul
                  role="listbox"
                  className="absolute right-0 mt-2 w-40 bg-card border border-border rounded-lg shadow-xl overflow-hidden"
                >
                  {languages.map((lang) => (
                    <li key={lang.code}>
                      <button
                        role="option"
                        aria-selected={selectedLang.code === lang.code}
                        onClick={() => {
                          setSelectedLang(lang)
                          setIsOpen(false)
                        }}
                        className={`w-full px-4 py-3 text-left text-sm transition-colors hover:bg-secondary ${
                          selectedLang.code === lang.code 
                            ? "text-accent font-medium" 
                            : "text-foreground"
                        }`}
                      >
                        <span className="font-medium">{lang.code}</span>
                        <span className="ml-2 text-muted-foreground">{lang.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
