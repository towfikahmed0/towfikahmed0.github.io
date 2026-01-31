interface Project {
  name: string;
  description: string;
  link?: string;
  github?: string;
  date?: string;
}

const projects: Project[] = [
  {
    name: "Bornopath",
    description:
      "A free, open-source language learning platform that helps users master English vocabulary through interactive exercises, comprehensive word details, and daily learning features.",
    link: "https://bornopath.kinsta.page/",
    github: "https://github.com/towfikahmed0/Bornopath",
    date: "2024",
  },
  {
    name: "WordVo",
    description:
      "A static web application designed as a fun and interactive platform for testing your vocabulary. Built with JavaScript.",
    link: "https://wordvo.kinsta.page/",
    github: "https://github.com/towfikahmed0/wordvo",
    date: "2024",
  },
  {
    name: "E2B Web Dictionary",
    description:
      "A Python-generated English → Bangla dictionary that automatically finds meanings, synonyms, and Bengali translations to make learning new words simple and enjoyable.",
    link: "https://e2bdictionary.kinsta.page/",
    github: "https://github.com/towfikahmed0/e2b_dictionary",
    date: "2024",
  },
  {
    name: "ঘুমের পেছনের বিজ্ঞান",
    description:
      "An article published on Tachyon exploring the science behind sleep—why we need it, how it affects our brain, and the importance of quality rest.",
    link: "https://www.tachyonts.com/2025/08/02/science-behind-sleep/",
    date: "2025",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-12">
      <div className="container max-w-3xl mx-auto px-6">
        <h2 className="section-title">Projects</h2>

        <div className="space-y-6">
          {projects.map((project) => (
            <article key={project.name} className="font-serif">
              <div className="flex flex-wrap items-baseline gap-x-2">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link font-mono text-base font-medium"
                  >
                    {project.name}
                  </a>
                ) : (
                  <span className="font-mono text-base font-medium text-foreground">
                    {project.name}
                  </span>
                )}
                {project.github && (
                  <>
                    <span className="text-muted-foreground">·</span>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link text-sm"
                    >
                      GitHub
                    </a>
                  </>
                )}
                {project.date && (
                  <span className="text-muted-foreground text-sm ml-auto hidden sm:inline">
                    {project.date}
                  </span>
                )}
              </div>
              <p className="text-foreground/90 mt-1 leading-relaxed">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
