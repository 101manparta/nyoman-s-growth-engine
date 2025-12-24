import { motion } from 'framer-motion';

interface Tool {
  name: string;
  icon: string;
}

interface ToolCategory {
  title: string;
  tools: Tool[];
}

const toolCategories: ToolCategory[] = [
  {
    title: 'Frontend',
    tools: [
      { name: 'TypeScript', icon: '🔷' },
      { name: 'React', icon: '⚛️' },
      { name: 'Next.js', icon: '▲' },
    ],
  },
  {
    title: 'Backend',
    tools: [
      { name: 'Go', icon: '🐹' },
      { name: 'Python', icon: '🐍' },
      { name: 'Java', icon: '☕' },
      { name: 'FastAPI', icon: '⚡' },
    ],
  },
  {
    title: 'DevOps',
    tools: [
      { name: 'Docker', icon: '🐳' },
      { name: 'Jenkins', icon: '🔧' },
      { name: 'Terraform', icon: '🏗️' },
    ],
  },
  {
    title: 'Data & Infra',
    tools: [
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'MySQL', icon: '💾' },
      { name: 'Airflow', icon: '🌬️' },
    ],
  },
  {
    title: 'Web3',
    tools: [
      { name: 'Solidity', icon: '💎' },
      { name: 'Smart Contracts', icon: '📜' },
    ],
  },
  {
    title: 'Security',
    tools: [
      { name: 'Secret Scanning', icon: '🔐' },
      { name: 'Threat Pipelines', icon: '🛡️' },
    ],
  },
];

export const ToolsStack = () => {
  return (
    <section className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <span className="text-primary font-mono text-sm mb-2 block">Tech Stack</span>
        <h2 className="section-title">Tools & Technologies</h2>
        <p className="section-subtitle">
          Technologies I work with to build production-grade systems
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {toolCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            className="glass-card-hover rounded-lg p-6"
          >
            <h3 className="text-sm font-mono text-primary mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.tools.map((tool, toolIndex) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: categoryIndex * 0.1 + toolIndex * 0.05 }}
                  whileHover={{ 
                    scale: 1.05, 
                    rotate: [0, -2, 2, 0],
                    transition: { duration: 0.3 }
                  }}
                  className="flex items-center gap-2 px-3 py-2 rounded-md bg-muted/30 border border-border/50 cursor-default hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                >
                  <span className="text-base">{tool.icon}</span>
                  <span className="text-sm font-mono text-muted-foreground">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
