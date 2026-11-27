import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navigation = [
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Experience', 'experience'],
  ['Projects', 'projects'],
  ['Contact', 'contact'],
] as const

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5"
        aria-label="Primary navigation"
      >
        <a className="text-sm font-semibold tracking-[0.24em]" href="#top">
          RB
        </a>

        <button
          className="icon-button md:hidden"
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <div className="hidden items-center gap-7 md:flex">
          {navigation.map(([label, id]) => (
            <a className="nav-link" href={`#${id}`} key={id}>
              {label}
            </a>
          ))}
        </div>
      </nav>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-border bg-background px-5 py-4 md:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col">
            {navigation.map(([label, id]) => (
              <a
                className="nav-link py-3"
                href={`#${id}`}
                key={id}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
