import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Sidebar = () => {
  return (
    <motion.aside 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bento-card p-8 flex flex-col items-center text-center max-h-[calc(100vh-4rem)] overflow-y-auto custom-scrollbar"
    >
      <div className="w-full aspect-[4/5] overflow-hidden rounded-2xl mb-8 relative">
        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10"></div>
        <img 
          src="/profile.jpg" 
          alt="Profile" 
          className="w-full h-full object-cover object-top filter contrast-125 brightness-90 grayscale-[20%]"
        />
      </div>

      <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Kshitij Saxena</h1>
      <p className="text-sm text-textSecondary mb-1 font-medium">Full Stack Engineer</p>
      <p className="text-sm text-textSecondary mb-8">Pune, India</p>

      <div className="flex gap-6 mb-10">
        <a href="https://github.com/kshitij2212" target="_blank" rel="noopener noreferrer" className="text-textSecondary hover:text-white transition-colors">
          <FaGithub size={20} />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-textSecondary hover:text-white transition-colors">
          <FaLinkedin size={20} />
        </a>
        <a href="https://leetcode.com/u/KshitijSaxena04/" target="_blank" rel="noopener noreferrer" className="text-textSecondary hover:text-white transition-colors">
          <SiLeetcode size={20} />
        </a>
      </div>

      <div className="w-full space-y-3 mb-8">
        <a 
          href="https://drive.google.com/file/d/1RbYxUOJkim78TPnsB-v6DsHBYpkm-iwW/view?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3 bg-[#1a1a1a] border border-[#333] text-white text-xs font-bold rounded-xl hover:bg-white hover:text-black transition-all uppercase tracking-widest"
        >
          <FaDownload size={14} />
          View Resume
        </a>
        <a 
          href="#contact" 
          className="block w-full py-3 bg-white text-black text-xs font-bold rounded-xl hover:bg-gray-200 transition-all uppercase tracking-widest"
        >
          Let's Talk
        </a>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
