import { Mail, MessageSquare, ExternalLink, Send, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, type FormEvent } from 'react';

const channels = [
  {
    name: 'Email Me',
    handle: 'shah0ruhan@gmail.com',
    href: 'mailto:shah0ruhan@gmail.com',
    icon: Mail,
    color: 'text-blue-400'
  },
  {
    name: 'WhatsApp',
    handle: '01647858094',
    href: 'https://wa.me/8801647858094',
    icon: MessageSquare,
    color: 'text-green-400'
  },
  {
    name: 'Insta ID',
    handle: '@ruhan.shah15',
    href: 'https://www.instagram.com/ruhan.shah15/',
    icon: ExternalLink,
    color: 'text-pink-400'
  },
  {
    name: 'Hire on Fiverr',
    handle: 'Ruhan\'s Gig',
    href: 'https://www.fiverr.com/ruhanshah2024',
    icon: ExternalLink,
    color: 'text-emerald-500'
  }
];

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => setFormState('sent'), 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Contact Info */}
        <div className="lg:col-span-5 space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Let's <span className="gradient-text">Grow Together</span></h2>
            <p className="text-white/60 text-lg leading-relaxed">
              Have a project in mind or want to talk strategy? Reach out through any of these channels.
            </p>
          </div>

          <div className="grid gap-6">
            {channels.map((channel) => (
              <a 
                key={channel.name} 
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card group hover:bg-white/10 transition-all flex items-center justify-between p-6"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ${channel.color}`}>
                    <channel.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">{channel.name}</h4>
                    <p className="text-sm text-white/40">{channel.handle}</p>
                  </div>
                </div>
                <ArrowUpRight className="text-white/20 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={20} />
              </a>
            ))}
          </div>

          <div className="p-8 glass-card border-accent/20 bg-accent/5">
             <h4 className="font-bold mb-2">Available for:</h4>
             <ul className="text-sm text-white/60 space-y-2">
               <li>• One-time Ad Setup</li>
               <li>• Monthly Management</li>
               <li>• Marketing Consultations</li>
               <li>• Content Production</li>
             </ul>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card p-10"
          >
            {formState === 'sent' ? (
              <div className="h-[400px] flex flex-col items-center justify-center text-center space-y-6">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-white">
                  <Send size={40} />
                </div>
                <h3 className="text-3xl font-bold">Message Sent!</h3>
                <p className="text-white/60 max-w-xs">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                <button 
                  onClick={() => setFormState('idle')}
                  className="text-accent underline font-bold"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white/40 uppercase tracking-widest">Your Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white/40 uppercase tracking-widest">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/40 uppercase tracking-widest">Interested In</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent transition-colors appearance-none">
                    <option className="bg-navy">Meta Ads Management</option>
                    <option className="bg-navy">Instagram Growth</option>
                    <option className="bg-navy">Content Strategy</option>
                    <option className="bg-navy">Full Marketing Suite</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/40 uppercase tracking-widest">Your Message</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="Tell me about your business goals..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent transition-colors resize-none"
                  ></textarea>
                </div>

                <button 
                  disabled={formState === 'sending'}
                  type="submit"
                  className="w-full bg-accent text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-accent/90 transition-all disabled:opacity-50"
                >
                  {formState === 'sending' ? 'Sending...' : 'Send Message'}
                  <Send size={18} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
