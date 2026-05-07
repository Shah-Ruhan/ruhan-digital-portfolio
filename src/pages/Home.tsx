import { ArrowRight, CheckCircle2, TrendingUp, Target, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

const stats = [
  { label: 'Follower Growth', value: '+250%', icon: TrendingUp },
  { label: 'Avg ROAS', value: '4.2x', icon: Target },
  { label: 'Ads Managed', value: '$10k+', icon: Users },
];

export default function Home() {
  return (
    <div className="space-y-32 pb-32">
      {/* Hero Section */}
      <section className="relative px-6 md:px-12 pt-12 md:pt-24 min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-accent/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent/5 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block px-3 py-1 text-[10px] font-bold tracking-[0.2em] bg-accent text-white uppercase"
            >
              Certified Digital Marketer
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05]"
            >
              Grow Your Business With <span className="text-accent">Smart Ads</span> & Organic Strategy.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-400 leading-relaxed max-w-lg mb-8"
            >
              Helping brands scale through Meta Ads Management and Instagram Growth. Strategy-first, data-driven, and results-focused.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-6"
            >
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-accent text-white font-bold text-lg rounded-sm shadow-lg shadow-accent/20 hover:scale-105 transition-all"
              >
                Let's Talk
              </Link>
              <Link 
                to="/portfolio" 
                className="px-8 py-4 border border-white/20 text-white font-bold text-lg rounded-sm hover:bg-white/5 transition-all"
              >
                View Work
              </Link>
            </motion.div>
          </div>

          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.3 }}
             className="grid grid-cols-2 gap-4"
          >
            {[
              { id: '01', title: 'Meta Ads', text: 'Precision-targeted campaigns that convert browsers into buyers.', offset: '' },
              { id: '02', title: 'IG Growth', text: 'Organic strategies to build a loyal community on Instagram.', offset: '' },
              { id: '03', title: 'Strategy', text: 'Planning calendars that tell your brand\'s unique story.', offset: 'lg:mt-[-20px]' },
              { id: '04', title: 'Results', text: '+142% engagement rate increase for recent clients.', offset: 'lg:mt-[20px]', highlight: true },
            ].map((card, i) => (
              <motion.div 
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + (i * 0.1) }}
                className={cn(
                  "p-8 border flex flex-col justify-center min-h-[220px] transition-all hover:scale-[1.02]",
                  card.highlight ? "bg-accent border-accent text-white" : "bg-navy-light border-white/5 text-white",
                  card.offset
                )}
              >
                <div className={cn("text-3xl mb-4 font-mono font-bold", card.highlight ? "text-white/60" : "text-accent")}>
                  {card.id}
                </div>
                <h3 className={cn("text-xl font-bold mb-2", card.highlight ? "italic" : "")}>{card.title}</h3>
                <p className={cn("text-sm", card.highlight ? "text-white/90 font-medium" : "text-gray-400")}>
                  {card.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Social Proof Mini */}
      <section className="px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto border-y border-white/5 py-12 flex flex-wrap justify-between items-center gap-8 grayscale opacity-50">
          <p className="w-full text-center text-sm font-mono text-white/40 uppercase tracking-widest mb-4 font-bold">Trusted by Brands in These Sectors</p>
          <div className="flex w-full justify-between overflow-hidden gap-12 whitespace-nowrap marquee-track">
             <span className="text-2xl font-bold">E-COMMERCE</span>
             <span className="text-2xl font-bold">FASHION</span>
             <span className="text-2xl font-bold">REAL ESTATE</span>
             <span className="text-2xl font-bold">FITNESS</span>
             <span className="text-2xl font-bold">SAAS</span>
             <span className="text-2xl font-bold">PERSONAL BRANDS</span>
          </div>
        </div>
      </section>
    </div>
  );
}
