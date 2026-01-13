import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, 
  Facebook, Youtube, Linkedin, Instagram, 
  MessageCircle, Send 
} from 'lucide-react';

import venue13 from '../assets/22.jpeg';
import venue14 from '../assets/23.jpeg';
import venue15 from '../assets/24.jpeg';  

const ContactPage = () => {

  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="relative min-h-screen bg-white font-sans pt-0">
      
      {/* --- HERO SECTION (Split Panel Style) --- */}
      <div className="relative h-[50vh] md:h-[60vh] w-full flex overflow-hidden">
        {/* Decorative Background Panels */}
        {[
            venue13,
          venue14,
          venue15
        ].map((img, index) => (
          <div key={index} className="relative flex-1 h-full hidden md:block border-r border-white/20 last:border-r-0">
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <img 
              src={img} 
              alt="Contact Hero" 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        
        {/* Mobile Fallback Image */}
        <div className="absolute inset-0 md:hidden">
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop" 
              alt="Contact Hero" 
              className="w-full h-full object-cover" 
            />
        </div>

        {/* Hero Content Overlay */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm md:text-base font-medium tracking-wider uppercase opacity-90"
          >
            <span>Home</span> <span className="text-amber-400">→</span> <span>Contact</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight drop-shadow-2xl"
          >
            CONTACT
          </motion.h1>
        </div>
      </div>

      {/* --- MAIN CONTACT SECTION --- */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT COLUMN: Contact Info */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-10"
          >
            <div>
              <h4 className="text-amber-600 font-bold uppercase tracking-[0.2em] text-sm mb-2">Need Any Help?</h4>
              <h2 className="text-4xl font-serif text-gray-900">Contact With Us</h2>
            </div>

            <div className="space-y-8">
              {/* Phone */}
              <ContactItem 
                icon={<Phone size={24} className="text-white" />}
                title="Have Any Question?"
                content={
                  <>
                    <p>+91-9717417353</p>
                    <p>+91-9773927345</p>
                  </>
                }
              />
              
              {/* Email */}
              <ContactItem 
                icon={<Mail size={24} className="text-white" />}
                title="Write Email"
                content={<p>info@Vishal Tent House.com</p>}
              />

              {/* Address */}
              <ContactItem 
                icon={<MapPin size={24} className="text-white" />}
                title="Visit Anytime"
                content={<p>204, Chattarpur Mandir Road, Ansal Villas, Sat Bari, New Delhi - 110074</p>}
              />
            </div>

            {/* Social Icons Row */}
            <div className="flex gap-4 pt-4">
              <SocialButton icon={<Facebook size={20} />} />
              <SocialButton icon={<Youtube size={20} />} />
              <SocialButton icon={<Linkedin size={20} />} />
              <SocialButton icon={<Instagram size={20} />} />
            </div>
          </motion.div>


          {/* RIGHT COLUMN: Contact Form */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-stone-50 p-8 md:p-10 rounded-lg border border-gray-100 shadow-sm"
          >
            <div className="mb-8">
              <h4 className="text-amber-600 font-bold uppercase tracking-[0.2em] text-sm mb-2">Send Us Email</h4>
              <h2 className="text-3xl font-serif text-gray-900">Feel Free To Write</h2>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-white px-4 py-4 outline-none border border-gray-200 focus:border-amber-500 transition-colors"
                />
                <input 
                  type="email" 
                  placeholder="Enter Email" 
                  className="w-full bg-white px-4 py-4 outline-none border border-gray-200 focus:border-amber-500 transition-colors"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Subject" 
                  className="w-full bg-white px-4 py-4 outline-none border border-gray-200 focus:border-amber-500 transition-colors"
                />
                <input 
                  type="tel" 
                  placeholder="Phone" 
                  className="w-full bg-white px-4 py-4 outline-none border border-gray-200 focus:border-amber-500 transition-colors"
                />
              </div>

              <textarea 
                rows="5" 
                placeholder="Message" 
                className="w-full bg-white px-4 py-4 outline-none border border-gray-200 focus:border-amber-500 transition-colors resize-none"
              ></textarea>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full md:w-auto px-10 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={18} />
              </motion.button>
            </form>
          </motion.div>

        </div>
      </section>

      {/* --- MAP SECTION (Optional Visual Enhancement) --- */}
      <section className="w-full h-80 grayscale hover:grayscale-0 transition-all duration-700">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.160166667926!2d77.16436631508076!3d28.504825982468357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1e1b1b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2sMallu%20Farms!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
          title="Vishal Tent House Location"
        ></iframe>
      </section>

      {/* --- Floating WhatsApp Button --- */}
      <motion.a
        href="https://wa.me/919717417353"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 left-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600 transition-colors flex items-center justify-center"
      >
        {/* <MessageCircle size={28} fill="white" className="text-white" /> */}
      </motion.a>

    </div>
  );
};

// --- Helper Components ---

const ContactItem = ({ icon, title, content }) => (
  <div className="flex items-start gap-6">
    <div className="w-16 h-16 bg-amber-500 flex items-center justify-center shrink-0 rounded-sm shadow-md">
      {icon}
    </div>
    <div className="mt-1">
      <h3 className="text-xl font-serif text-gray-900 mb-2">{title}</h3>
      <div className="text-gray-500 font-light leading-relaxed">
        {content}
      </div>
    </div>
  </div>
);

const SocialButton = ({ icon }) => (
  <motion.a 
    href="#"
    whileHover={{ y: -5, backgroundColor: "#f59e0b" }}
    className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center transition-colors shadow-sm"
  >
    {icon}
  </motion.a>
);

export default ContactPage;