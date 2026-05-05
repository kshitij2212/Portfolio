import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [status, setStatus] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formsubmit.co/ajax/177eab5a9f096d79cb5d10d3ee2b5909', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(null), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bento-card p-8 md:p-12 flex flex-col md:flex-row gap-12 justify-between"
      >
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Let's work together</h2>
          <p className="text-textSecondary mb-8 max-w-sm">
            I'm currently available for freelance projects and open to full-time opportunities. Reach out if you want to build something great.
          </p>
          
          <div className="space-y-4">
            <div>
              <p className="text-xs text-textSecondary uppercase tracking-widest mb-1">Email</p>
              <a href="mailto:kshitijsaxenaofficial@gmail.com" className="text-lg font-medium hover:text-gray-300 transition-colors">kshitijsaxenaofficial@gmail.com</a>
            </div>
            <div>
              <p className="text-xs text-textSecondary uppercase tracking-widest mb-1">Location</p>
              <p className="text-lg font-medium">Pune, India</p>
            </div>
          </div>
        </div>

        <div className="md:w-1/2">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-xs font-medium text-textSecondary mb-2 uppercase tracking-widest">Name</label>
              <input 
                type="text" 
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-[#161616] border border-[#333] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-textSecondary mb-2 uppercase tracking-widest">Email</label>
              <input 
                type="email" 
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-[#161616] border border-[#333] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white transition-colors"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-textSecondary mb-2 uppercase tracking-widest">Message</label>
              <textarea 
                rows="4" 
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-[#161616] border border-[#333] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white transition-colors resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            
            <div className="flex flex-col gap-4">
              <button 
                type="submit" 
                disabled={status === 'sending'}
                className="px-10 py-3 bg-white text-black text-sm font-bold rounded-xl hover:bg-gray-200 transition-colors self-start disabled:opacity-50"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              <AnimatePresence>
                {status === 'success' && (
                  <motion.p 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-green-400 text-sm font-medium"
                  >
                    Message sent successfully! I'll get back to you soon.
                  </motion.p>
                )}
                {status === 'error' && (
                  <motion.p 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-red-400 text-sm font-medium"
                  >
                    Something went wrong. Please try again.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
