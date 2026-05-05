import { motion } from 'framer-motion';
import { Code, Server, Layout, Database } from 'lucide-react';

const expertise = [
  {
    title: 'Backend Dev',
    description: 'Building robust and scalable server-side logic and RESTful APIs using Node.js, Express, and modern databases.',
    icon: <Server className="text-white" />,
    skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB']
  },
  {
    title: 'Frontend Dev',
    description: 'Creating high-performance, responsive web applications using React, Next.js, and modern CSS frameworks like Tailwind.',
    icon: <Layout className="text-white" />,
    skills: ['React', 'Next.js', 'Tailwind', 'Framer Motion']
  },
  {
    title: 'Databases',
    description: 'Expertise in managing and optimizing both SQL and NoSQL databases for high-availability applications.',
    icon: <Database className="text-white" />,
    skills: ['MongoDB', 'PostgreSQL', 'Redis', 'Firebase']
  },
  {
    title: 'Data Structures',
    description: 'Strong foundation in algorithms and data structures, with a focus on problem-solving and optimization.',
    icon: <Code className="text-white" />,
    skills: ['C++', 'Python', 'Algorithm Design', 'Complexity Analysis']
  }
];

const Expertise = () => {
  return (
    <section id="expertise" className="w-full pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="mb-16">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-0 text-white uppercase">
            MY
          </h1>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-12 text-[#222] uppercase">
            EXPERTISE
          </h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {expertise.map((item, index) => (
            <div key={index} className="bento-card p-10 flex flex-col h-full bg-[#111111] border-[#222] hover:border-primary/50 transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 border border-primary/20">
                {item.icon}
              </div>
              
              <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">{item.title}</h3>
              <p className="text-textSecondary text-sm leading-relaxed mb-8 flex-grow">
                {item.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {item.skills.map(skill => (
                  <span key={skill} className="text-[10px] font-bold text-white/40 border border-white/10 px-2 py-0.5 rounded-full uppercase tracking-tighter">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Expertise;
