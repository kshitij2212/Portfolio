import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'InterviewIQ',
    description: 'An advanced AI-driven mock interview platform leveraging Llama-3.3 and custom Speech-to-Text pipelines. It provides a realistic, high-pressure environment for candidates to sharpen their technical and behavioral skills with real-time feedback.',
    image: '/interview-iq.png',
    demo: 'https://interview-iq-nine-neon.vercel.app/',
    code: 'https://github.com/kshitij2212/InterviewIQ.git',
    tags: ['Llama-3.3', 'Groq', 'React', 'STT'],
    objectPosition: 'object-center'
  },
  {
    title: 'CrickCart',
    description: 'A comprehensive e-commerce platform for cricket gear featuring JWT-based role-based access (User/Admin). Includes product filtering, Cloudinary integration, optimistic UI updates for wishlists, and a full admin dashboard for order management.',
    image: '/crickcart.png',
    demo: 'https://crickcart.vercel.app/',
    code: 'https://github.com/kshitij2212/CrickCart.git',
    tags: ['E-com', 'JWT', 'Cloudinary', 'Admin'],
    objectPosition: 'object-[7%_center]'
  },
  {
    title: 'AttendanceIQ',
    description: 'A premium full-stack HRMS built for modern enterprises. It automates attendance tracking, leave management, and employee administration with a clean, high-performance architecture and sleek dashboard.',
    image: '/attendance.png',
    demo: 'https://attendance-manager-pi-blush.vercel.app/',
    code: 'https://github.com/kshitij2212/attendance-manager.git',
    tags: ['Full-stack', 'HRMS', 'React', 'Mongo DB'],
    objectPosition: 'object-left'
  },
  {
    title: 'ExpenseEasy',
    description: 'A comprehensive personal finance tracker featuring secure authentication, an interactive dashboard for visual spending analysis, full CRUD operations for daily expenses, and custom category management. Optimized for a seamless experience on all devices.',
    image: '/expenseease.png',
    demo: 'https://fj-be-r2-kshitij-saxena-adypu-soii.vercel.app',
    code: 'https://github.com/kshitij2212/FJ-BE-R2-KshitijSaxena-ADYPU.git',
    tags: ['React', 'Zustand', 'Tailwind', 'PostgreSQL'],
    objectPosition: 'object-center'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="w-full pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="mb-16">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-0 text-white uppercase">
            RECENT
          </h1>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-12 text-[#222] uppercase">
            PROJECTS
          </h1>
        </div>
        
        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bento-card group flex flex-col lg:flex-row overflow-hidden bg-[#111111] border-[#222] hover:border-[#444] transition-all duration-500 h-auto lg:h-72">
              <div className="w-full lg:w-2/5 h-48 lg:h-full overflow-hidden relative">
                 <img 
                  src={project.image} 
                  alt={project.title} 
                  className={`w-full h-full object-cover ${project.objectPosition || 'object-center'} group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100`}
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:hidden"></div>
              </div>
              
              <div className="w-full lg:w-3/5 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-3xl font-black text-white mb-2 uppercase tracking-tight">{project.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-[10px] font-bold text-textSecondary border border-border px-2 py-0.5 rounded-full uppercase tracking-tighter">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <a href={project.code} className="p-2.5 rounded-xl bg-surface border border-border text-white hover:bg-white hover:text-black transition-all shadow-xl" title="Source Code">
                        <FaGithub size={18} />
                      </a>
                      <a href={project.demo} className="p-2.5 rounded-xl bg-primary text-white hover:opacity-90 transition-all shadow-xl" title="Live Demo">
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-textSecondary text-sm leading-relaxed max-w-xl">
                    {project.description}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-6 lg:mt-0">
                  <a href={project.demo} className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest hover:gap-4 transition-all">
                    View Project <ArrowRight size={14} className="text-primary" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <a 
            href="https://github.com/kshitij2212" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-[#111] border border-[#222] rounded-2xl text-white font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all group"
          >
            <FaGithub size={20} className="group-hover:scale-110 transition-transform" />
            Discover many more on GitHub
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
