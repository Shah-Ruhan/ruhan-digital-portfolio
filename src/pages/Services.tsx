import { BarChart3, Instagram, PenTool, Check, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Meta Ads Management',
    icon: BarChart3,
    description: 'Targeted advertising across Facebook & Instagram designed for maximum ROAS.',
    features: ['Campaign Strategy', 'Audience Research', 'A/B Testing', 'Performance Reporting'],
    pricing: {
      basic: '$299/mo',
      pro: '$499/mo',
      elite: 'Custom'
    },
    cta: 'Scale Your Ads'
  },
  {
    title: 'Instagram Growth',
    icon: Instagram,
    description: 'Grow your tribe organically through engagement, reels strategy, and community building.',
    features: ['Account Audit', 'Hashtag Strategy', 'Engagement Hacks', 'Growth Analytics'],
    pricing: {
      basic: '$199/mo',
      pro: '$349/mo',
      elite: '$599/mo'
    },
    cta: 'Grow My Brand'
  },
  {
    title: 'Content Strategy',
    icon: PenTool,
    description: 'Never wonder what to post again. We plan your entire content ecosystem.',
    features: ['Content Calendars', 'Video Scripts', 'Visual Direction', 'Copywriting'],
    pricing: {
      basic: '$149/mo',
      pro: '$249/mo',
      elite: '$399/mo'
    },
    cta: 'Get My Plan'
  }
];

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 space-y-24">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Expert <span className="gradient-text">Marketing Solutions</span></h2>
        <p className="text-white/60 text-lg">
          I provide data-backed strategies to help your business dominate the digital landscape.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group glass-card hover:bg-white/10 transition-all flex flex-col"
          >
            <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
              <service.icon size={28} />
            </div>
            
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-white/60 mb-8 grow">{service.description}</p>
            
            <ul className="space-y-4 mb-10">
              {service.features.map(feature => (
                <li key={feature} className="flex items-center gap-3 text-sm font-medium">
                  <div className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                    <Check size={12} />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="pt-8 border-t border-white/5 space-y-6">
               <div className="flex items-baseline justify-center gap-1">
                 <span className="text-xs text-white/40 font-bold uppercase tracking-widest">Starting at</span>
                 <span className="text-3xl font-bold text-accent">{service.pricing.basic}</span>
               </div>
               <Link 
                to="/contact" 
                className="w-full bg-white/5 border border-white/10 hover:bg-accent hover:text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all"
               >
                 {service.cta}
                 <ArrowRight size={18} />
               </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center p-12 glass-card border-dashed border-white/20">
        <p className="text-white/50 mb-4 font-medium uppercase tracking-[0.2em] text-xs">Need something custom?</p>
        <h3 className="text-2xl font-bold mb-6">Bespoke Strategies for Established Brands</h3>
        <Link 
          to="/contact"
          className="bg-accent text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform inline-block"
        >
          Book a Discovery Call
        </Link>
      </div>
    </div>
  );
}
