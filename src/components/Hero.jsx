import { motion } from 'framer-motion';
import { ArrowRight, Layers, Layout } from 'lucide-react';

const TypingText = ({ text, className, delay = 0 }) => {
  const characters = Array.from(text);
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: delay * 0.1 + i * 0.1 },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.h1
      style={{ display: "flex", overflow: "hidden" }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {characters.map((char, index) => (
        <motion.span variants={child} key={index}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h1>
  );
};

const Hero = () => {
  return (
    <section className="pt-8 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-12 flex flex-col">
          <TypingText 
            text="FULL STACK" 
            className="text-5xl md:text-[8rem] font-black tracking-tighter leading-none mb-0 text-white uppercase"
          />
          <TypingText 
            text="DEVELOPER" 
            className="text-5xl md:text-[8rem] font-black tracking-tighter leading-none mb-8 text-[#373737] uppercase"
            delay={10}
          />
        </div>
        
        <p className="text-textSecondary text-xl max-w-2xl mb-16 leading-relaxed font-medium">
          Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.
        </p>

        <div className="flex flex-wrap gap-12 md:gap-24 mb-16">
          <div>
            <h3 className="text-5xl md:text-6xl font-bold text-white mb-2 tracking-tighter">10+</h3>
            <p className="text-xs text-textSecondary uppercase tracking-widest leading-relaxed">Worked on<br/>Projects</p>
          </div>
          <div>
            <h3 className="text-5xl md:text-6xl font-bold text-white mb-2 tracking-tighter">20+</h3>
            <p className="text-xs text-textSecondary uppercase tracking-widest leading-relaxed">Tech<br/>Stack</p>
          </div>
          <div>
            <h3 className="text-5xl md:text-6xl font-bold text-white mb-2 tracking-tighter">200+</h3>
            <p className="text-xs text-textSecondary uppercase tracking-widest leading-relaxed">Coding<br/>Problems</p>
          </div>
        </div>
        <br />
        <br />
        <br />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <a href="https://github.com/kshitij2212" target="_blank" rel="noopener noreferrer" className="bg-[#e69278] rounded-[2rem] p-6 h-32 flex items-center gap-6 relative overflow-hidden group transition-transform hover:scale-[1.02]">
             <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .322.218.694.825.576C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z"/></svg>
             </div>
             <div className="flex flex-col">
               <p className="text-white/60 text-xs uppercase tracking-widest font-bold mb-1">Github</p>
               <h2 className="text-2xl font-black text-white leading-tight uppercase">
                  Explore Code
               </h2>
             </div>
             <div className="absolute top-1/2 -translate-y-1/2 right-10 w-10 h-10 rounded-lg border border-white/30 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#FF7043] transition-all">
                <ArrowRight size={20} />
             </div>
          </a>

          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="bg-[#D4FF80] rounded-[2rem] p-6 h-32 flex items-center gap-6 relative overflow-hidden group transition-transform hover:scale-[1.02]">
             <div className="w-14 h-14 rounded-2xl bg-black/10 flex items-center justify-center shrink-0">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
             </div>
             <div className="flex flex-col">
               <p className="text-black/40 text-xs uppercase tracking-widest font-bold mb-1">LinkedIn</p>
               <h2 className="text-2xl font-black text-black leading-tight uppercase">
                  Let's Connect
               </h2>
             </div>
             <div className="absolute top-1/2 -translate-y-1/2 right-10 w-10 h-10 rounded-lg border border-black/20 flex items-center justify-center text-black group-hover:bg-black group-hover:text-[#D4FF80] transition-all">
                <ArrowRight size={20} />
             </div>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
