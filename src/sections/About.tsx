import { SectionHeading } from '../components/SectionHeading'

export function About() {
  return (
    <section id="about" className="section-anchor mx-auto max-w-6xl px-5">
      <SectionHeading eyebrow="About" title="Engineering with a backend-first mindset" />
      <div className="rounded-2xl border border-border bg-card p-6 text-secondary sm:p-8">
        <p className="max-w-3xl text-lg leading-8">
          Professional introduction and career summary will be added in the next
          implementation phase.
        </p>
      </div>
    </section>
  )
}
