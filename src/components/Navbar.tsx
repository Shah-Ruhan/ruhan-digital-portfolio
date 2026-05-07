import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BarChart3, Instagram, Award, Phone, Home, User } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About', href: '/about', icon: User },
  { name: 'Services', href: '/services', icon: BarChart3 },
  { name: 'Portfolio', href: '/portfolio', icon: Award },
  { name: 'Testimonials', href: '/testimonials', icon: Instagram },
  { name: 'Contact', href: '/contact', icon: Phone },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-6 md:px-12 h-[80px] flex items-center",
        scrolled ? "bg-navy/95 backdrop-blur-lg border-b border-white/10 shadow-2xl shadow-black/50" : "bg-transparent border-b border-white/5"
      )}
    >
      <div className="w-full flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-tighter uppercase">
          RUHAN<span className="text-accent">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 lowercase tracking-widest text-[#8892b0]">
          {navLinks.slice(0, 5).map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-xs font-bold transition-all hover:text-accent tracking-[0.2em] uppercase",
                location.pathname === link.href ? "text-accent" : "text-gray-300"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="px-6 py-2 border-2 border-accent text-accent text-xs font-bold uppercase tracking-tighter hover:bg-accent hover:text-white transition-all transform active:scale-95"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-navy border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center gap-3 text-lg font-medium",
                    location.pathname === link.href ? "text-accent" : "text-white/70"
                  )}
                >
                  <link.icon size={20} />
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full bg-accent text-white text-center py-4 rounded-xl font-bold mt-4"
              >
                Let's Talk
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
