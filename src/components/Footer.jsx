import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Youtube, 
  Linkedin, 
  Instagram, 
  ArrowRight, 
  MessageCircle, 
  ArrowUp 
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#1a051d] text-white/80 overflow-hidden font-sans pt-20 pb-10">
      
      {/* --- Decorative Background Elements --- */}
      {/* Top Left Floral Hint (Abstract CSS shape to mimic the floral design) */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      
      {/* Bottom Right Wave */}
      <svg className="absolute bottom-0 right-0 w-[500px] h-[500px] opacity-10 pointer-events-none text-[#E88D46]" viewBox="0 0 100 100" preserveAspectRatio="none">
         <path d="M0 100 C 20 0 50 0 100 100 Z" fill="none" stroke="currentColor" strokeWidth="2" />
         <path d="M20 100 C 40 20 70 20 100 80" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* --- Top Section: Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Column 1: Brand & About (Span 5) */}
          <div className="md:col-span-5 space-y-6">
            {/* Logo Construction */}
            <div className="flex items-center gap-3">
              <div className="text-5xl font-black text-[#FCA311] tracking-tighter leading-none">
                MF
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-xl font-bold text-white tracking-widest leading-none">MALLU</span>
                <span className="text-xl font-bold text-white tracking-widest leading-none">FARMS</span>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-gray-300 max-w-md">
              A premium venue at Satbari Road, Chattarpur, renowned for hosting top-notch weddings, 
              receptions, and corporate functions since 1958. Offering unrivaled hospitality, 
              ambiance, and gourmet cuisine, Vishal Tent House sets the standard in banqueting.
            </p>
          </div>

          {/* Column 2: Quick Links (Span 3) */}
          <div className="md:col-span-3 space-y-6">
            <h3 className="font-serif text-xl text-white uppercase tracking-widest">Quick Links</h3>
            <ul className="space-y-4">
              {['Our Story', 'Venues', 'Events', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="flex items-center gap-2 text-sm hover:text-[#FCA311] transition-colors group">
                    <ArrowRight className="w-4 h-4 text-[#FCA311] transition-transform group-hover:translate-x-1" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact (Span 4) */}
          <div className="md:col-span-4 space-y-6">
            <h3 className="font-serif text-xl text-white uppercase tracking-widest">Contact</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <span className="text-sm">info@Vishal Tent House.com</span>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <div className="text-sm flex flex-col">
                  <span>+91-9717417353</span>
                  <span>+91-9773927345</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">
                  204, Chattarpur Mandir Road, Ansal Villas, Sat Bari, New Delhi - 110074
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* --- Divider --- */}
        <div className="w-full h-[1px] bg-white/10 mb-10"></div>

        {/* --- Bottom Section --- */}
        <div className="flex flex-col items-center justify-center gap-6">
          
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {[Facebook, Youtube, Linkedin, Instagram].map((Icon, index) => (
              <a 
                key={index} 
                href="#" 
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#FCA311] hover:border-[#FCA311] hover:text-[#1a051d] transition-all duration-300"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-xs text-gray-400">
            <p>© 2026, Vishal Tent House | Developed by Global Now Productions.</p>
          </div>
        </div>

      </div>

      {/* --- Floating Action Buttons --- */}
      
      {/* WhatsApp Button (Bottom Left) */}
      {/* <a 
        href="https://wa.me/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 bg-[#25D366] w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 animate-bounce-slow"
      >
        <MessageCircle className="w-8 h-8 text-white fill-white" />
      </a> */}

      {/* Scroll to Top Button (Bottom Right) */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 bg-[#6d4c41] w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-[#FCA311] transition-colors duration-300 group"
      >
        <ArrowUp className="w-6 h-6 text-white group-hover:-translate-y-1 transition-transform" />
      </button>

    </footer>
  );
};

export default Footer;