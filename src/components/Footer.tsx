import { ArrowUp } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-8 text-sm text-secondary">
        <p>© {new Date().getFullYear()} Rucha Butala</p>
        <a className="icon-button" href="#top" aria-label="Back to top">
          <ArrowUp size={18} />
        </a>
      </div>
    </footer>
  )
}
