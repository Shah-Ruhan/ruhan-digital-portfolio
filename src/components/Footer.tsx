import { Mail, Instagram, MessageSquare, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-dark border-t border-white/5 py-12 md:py-0 md:h-[140px] flex items-center px-6 md:px-12">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex flex-wrap justify-center md:justify-start gap-12 md:gap-16">
          <div>
            <div className="text-2xl font-bold text-white">4.9/5</div>
            <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Client Rating</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">50+</div>
            <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Campaigns Run</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">12M+</div>
            <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Impressions Driven</div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6">
          <span className="text-sm text-gray-400 font-medium">Connect on:</span>
          <div className="flex gap-4">
            {[
              { id: 'FI', href: 'https://www.fiverr.com/ruhanshah2024', label: 'Fiverr' },
              { id: 'IG', href: 'https://www.instagram.com/ruhan.shah15/', label: 'Instagram' },
              { id: 'WA', href: 'https://wa.me/8801647858094', label: 'WhatsApp' },
            ].map((social) => (
              <a 
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                title={social.label}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 font-bold text-[10px] uppercase cursor-pointer hover:bg-accent hover:border-accent hover:text-white transition-all transform hover:-translate-y-1"
              >
                {social.id}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
