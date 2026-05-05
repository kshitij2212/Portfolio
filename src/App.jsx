import { FaHome, FaFolderOpen, FaWrench, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Projects from './components/Projects';

import Expertise from './components/Expertise';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-background min-h-screen text-textPrimary font-sans selection:bg-primary/30">
      
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <nav className="bg-[#1a1a1a]/80 backdrop-blur-md border border-[#333] rounded-2xl px-6 py-4 flex items-center gap-8 shadow-2xl">
          <a href="#" className="text-white hover:text-gray-300 transition-colors"><FaHome size={20} /></a>
          <a href="#projects" className="text-textSecondary hover:text-white transition-colors"><FaFolderOpen size={20} /></a>
          <a href="#expertise" className="text-textSecondary hover:text-white transition-colors"><FaBriefcase size={20} /></a>
          <a href="#contact" className="text-textSecondary hover:text-white transition-colors"><FaEnvelope size={20} /></a>
        </nav>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        
          <div className="w-full lg:w-[320px] shrink-0 lg:sticky lg:top-8">
            <Sidebar />
          </div>
          <main className="w-full flex-1 space-y-32">
            <Hero />
            <Projects />
            <Expertise />
            <Contact />
          </main>

        </div>
      </div>
    </div>
  );
}

export default App;
