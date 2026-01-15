import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Star, Calendar, Award, User } from 'lucide-react';
import venue13 from '../assets/22.jpeg';
import venue14 from '../assets/23.jpeg';
import venue15 from '../assets/24.jpeg';    
import venue16 from '../assets/25.jpeg';
import venue17 from '../assets/26.jpeg';
import venue18 from '../assets/27.jpeg';
import venue19 from '../assets/59.jpg';
import venue20 from '../assets/29.jpeg';
import venue21 from '../assets/30.jpeg';
import venue22 from '../assets/31.jpeg';
import venue23 from '../assets/32.jpeg';
import venue24 from '../assets/33.jpeg';
import venue25 from '../assets/34.jpeg';
import venue26 from '../assets/35.jpeg';
import venue27 from '../assets/36.jpeg';
import venue28 from '../assets/37.jpeg';
import venue29 from '../assets/38.jpeg';
import venue30 from '../assets/39.jpeg';
import venue31 from '../assets/40.jpeg';
import venue32 from '../assets/41.jpeg';
import venue33 from '../assets/42.jpeg';
import venue34 from '../assets/43.jpeg';

import venueOne from '../assets/6.jpeg';
import venue2 from '../assets/22.jpeg';
import venue3 from '../assets/23.jpeg';
import venue4 from '../assets/24.jpeg';


