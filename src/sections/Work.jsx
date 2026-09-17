import { Info } from 'lucide-react';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import Button from '../components/Button';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { demoIndexUrl } from '../data/demos';

export default function Work() {
  return (
    <Section id="work" tone="dark">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[24rem] w-[40rem] -translate-x-1/2 rounded-full bg-brand-600/12 blur-[130px]"
        aria-hidden="true"
      />

      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="Our Work"
          title="Websites Built to Make Businesses Stand Out"
          description="Open a live demo and click through the whole page. Restaurants, cafés and salons each get two finished designs, so you can pick the direction that suits your business."
          tone="dark"
          className="flex-1"
        />
        <Reveal delay={0.15}>
          <Button href={demoIndexUrl()} external variant="secondary" withArrow>
            Browse All Demos
          </Button>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={(i % 3) * 0.08}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <p className="mt-10 flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-[0.82rem] leading-relaxed text-slate-400 sm:items-center">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand-300 sm:mt-0" aria-hidden="true" />
          The demos are fully built sample websites, not screenshots &mdash; open one and scroll
          it like a real site. They are concept designs made by WebsiteWallha; client projects
          will be added here as they go live.
        </p>
      </Reveal>
    </Section>
  );
}
