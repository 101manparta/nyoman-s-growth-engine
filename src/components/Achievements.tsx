import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap, Shield } from 'lucide-react';

interface Achievement {
  title: string;
  organization: string;
  type: 'work' | 'award' | 'education' | 'certification';
  year?: string;
}

const achievements: Achievement[] = [
  {
    title: 'Software Engineering Simulation',
    organization: 'JPMorgan Chase & Co.',
    type: 'work',
    year: '2024',
  },
  {
    title: 'Software Engineering Simulation',
    organization: 'Telstra Australia',
    type: 'work',
    year: '2024',
  },
  {
    title: 'National Bronze Medal – OPSI',
    organization: 'Applied Physics Research',
    type: 'award',
  },
  {
    title: 'National Academic Achievement',
    organization: 'Puspresnas Indonesia',
    type: 'award',
  },
  {
    title: 'SMA Negeri Bali Mandara',
    organization: 'Elite Boarding High School',
    type: 'education',
  },
  {
    title: 'Cybersecurity Certifications',
    organization: 'Komdigi RI & Coding Studio',
    type: 'certification',
  },
];

const iconMap = {
  work: Briefcase,
  award: Award,
  education: GraduationCap,
  certification: Shield,
};

const colorMap = {
  work: 'text-primary',
  award: 'text-amber-400',
  education: 'text-emerald-400',
  certification: 'text-secondary',
};

export const Achievements = () => {
  return (
    <section className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <span className="text-primary font-mono text-sm mb-2 block">Credentials</span>
        <h2 className="section-title">Achievements & Experience</h2>
        <p className="section-subtitle">
          Recognition, simulations, and professional development
        </p>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/30 to-transparent hidden md:block" />

        <div className="space-y-6">
          {achievements.map((achievement, index) => {
            const Icon = iconMap[achievement.type];
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center gap-4 md:gap-8 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content card */}
                <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="glass-card-hover rounded-lg p-5 inline-block max-w-md">
                    <div className={`flex items-center gap-3 mb-2 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                      <Icon className={`w-4 h-4 ${colorMap[achievement.type]}`} />
                      <h3 className="font-medium text-foreground">{achievement.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{achievement.organization}</p>
                    {achievement.year && (
                      <span className="text-xs font-mono text-primary mt-2 block">{achievement.year}</span>
                    )}
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex w-3 h-3 rounded-full bg-primary shadow-glow z-10" />

                {/* Spacer for alignment */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
