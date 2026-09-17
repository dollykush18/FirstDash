import { ArrowUpRight } from 'lucide-react';
import MiniSite from './mockups/MiniSite';

export default function ProjectCard({ project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-400/40 hover:shadow-[0_30px_70px_-30px_rgba(124,77,255,0.65)]">
      {/* Preview */}
      <div className="relative overflow-hidden border-b border-white/10 bg-ink-900 p-3">
        <div className="overflow-hidden rounded-lg ring-1 ring-black/10 transition-transform duration-500 group-hover:scale-[1.03]">
          <div className="aspect-[16/11]">
            <MiniSite project={project} />
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2">
          <span className="rounded-full border border-brand-400/30 bg-brand-500/10 px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-brand-200">
            {project.type}
          </span>
          <span className="text-[0.72rem] font-medium text-slate-400">{project.category}</span>
        </div>

        <h3 className="mt-3 text-[1.05rem] font-bold text-white">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-300/80">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[0.68rem] font-medium text-slate-300"
            >
              {tech}
            </li>
          ))}
        </ul>

        <a
          href={project.link}
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-gradient px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_14px_34px_-14px_rgba(124,77,255,0.95)]"
          aria-label={`View the ${project.title} concept`}
        >
          View Project
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </a>
      </div>
    </article>
  );
}
