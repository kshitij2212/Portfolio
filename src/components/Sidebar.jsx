import { motion } from 'framer-motion';
import { FaDribbble, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <motion.aside 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
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
        <a href="#" className="text-textSecondary hover:text-white transition-colors">
          <FaDribbble size={20} />
        </a>
        <a href="#" className="text-textSecondary hover:text-white transition-colors">
          <FaTwitter size={20} />
        </a>
        <a href="#" className="text-textSecondary hover:text-white transition-colors">
          <FaInstagram size={20} />
        </a>
        <a href="#" className="text-textSecondary hover:text-white transition-colors">
          <FaEnvelope size={20} />
        </a>
      </div>

      <button className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors">
        Let's Talk
      </button>
    </motion.aside>
  );
};

export default Sidebar;
