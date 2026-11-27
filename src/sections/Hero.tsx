export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl items-center px-5 py-20"
    >
      <div className="max-w-3xl">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-sm text-secondary">
          <span className="h-2 w-2 rounded-full bg-accent" />
          India · Open to remote roles
        </p>
        <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          Building reliable software for real-world problems.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-secondary sm:text-xl">
          Senior Backend Engineer with nearly 7 years of experience.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a className="button button-primary" href="#projects">
            View My Work
          </a>
          <a className="button button-secondary" href="#contact">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}
