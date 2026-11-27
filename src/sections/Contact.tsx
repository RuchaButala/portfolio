import { SectionHeading } from '../components/SectionHeading'

export function Contact() {
  return (
    <section id="contact" className="section-anchor mx-auto max-w-6xl px-5">
      <SectionHeading eyebrow="Contact" title="Let’s connect" />
      <div className="card-placeholder">
        <p className="text-secondary">
          Email and profile links will be configured centrally after confirmation.
        </p>
      </div>
    </section>
  )
}
