import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Waves, Tent, Sparkles, Lamp, 
  ArrowRight, MessageCircle, MapPin, Star 
} from 'lucide-react';
import venueOne from '../assets/6.jpeg';
import venue2 from '../assets/22.jpeg';
import venue3 from '../assets/23.jpeg';
import venue4 from '../assets/24.jpeg';

const VenuesPage = () => {

  const venues = [
    {
      id: 1,
      title: "Bali Pool Side",
      tagline: "Tropical Serenity",
      desc: "Escape to a tropical paradise right in the city. The Bali Pool Side offers a mesmerizing blend of aquatic beauty and lush open lawns, perfect for sundowners and chic cocktail evenings.",
      img: venue2,
      features: [
        { icon: <Tent size={18} />, text: "Open Lawn" },
        { icon: <Users size={18} />, text: "Capacity: 350 - 550 Pax" },
        { icon: <Waves size={18} />, text: "Infinity-Pool Design" },
        { icon: <Lamp size={18} />, text: "Cabana Dining Area" }
      ]
    },
    {
      id: 2,
      title: "Hawaii Glass House",
      tagline: "Nature Meets Luxury",
      desc: "A stunning architectural marvel wrapped in glass. Surrounded by fountains and greenery, this venue brings the outdoors in, offering a climate-controlled environment with a magical view.",
      img: venue3,
      features: [
        { icon: <Sparkles size={18} />, text: "Glass Architecture" },
        { icon: <Users size={18} />, text: "Capacity: Up To 800 Pax" },
        { icon: <Waves size={18} />, text: "Fountain Pond" },
        { icon: <Tent size={18} />, text: "Open & Covered Mix" }
      ]
    },
    {
      id: 3,
      title: "Imperial Hall",
      tagline: "The Royal Statement",
      desc: "Grandeur redefined. The Imperial Hall features majestic entryways and high ceilings, designed for those who want their wedding to feel like a royal coronation.",
      img: venue4,
      features: [
        { icon: <Tent size={18} />, text: "Fully AC Hall" },
        { icon: <Users size={18} />, text: "Capacity: Up To 500 Pax" },
        { icon: <ArrowRight size={18} />, text: "Grand Entry Passage" },
        { icon: <Lamp size={18} />, text: "Modern Royal Decor" }
      ]
    },
    {
      id: 4,
      title: "Windsor Hall",
      tagline: "Modern Sophistication",
      desc: "Chic, contemporary, and versatile. Windsor Hall boasts state-of-the-art RGB lighting and a unique mezzanine floor, making it ideal for high-energy sangeets and modern receptions.",
      img: venueOne,
      features: [
        { icon: <Sparkles size={18} />, text: "RGB Light System" },
        { icon: <Users size={18} />, text: "Capacity: Up To 500 Pax" },
        { icon: <ArrowRight size={18} />, text: "Mezzanine Floor" },
        { icon: <Lamp size={18} />, text: "Luxury Interiors" }
      ]
    }
  ];

  return (
    <div className="relative min-h-screen bg-stone-50 font-sans pt-0">
      
      {/* --- CINEMATIC HERO --- */}
      <div className="relative h-[80vh] w-full overflow-hidden flex items-end pb-20 justify-center">
        {/* Background Image with Zoom Effect */}
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
           <motion.img 
             initial={{ scale: 1.1 }}
             animate={{ scale: 1 }}
             transition={{ duration: 10, ease: "easeOut" }}
             src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2070&auto=format&fit=crop" 
             alt="Venues Hero" 
             className="w-full h-full object-cover" 
           />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-center gap-3 text-sm font-bold tracking-[0.3em] uppercase text-amber-500">
               <span className="w-8 h-[1px] bg-amber-500"></span>
               <span>Our Collection</span>
               <span className="w-8 h-[1px] bg-amber-500"></span>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif tracking-tight drop-shadow-2xl">
              The Venues
            </h1>
            <p className="text-lg md:text-xl font-light text-gray-300 leading-relaxed max-w-2xl mx-auto">
              From the tropical serenity of our poolsides to the architectural marvel of our glasshouses, 
              discover the perfect canvas for your masterpiece event.
            </p>
          </motion.div>
        </div>
      </div>

      {/* --- INTRO CARD --- */}
      <div className="relative z-30 -mt-10 px-6">
        <div className="bg-white max-w-5xl mx-auto shadow-2xl p-8 md:p-12 rounded-sm border-t-4 border-amber-500 text-center">
           <Star className="mx-auto text-amber-500 mb-4" size={32} fill="currentColor" />
           <h3 className="text-2xl font-serif text-gray-900 mb-2">A Space for Every Story</h3>
           <p className="text-gray-600 font-light">
             We offer a diverse range of venues to suit every occasion. Start planning your unforgettable event today!
           </p>
        </div>
      </div>

      {/* --- IMMERSIVE PARALLAX VENUE SECTIONS --- */}
      <div className="flex flex-col mt-20">
        {venues.map((venue, index) => (
          <ParallaxVenueSection 
            key={venue.id} 
            data={venue} 
            index={index} 
          />
        ))}
      </div>

      {/* --- FINAL CTA --- */}
      <section className="py-24 px-6 bg-stone-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-3xl mx-auto space-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-serif">Your Dream Venue Awaits</h2>
          <p className="text-gray-400 text-lg font-light">
            Don't just look at pictures. Come feel the ambiance yourself.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            {/* <button className="bg-amber-600 text-white px-10 py-4 rounded-sm uppercase tracking-widest font-bold hover:bg-amber-700 transition-colors shadow-lg">
              Book A Site Visit
            </button>
            <button className="bg-transparent border border-white/30 text-white px-10 py-4 rounded-sm uppercase tracking-widest font-bold hover:bg-white hover:text-black transition-all">
              Download Brochure
            </button> */}
          </div>
        </motion.div>
      </section>

      {/* --- Floating WhatsApp --- */}
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

// --- Sub-Component: Parallax Venue Section ---
const ParallaxVenueSection = ({ data, index }) => {
  const isEven = index % 2 === 0;

  return (
    <section className="relative w-full h-auto min-h-[90vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
      
      {/* 1. Fixed Background Image (Parallax Effect) */}
      {/* 'bg-fixed' creates the parallax effect on desktop */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed md:bg-fixed"
        style={{ backgroundImage: `url(${data.img})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* 2. Glassmorphism Content Card */}
      <div className={`relative z-10 container mx-auto px-6 py-20 flex ${isEven ? 'justify-start' : 'justify-end'}`}>
        <motion.div 
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-12 max-w-2xl rounded-sm shadow-2xl text-white"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[2px] w-10 bg-amber-400"></span>
            <span className="text-amber-400 font-bold uppercase tracking-widest text-xs">{data.tagline}</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
            {data.title}
          </h2>

          <p className="text-gray-200 text-lg font-light leading-relaxed mb-8">
            {data.desc}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {data.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3 text-gray-100">
                <div className="p-2 bg-white/10 rounded-full text-amber-400">
                   {feature.icon}
                </div>
                <span className="text-sm font-medium tracking-wide">{feature.text}</span>
              </div>
            ))}
          </div>

          <button className="group flex items-center gap-2 text-white border-b border-amber-400 pb-1 hover:text-amber-400 transition-colors">
            <span className="uppercase tracking-widest text-sm font-bold">Explore Details</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>

        </motion.div>
      </div>

    </section>
  );
};

export default VenuesPage;