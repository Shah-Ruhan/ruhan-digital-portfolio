import { ShieldCheck, Target, Heart, Award } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 space-y-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">I am Ruhan, a <span className="gradient-text">Growth Specialist</span></h2>
            <p className="text-xl text-white/70 leading-relaxed">
              My journey into digital marketing started with a simple question: <br />
              <span className="italic">"How do small businesses compete with giants in the feed?"</span>
            </p>
          </div>
          
          <div className="space-y-6 text-white/60 leading-relaxed">
            <p>
              After seeing countless business owners struggle with complex ad platforms and unpredictable algorithms, I decided to bridge the gap. I spent years mastering Meta Ads and Instagram growth, focusing not just on "likes," but on actual revenue-driving metrics.
            </p>
            <p>
              My approach is simple: **Strategy-first, Data-driven, and Brutally Honest.** If a campaign isn't working, we pivot fast. If it's hitting, we scale hard.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            <div className="glass-card flex flex-col items-center text-center gap-3 p-4">
              <div className="text-accent bg-accent/10 p-3 rounded-full"><Target size={24} /></div>
              <h4 className="font-bold">Strategy</h4>
            </div>
            <div className="glass-card flex flex-col items-center text-center gap-3 p-4">
              <div className="text-accent bg-accent/10 p-3 rounded-full"><ShieldCheck size={24} /></div>
              <h4 className="font-bold">Honesty</h4>
            </div>
            <div className="glass-card flex flex-col items-center text-center gap-3 p-4">
              <div className="text-accent bg-accent/10 p-3 rounded-full"><Heart size={24} /></div>
              <h4 className="font-bold">Passion</h4>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative group"
        >
          <div className="glass-card p-0 aspect-[4/5] overflow-hidden relative">
            <img 
              src="https://picsum.photos/seed/marketer-profile/800/1000" 
              alt="Ruhan - Professional Portrait"
              className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-x-0 bottom-0 p-8 bg-linear-to-t from-navy to-transparent">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl">Google Certified</h4>
                  <p className="text-white/60 text-sm">Advanced Search & Display Ads</p>
                </div>
              </div>
            </div>
          </div>
          {/* Certificate Preview Overlay */}
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hidden md:flex flex-col items-center justify-center p-4 text-center gap-2">
            <p className="text-[10px] font-bold text-accent uppercase tracking-widest">Certificate</p>
            <div className="w-24 h-1 bg-accent/20 rounded-full" />
            <div className="w-16 h-1 bg-accent/20 rounded-full" />
            <Award size={32} className="text-accent mt-2" />
          </div>
        </motion.div>
      </div>

      <div className="glass-card bg-orange-500/5 border-orange-500/20 p-12 text-center space-y-6">
        <h3 className="text-3xl font-bold">The Core Philosophy</h3>
        <p className="text-xl text-white/70 max-w-3xl mx-auto italic">
          "Digital marketing is about finding the right people, at the right time, with a message that resonates so deeply they can't help but engage."
        </p>
      </div>
    </div>
  );
}
