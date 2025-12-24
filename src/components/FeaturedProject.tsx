import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const techStack = ['TypeScript', 'Modern Frontend', 'Vercel'];

export const FeaturedProject = () => {
  return (
    <section className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <span className="text-primary font-mono text-sm mb-2 block">Featured Project</span>
        <h2 className="section-title text-gradient">Quantum Explained</h2>
        <p className="section-subtitle">Flagship interactive educational platform</p>
      </motion.div>

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
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-mono border border-emerald-500/20">
                    LIVE
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                  Interactive Quantum Computing Education
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  An interactive educational platform explaining quantum computing concepts 
                  through clean UI and structured logic. Built with modern web technologies 
                  and deployed on Vercel for optimal performance.
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {techStack.map((tech, i) => (
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
                    href="https://quantum-explained.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gradient-outline flex items-center gap-2 text-foreground text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Live
                  </a>
                  <a
                    href="https://github.com/manparta/quantum-explained"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 border border-border/50 hover:border-primary/50 hover:bg-primary/5"
                  >
                    <Github className="w-4 h-4" />
                    Source
                  </a>
                </div>
              </div>

              {/* Visual */}
              <div className="relative">
                <div className="aspect-video rounded-lg overflow-hidden border border-border/50 bg-muted/20">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center animate-float">
                        <span className="text-2xl">⚛️</span>
                      </div>
                      <span className="text-muted-foreground font-mono text-sm">quantum-explained</span>
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
    </section>
  );
};
