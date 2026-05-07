import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    name: 'Sarah J.',
    role: 'E-commerce Store Owner',
    text: "Ruhan set up my Meta Ads from scratch. Even with a small budget, we saw profitable sales in the first week. His reporting is super clear and he actually cares about the ROI.",
    rating: 5,
    avatar: 'https://picsum.photos/seed/user1/100/100'
  },
  {
    name: 'Mark Thompson',
    role: 'Personal Brand',
    text: "My Instagram reach was dead. Ruhan analyzed my page, fixed my bio, and gave me a reels strategy that actually worked. Gained 500 targeted followers in 2 weeks.",
    rating: 5,
    avatar: 'https://picsum.photos/seed/user2/100/100'
  },
  {
    name: 'Elena Gilbert',
    role: 'Lifestyle Blogger',
    text: "Honest and professional. He told me exactly what I was doing wrong with my content strategy. The content calendar he created saved me hours every week.",
    rating: 5,
    avatar: 'https://picsum.photos/seed/user3/100/100'
  }
];

export default function Testimonials() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 space-y-24">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Client <span className="gradient-text">Feedback</span></h2>
        <p className="text-white/60 text-lg max-w-xl mx-auto">
          Honest reviews from clients and practice project partners I've worked with recently.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="glass-card flex flex-col h-full hover:border-accent/30 transition-all group"
          >
            <div className="flex gap-1 mb-6">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" className="text-accent" />
              ))}
            </div>
            
            <Quote className="text-accent/20 mb-4 group-hover:text-accent/40 transition-colors" size={40} />
            
            <p className="text-white/80 leading-relaxed italic grow mb-8">
              "{testimonial.text}"
            </p>

            <div className="flex items-center gap-4 pt-8 border-t border-white/5">
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name} 
                className="w-12 h-12 rounded-full object-cover border border-white/10"
                referrerPolicy="no-referrer"
              />
              <div>
                <h4 className="font-bold flex items-center gap-1">
                  {testimonial.name}
                  <CheckCircle2 size={14} className="text-blue-500" />
                </h4>
                <p className="text-xs text-white/50">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <p className="text-white/40 mb-8 font-medium">Ready to be my next success story?</p>
        <a 
          href="/contact"
          className="bg-accent text-white px-10 py-4 rounded-xl font-bold hover:bg-accent/90 transition-all inline-block shadow-lg shadow-accent/20"
        >
          Let's Start Your Campaign
        </a>
      </div>
    </div>
  );
}
