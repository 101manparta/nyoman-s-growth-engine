import { motion } from 'framer-motion';
import { ExternalLink, Github, Coffee, Atom, HeartPulse } from 'lucide-react';

const projects = [
  {
    id: 1,
    tag: "Featured Project",
    title: "Quantum Explained",
    subtitle: "Flagship interactive educational platform",
    description: "An interactive educational platform explaining quantum computing concepts through clean UI and structured logic. Built with modern web technologies.",
    tech: ['TypeScript', 'Modern Frontend', 'Vercel'],
    liveLink: "https://quantum-explained.vercel.app",
    githubLink: "https://github.com/manparta/quantum-explained",
    icon: <Atom className="w-8 h-8 text-blue-400" />,
    urlDisplay: "quantum-explained.vercel.app",
    headline: "Interactive Computing Education"
  },
  {
    id: 2,
    tag: "Recent Project",
    title: "Kaman Coffee",
    subtitle: "Modern & Elegant Coffee Shop Landing Page",
    description: "A premium digital presence for Kaman Coffee, featuring smooth scrolling, an interactive menu, and a responsive design tailored for coffee enthusiasts.",
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Netlify'],
    liveLink: "https://kaman-coffee.netlify.app/",
    githubLink: "https://github.com/manparta/kaman-coffee",
    icon: <Coffee className="w-8 h-8 text-amber-600" />,
    urlDisplay: "kaman-coffee.netlify.app",
    headline: "Elevating Coffee Experience"
  },
  {
    id: 3,
    tag: "Healthcare Platform",
    title: "Mediflow Solutions",
    subtitle: "Smart digital healthcare workflow system",
    description: "A healthcare platform designed to streamline medical workflows, patient management, and service efficiency through a clean, modern, and responsive interface.",
    tech: ['React', 'Tailwind CSS', 'Healthcare UI', 'Netlify'],
    liveLink: "https://mediflow-solutions.netlify.app/",
    githubLink: "https://github.com/manparta/mediflow-solutions",
    icon: <HeartPulse className="w-8 h-8 text-emerald-400" />,
    urlDisplay: "mediflow-solutions.netlify.app",
    headline: "Digital Healthcare Workflow System"
  }
];

export const FeaturedProject = () => {
  return (
    <section className="section-container space-y-20">
      {projects.map((project, index) => (
        <div key={project.id}>
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="text-primary font-mono text-sm mb-2 block">{project.tag}</span>
            <h2 className="section-title text-gradient">{project.title}</h2>
            <p className="section-subtitle">{project.subtitle}</p>
          </motion.div>

          {/* Card Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="border-gradient p-1">
              <div className="glass-card rounded-lg p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">

                  {/* Content */}
                  <div className={index % 2 !== 0 ? "md:order-2" : ""}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-mono border border-emerald-500/20">
                        LIVE
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                      {project.headline}
                    </h3>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((tech, i) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                          whileHover={{ scale: 1.05, backgroundColor: 'hsl(var(--primary) / 0.2)' }}
                          className="tech-badge cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-gradient-outline flex items-center gap-2 text-foreground text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Live
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 border border-border/50 hover:border-primary/50 hover:bg-primary/5"
                      >
                        <Github className="w-4 h-4" />
                        Source
                      </a>
                    </div>
                  </div>

                  {/* Visual Preview */}
                  <div className={`relative ${index % 2 !== 0 ? "md:order-1" : ""}`}>
                    <div className="aspect-video rounded-lg overflow-hidden border border-border/50 bg-muted/20">
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center animate-float">
                            {project.icon}
                          </div>
                          <span className="text-muted-foreground font-mono text-sm">{project.urlDisplay}</span>
                        </div>
                      </div>
                    </div>

                    {/* Glow effect */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                  </div>

                </div>
              </div>
            </div>
          </motion.div>
        </div>
      ))}
    </section>
  );
};
