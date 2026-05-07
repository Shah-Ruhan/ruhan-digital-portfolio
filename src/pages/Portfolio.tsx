import { TrendingUp, Users, PieChart, Calendar, ExternalLink, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

const projects = [
  {
    title: 'E-commerce Scaling (Meta Ads)',
    type: 'Practice Campaign',
    metric: '420% ROAS',
    description: 'A mock campaign setup for a streetwear brand showing audience targeting and creative testing phases.',
    icon: PieChart,
    image: 'https://picsum.photos/seed/ads-case/800/600'
  },
  {
    title: 'Fitness Brand Growth',
    type: 'Instagram Organic',
    metric: '12k Reach/mo',
    description: 'Content strategy execution showing before and after profile optimization & reel performance.',
    icon: TrendingUp,
    image: 'https://picsum.photos/seed/insta-growth/800/600'
  },
  {
    title: 'Monthly Content Ecosystem',
    type: 'Strategy & Planning',
    metric: '30 Days Content',
    description: 'Sample content calendar layout designed for a SaaS product to maintain 100% consistency.',
    icon: Calendar,
    image: 'https://picsum.photos/seed/calendar-sample/800/600'
  },
  {
    title: 'Ad Creative Designs',
    type: 'Graphic & Copy',
    metric: '3.2% Click Rate',
    description: 'Collection of high-converting ad visuals and headlines created during certification practice.',
    icon: Users,
    image: 'https://picsum.photos/seed/ad-creatives/800/600'
  }
];

export default function Portfolio() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 space-y-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest">
            <div className="w-4 h-4 rounded bg-accent/20 flex items-center justify-center"><TrendingUp size={10} /></div>
            Proven Methodologies
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Practice Work & <span className="gradient-text">Success Stories</span></h2>
        </div>
        <p className="text-white/60 text-lg max-w-md">
          Transparent showcase of my strategy execution, clearly labeled practice results, and certification proofs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group glass-card p-0 overflow-hidden flex flex-col md:flex-row h-full border-white/5 hover:border-accent/40"
          >
            <div className="md:w-1/2 aspect-video md:aspect-auto overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-8 md:w-1/2 flex flex-col justify-between space-y-6">
              <div>
                 <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold text-accent uppercase tracking-widest">{project.type}</span>
                    <project.icon size={18} className="text-white/20" />
                 </div>
                 <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                 <p className="text-sm text-white/50 leading-relaxed">{project.description}</p>
              </div>
              
              <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <div className="text-accent font-bold">{project.metric}</div>
                <button className="text-white/40 hover:text-white transition-colors">
                  <ExternalLink size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="glass-card py-16 px-8 flex flex-col md:flex-row items-center justify-between gap-8 bg-linear-to-br from-accent/5 to-transparent">
        <div className="space-y-4 text-center md:text-left">
           <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center text-accent mx-auto md:mx-0">
             <ShieldCheck size={32} />
           </div>
           <h3 className="text-3xl font-bold">Verified Expertise</h3>
           <p className="text-white/60">I am proud to be a certified specialist from top digital marketing institutions.</p>
        </div>
        <div className="glass-card p-8 bg-white/5 border-accent/20 text-center space-y-4 rotate-3">
           <img 
            src="https://picsum.photos/seed/certificate/400/300" 
            alt="Marketing Certificate" 
            className="w-64 rounded-lg opacity-80"
            referrerPolicy="no-referrer"
           />
           <p className="text-xs font-bold uppercase tracking-widest text-accent">Full Certificate Available on Request</p>
        </div>
      </div>
    </div>
  );
}
