import React, { useState, useEffect } from 'react';
// 1. IMPORT LINK
import { Link } from 'react-router-dom';
import { 
  Facebook, Youtube, Linkedin, Instagram, 
  Menu, X, Phone, Mail, MapPin 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo3.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 2. UPDATE NAVLINKS WITH PATHS
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Story', path: '/story' },
    { name: 'Venues', path: '/venues' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ];

  // --- Handle Scroll Logic ---
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation Variants
  const sidebarVariants = {
    closed: { 
      x: "100%",
      transition: { type: "spring", stiffness: 300, damping: 30 }
    },
    open: { 
      x: 0,
      transition: { 
        type: "spring", stiffness: 300, damping: 30,
        staggerChildren: 0.1, 
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <>
      {/* --- Main Navigation Bar --- */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          scrolled 
            ? 'bg-zinc-950/90 backdrop-blur-md shadow-lg py-4 border-b border-white/5' 
            : 'bg-transparent py-6'
        }`}
      >
        
        <div className="max-w-7xl mx-auto w-full px-8 md:px-16 flex items-center justify-between">
            {/* Main Logo - Wrapped in Link */}
            <Link to="/" className="flex items-center gap-2 cursor-pointer group">
              <motion.div 
                  whileHover={{ scale: 1.05, rotate: 0 }}
                  className="flex font-serif font-bold text-3xl tracking-tight text-white group-hover:text-amber-400 transition-colors duration-300"
              >
                  <img
                  src={logo}
                  alt="VTH Logo"
  className="h-16 w-18 object-contain drop-shadow-md"
/>
                  <span className="text-5xl -ml-2 drop-shadow-md"></span>
              </motion.div>
              <div className="flex flex-col leading-tight uppercase tracking-[0.25em] text-[10px] font-bold text-white/90 group-hover:text-white transition-colors">
                  <span>Vishal</span>
                  <span>Tent House</span>
              </div>
            </Link>

            {/* Desktop Links (Hidden on Mobile) */}
            <div className="hidden lg:flex items-center space-x-10 text-xs font-semibold uppercase tracking-[0.15em] text-white/80">
            {navLinks.map((item) => (
                <Link 
                  key={item.name} 
                  to={item.path} 
                  className="relative group py-2 hover:text-white transition-colors"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
            ))}
            </div>

            {/* Right Side: Socials + Menu Button */}
            <div className="flex items-center gap-6 text-white">
            <div className="hidden sm:flex gap-4">
                <SocialIcon icon={<Facebook size={14} />} />
                <SocialIcon icon={<Youtube size={14} />} />
                <SocialIcon icon={<Linkedin size={14} />} />
                <SocialIcon icon={<Instagram size={14} />} />
            </div>
            
            {/* Menu Trigger Button */}
            <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(true)}
                className="p-2 border border-white/20 rounded-full hover:bg-white/10 transition-colors"
            >
                <Menu size={24} className="stroke-1" />
            </motion.button>
            </div>
        </div>
      </nav>

      {/* --- Sliding Sidebar (Drawer) --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Sidebar Content */}
            <motion.div 
              initial="closed"
              animate="open"
              exit="closed"
              variants={sidebarVariants}
              className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-stone-50 z-[60] shadow-2xl border-l border-stone-200"
            >
              <div className="p-10 h-full flex flex-col relative overflow-y-auto">
                
                {/* Close Button */}
                <motion.button 
                  whileHover={{ rotate: 90 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="absolute top-8 right-8 p-2 rounded-full hover:bg-stone-200 transition-colors"
                >
                  <X size={24} className="text-stone-800 stroke-1" />
                </motion.button>

                {/* Sidebar Logo */}
                <motion.div variants={itemVariants} className="flex items-center gap-4 mb-10 mt-6 border-b border-stone-200 pb-8">
                  <div className="flex font-serif font-bold tracking-tighter text-amber-600">
                    <span className="text-6xl">VT</span>
                    <span className="text-6xl -ml-2">H</span>
                  </div>
                  <div className="flex flex-col leading-none uppercase tracking-[0.3em] text-xs font-bold text-stone-900">
                    <span>Vishal</span>
                    <span>Tent House</span>
                  </div>
                </motion.div>

                {/* Mobile Navigation Links */}
                <div className="lg:hidden flex flex-col gap-6 mb-12">
                   {navLinks.map((link) => (
                      <motion.div variants={itemVariants} key={link.name}>
                        <Link 
                          to={link.path}
                          onClick={() => setIsMenuOpen(false)}
                          className="text-2xl font-serif text-stone-800 hover:text-amber-600 hover:pl-2 transition-all duration-300 block"
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                   ))}
                </div>

                {/* ABOUT US Section */}
                <motion.div variants={itemVariants} className="mb-12">
                  <h3 className="text-xl font-serif text-stone-900 mb-6 uppercase tracking-widest border-l-2 border-amber-500 pl-4">About Us</h3>
                  <p className="text-stone-600 font-serif leading-loose text-sm italic">
                    "9CQ8+FWG , Nagmalpur, Gyanpur, Bhadohi, Uttar Pradesh 221304"
                  </p>
                </motion.div>

                {/* CONTACT US Section */}
                <motion.div variants={itemVariants} className="mt-auto">
                  <h3 className="text-xl font-serif text-stone-900 mb-8 uppercase tracking-widest border-l-2 border-amber-500 pl-4">Contact Us</h3>
                  
                  <div className="space-y-6 text-stone-600 font-light text-sm">
                    {[
                      { icon: <Phone size={18} />, text: "+91-9717417353" },
                      { icon: <Phone size={18} />, text: "+91-9773927345" },
                      { icon: <Mail size={18} />, text: "info@Vishal Tent House.com" },
                      { icon: <MapPin size={18} />, text: "A premium venue at  9CQ8+FWG , Nagmalpur, Gyanpur, Bhadohi, Uttar Pradesh 221304 renowned for hosting top-notch weddings, receptions, and corporate functions" }
                    ].map((contact, index) => (
                      <motion.div 
                        key={index} 
                        className="flex items-start gap-4 group cursor-pointer"
                        whileHover={{ x: 5 }}
                      >
                        <span className="text-amber-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">{contact.icon}</span>
                        <span className="leading-relaxed group-hover:text-stone-900 transition-colors">{contact.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Decorative Blob */}
                <div className="absolute top-40 -right-20 w-80 h-80 bg-amber-400/10 rounded-full mix-blend-multiply filter blur-3xl pointer-events-none"></div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

// Helper component
const SocialIcon = ({ icon }) => (
  <motion.a 
    href="#" 
    whileHover={{ y: -2, backgroundColor: "#d97706", borderColor: "#d97706", color: "white" }}
    className="w-8 h-8 rounded-full border border-white/20 text-white/70 flex items-center justify-center transition-all duration-300"
  >
    {icon}
  </motion.a>
);

export default Navbar;