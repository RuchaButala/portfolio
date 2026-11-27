import { SectionHeading } from '../components/SectionHeading'

export function Skills() {
  return (
    <section id="skills" className="section-anchor mx-auto max-w-6xl px-5">
      <SectionHeading eyebrow="Skills" title="Tools and technologies" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {['Backend', 'Cloud', 'Databases', 'Integrations', 'Testing', 'Tools'].map(
          (category) => (
            <div className="card-placeholder" key={category}>
              <h3 className="font-semibold">{category}</h3>
              <p className="mt-2 text-sm text-secondary">Skills coming soon</p>
            </div>
          ),
        )}
      </div>
    </section>
  )
}