const OurStory = () => {
  // Hero Images (Keep existing)
  const heroImages = [
    venue13,
    venue14,
    venue15,
    venue16,
    venue17
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="relative min-h-screen bg-white font-sans">
      
      {/* --- HERO SECTION (5-Panel Split) --- */}
      <div className="relative h-[60vh] md:h-[70vh] w-full flex overflow-hidden">
        {heroImages.map((img, index) => (
          <div key={index} className="relative flex-1 h-full hidden md:block group border-r border-white/20 last:border-r-0">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10"></div>
            <img 
              src={img} 
              alt={`Story Panel ${index + 1}`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        ))}
        {/* Mobile Fallback */}
        <div className="absolute inset-0 md:hidden">
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            <img src={heroImages[2]} alt="Our Story" className="w-full h-full object-cover" />
        </div>

        {/* Overlay Content */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm md:text-base font-medium tracking-wider uppercase opacity-90"
          >
            <span>Home</span> <span className="text-amber-400">→</span> <span>Our Story</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight drop-shadow-2xl text-center"
          >
            OUR STORY
          </motion.h1>
        </div>
      </div>

      {/* --- STATS / HIGHLIGHTS BAR --- */}
      <div className="bg-stone-900 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
          {[
            { title: "Flawless Wedding", desc: "Meticulously crafted for perfection.", icon: <Heart className="text-amber-500 mb-3" /> },
            { title: "Event Planner", desc: "Precision, creativity, and vision.", icon: <Calendar className="text-amber-500 mb-3" /> },
            { title: "Great Reputation", desc: "Revered for excellence since 1996.", icon: <Star className="text-amber-500 mb-3" /> }
          ].map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="flex flex-col items-center p-4"
            >
              {item.icon}
              <h3 className="text-xl font-serif mb-2">{item.title}</h3>
              <p className="text-gray-400 font-light text-sm max-w-xs">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- LEGACY & ABOUT SECTION --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Image Grid */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-amber-500/50"></div>
            <img 
            src={venue18}
            alt="Mallu Maharaj Founder" 
              className="w-full h-[500px] object-cover rounded-sm shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 shadow-xl max-w-xs hidden md:block">
              <p className="font-serif text-2xl text-amber-600">"Est. 2000"</p>
              <p className="text-gray-500 text-sm mt-1">Founded by Mr. Vishal Bhardwaj</p>
            </div>
          </div>

          {/* Text Content */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-6"
          >
            <h4 className="text-amber-600 font-bold uppercase tracking-[0.2em] text-sm">About Vishal Tent House</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
              Where Dreams Begin and <span className="italic text-amber-600">Celebrations Live Forever</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Welcome to Vishal Tent House – an esteemed event venue on Satbari Road, Chattarpur. Founded in 1958 by <strong>Mr. Vishal Bhardwaj</strong> (Innovator & Founder), and carrying an unrivaled reputation since 1996, we are the preferred choice for weddings, receptions, and milestones.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Spanning <strong>8 acres</strong>, our venue features grand halls and a captivating poolside area. We don't just host events — we help you tell your story. Our guests often say it doesn’t feel like they’re booking a venue — it feels like becoming part of the Vishal Tent House family.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- PHILOSOPHY SECTION --- */}
      <section className="bg-amber-50 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Heart size={40} className="mx-auto text-amber-600 fill-amber-600/20" />
          <h2 className="text-3xl md:text-5xl font-serif text-gray-900">Our Philosophy: Every Event, Elevated</h2>
          <p className="text-gray-700 leading-relaxed text-lg font-light">
            At Vishal Tent House, we believe every celebration should be as unique as the people behind it. 
            Whether it’s your wedding day or a corporate milestone, we work closely with you to bring your vision to life — 
            with elegance, ease, and zero stress. From décor and lighting to gourmet cuisine, every element is thoughtfully curated.
          </p>
        </div>
      </section>

      {/* --- THE THREE VENUES --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h4 className="text-amber-600 font-bold uppercase tracking-[0.2em] text-sm mb-4">Our Spaces</h4>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900">Three Venues. Endless Possibilities.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Venue 1: Hawaii Glasshouse */}
          <VenueCard 
            title="Hawaii Glasshouse"
            desc="An architectural marvel wrapped in glass, blending indoor elegance with an outdoor ambiance. Perfect for sunset weddings and dreamy receptions."
            img={venueOne}
          />
          {/* Venue 2: Imperial Hall */}
          <VenueCard 
            title="Imperial Hall"
            desc="A regal and spacious hall that embodies royal charm. With grand interiors and timeless décor, it’s ideal for majestic weddings and formal events."
            img={venue2}
          />
          {/* Venue 3: Windsor Hall */}
          <VenueCard 
            title="Windsor Hall"
            desc="A cozy, stylish space with modern interiors that bring warmth and sophistication. Perfect for pre-wedding functions and intimate celebrations."
            img={venue3}
          />
        </div>
      </section>

      {/* --- MEET THE TEAM --- */}
      <section className="bg-stone-900 text-white py-24 px-6 relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Meet The Team</h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-light">
              We’re not just event professionals — we’re memory makers, detail lovers, and dream chasers. 
              Our team believes in customizing spaces uniquely for each story.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-12 max-w-4xl mx-auto">
            
            {/* Team Member 1 */}
            <TeamMemberCard 
              name="Vishal Dubey" 
              role="Owner of “Vishal Tent House"
              img={venue19}
            />

            {/* Team Member 2 */}
            {/* <TeamMemberCard 
              name="Karan Chachra" 
              role="Vishal Dubey owner of “Vishal Tent House”"
              img=""
            /> */}
            
          </div>
          
          <div className="mt-16 text-center border-t border-white/10 pt-10">
             <p className="text-gray-400 italic text-lg">
               "Whether it’s a life-size installation or a grand stage, we allow you to paint your own canvas. 
               We are equally happy to collaborate with outside decorators to bring your vision to life."
             </p>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 px-6 bg-white text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <Award size={48} className="mx-auto text-amber-500" />
          <h2 className="text-4xl md:text-6xl font-serif text-gray-900">Ready to begin your story?</h2>
          <p className="text-xl text-gray-600 font-light">
            Get in touch today or schedule a tour to explore our venues in person. 
            At Vishal Tent House, your celebration becomes our legacy.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-amber-600 text-white px-10 py-4 rounded-sm uppercase tracking-widest font-bold hover:bg-amber-700 transition-colors"
          >
            Contact Us
          </motion.button>
        </motion.div>
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

// --- Sub-Components for Cleaner Code ---

const VenueCard = ({ title, desc, img }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="group bg-white border border-gray-100 shadow-lg overflow-hidden"
  >
    <div className="h-64 overflow-hidden">
      <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
    </div>
    <div className="p-8 text-center">
      <h3 className="text-2xl font-serif text-gray-900 mb-4">{title}</h3>
      <div className="w-12 h-[1px] bg-amber-500 mx-auto mb-4"></div>
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

const TeamMemberCard = ({ name, role, img }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="flex items-center gap-6 bg-white/5 p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
  >
    <img src={img} alt={name} className="w-24 h-24 rounded-full object-cover border-2 border-amber-500/50" />
    <div className="text-left">
      <h3 className="text-2xl font-serif text-white">{name}</h3>
      <p className="text-amber-500 text-sm uppercase tracking-wider font-bold mt-1">{role}</p>
    </div>
  </motion.div>
);

export default OurStory;