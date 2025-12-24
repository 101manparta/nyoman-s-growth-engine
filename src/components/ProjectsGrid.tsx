import { motion } from 'framer-motion';
import { Github, ExternalLink, Lock, Globe } from 'lucide-react';

interface Project {
  name: string;
  description: string;
  techStack: string[];
  isPublic: boolean;
  category: 'security' | 'backend' | 'web' | 'learning';
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  // Security / DevOps / Infra
  {
    name: 'cyberattack-stream-etl',
    description: 'Real-time ETL pipeline using WebSocket, Airflow, Docker, MySQL for threat data processing',
    techStack: ['Python', 'Airflow', 'Docker', 'MySQL', 'WebSocket'],
    isPublic: true,
    category: 'security',
  },
  {
    name: 'jenkins-secret-scan-dashboard',
    description: 'Security dashboard for scanning and monitoring secrets in CI/CD pipelines',
    techStack: ['Jenkins', 'Python', 'Security'],
    isPublic: true,
    category: 'security',
  },
  {
    name: 'devops-fastapi-demo',
    description: 'Production-grade FastAPI deployment with containerization and CI/CD',
    techStack: ['FastAPI', 'Docker', 'Python'],
    isPublic: true,
    category: 'security',
  },
  {
    name: 'wandaprep-tf-infra-repo',
    description: 'Terraform infrastructure as code for cloud deployment automation',
    techStack: ['Terraform', 'AWS', 'IaC'],
    isPublic: true,
    category: 'security',
  },
  // Backend / Systems
  {
    name: 'Pemprovbali-LPD-WEB3',
    description: 'Web3-based government financial transparency system concept',
    techStack: ['Solidity', 'Web3', 'TypeScript'],
    isPublic: true,
    category: 'backend',
  },
  {
    name: 'realworld-backend',
    description: 'Backend implementation of RealWorld spec using Go and clean architecture',
    techStack: ['Go', 'PostgreSQL', 'REST'],
    isPublic: true,
    category: 'backend',
  },
  {
    name: 'go-microservices',
    description: 'Microservices architecture patterns implemented in Go',
    techStack: ['Go', 'gRPC', 'Docker'],
    isPublic: true,
    category: 'backend',
  },
  {
    name: 'haven-banking',
    description: 'Secure banking application with modern authentication',
    techStack: ['TypeScript', 'Node.js', 'PostgreSQL'],
    isPublic: true,
    category: 'backend',
  },
  // Web / UI
  {
    name: 'web3-token',
    description: 'Decentralized GEN token storage concept with smart contracts',
    techStack: ['Solidity', 'Web3.js', 'React'],
    isPublic: true,
    category: 'web',
  },
  {
    name: 'chat-app',
    description: 'Real-time chat application with modern UI/UX',
    techStack: ['TypeScript', 'WebSocket', 'React'],
    isPublic: true,
    category: 'web',
  },
  // Learning
  {
    name: 'telstra-starter-repo',
    description: 'Forage simulation - Enterprise network automation',
    techStack: ['Python', 'Networking'],
    isPublic: true,
    category: 'learning',
  },
  {
    name: 'forage-midas',
    description: 'JPMC Advanced SWE simulation - Financial analysis tools',
    techStack: ['Python', 'React', 'Data'],
    isPublic: true,
    category: 'learning',
  },
];

const categoryLabels = {
  security: 'Security & DevOps',
  backend: 'Backend Systems',
  web: 'Web & UI',
  learning: 'Simulations & Learning',
};

const categoryOrder: Project['category'][] = ['security', 'backend', 'web', 'learning'];

export const ProjectsGrid = () => {
  return (
    <section id="projects" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <span className="text-primary font-mono text-sm mb-2 block">Projects</span>
        <h2 className="section-title">Engineering Portfolio</h2>
        <p className="section-subtitle">
          Production systems, open-source contributions, and technical explorations
        </p>
      </motion.div>

      {categoryOrder.map((category) => (
        <div key={category} className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-lg font-semibold text-muted-foreground mb-6 flex items-center gap-2"
          >
            <span className="w-8 h-px bg-primary/50" />
            {categoryLabels[category]}
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects
              .filter((p) => p.category === category)
              .map((project, index) => (
                <ProjectCard key={project.name} project={project} index={index} />
              ))}
          </div>
        </div>
      ))}
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group glass-card-hover rounded-lg p-6"
    >
      <div className="flex items-start justify-between mb-3">
        <h4 className="font-mono font-medium text-foreground group-hover:text-primary transition-colors">
          {project.name}
        </h4>
        <span className={`flex items-center gap-1 text-xs font-mono ${project.isPublic ? 'text-emerald-400' : 'text-muted-foreground'}`}>
          {project.isPublic ? <Globe className="w-3 h-3" /> : <Lock className="w-3 h-3" />}
          {project.isPublic ? 'Public' : 'Private'}
        </span>
      </div>

      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 text-xs font-mono rounded bg-muted/50 text-muted-foreground"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-3 pt-2 border-t border-border/30">
        <a
          href={`https://github.com/manparta/${project.name}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
        >
          <Github className="w-3.5 h-3.5" />
          Repository
        </a>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Live
          </a>
        )}
      </div>
    </motion.div>
  );
};
