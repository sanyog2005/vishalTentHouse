import React from 'react';
import { motion } from 'framer-motion';
import { 
  GlassWater, Sun, Palette, Cake, Heart, Briefcase, 
  PartyPopper, Award, Music, CheckCircle2, MessageCircle 
} from 'lucide-react';
import venue13 from '../assets/23.jpeg';
import venue14 from '../assets/14.jpeg';
import venue15 from '../assets/24.jpeg';    
import venue16 from '../assets/25.jpeg';
import venue17 from '../assets/26.jpeg';
import venue18 from '../assets/27.jpeg';
import venue19 from '../assets/28.jpeg';
import venue20 from '../assets/29.jpeg';
import venue21 from '../assets/30.jpeg';
import venue22 from '../assets/31.jpeg';
import venue23 from '../assets/32.jpeg';
import venue24 from '../assets/33.jpeg';
import venue25 from '../assets/34.jpeg';
import venue26 from '../assets/35.jpeg';
import venue27 from '../assets/36.jpeg';

const EventsPage = () => {
  
  // Animation Variant
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="relative min-h-screen bg-white font-sans pt-0">
      
      {/* --- HERO SECTION --- */}
      <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden flex items-center justify-center">
        {/* Parallax Background Image */}
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-black/50 z-10"></div>
           <motion.img 
             initial={{ scale: 1.1 }}
             animate={{ scale: 1 }}
             transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
             src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2070&auto=format&fit=crop" 
             alt="Grand Events" 
             className="w-full h-full object-cover" 
           />
        </div>

        {/* Hero Text */}
        <div className="relative z-20 text-center text-white px-4 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 text-sm md:text-base font-medium tracking-wider uppercase opacity-90"
          >
            <span>Home</span> <span className="text-amber-400">→</span> <span>Events</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight drop-shadow-2xl"
          >
            EVENTS
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl font-light italic text-amber-100"
          >
            Big Or Small, We Host Them All!
          </motion.p>
        </div>
      </div>

      {/* --- INTRO SECTION --- */}
      <section className="py-20 md:py-32 px-6 max-w-5xl mx-auto text-center">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeUp}
          className="space-y-6"
        >
          <h4 className="text-amber-600 font-bold uppercase tracking-[0.2em] text-sm">Celebrate In Grandeur</h4>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
            Every Celebration, <span className="italic text-amber-600">Perfectly Planned</span>
          </h2>
          <div className="w-24 h-[2px] bg-amber-500 mx-auto my-6"></div>
          <p className="text-gray-600 leading-relaxed text-lg font-light">
            At Vishal Tent House, we believe that every event—big or small, personal or professional—deserves to be nothing short of extraordinary. 
            From fairytale weddings and luxurious receptions to high-profile corporate functions and joyous family milestones, 
            Vishal Tent House has become the trusted destination for unforgettable events.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg font-light">
            We don’t just provide a venue—we provide a full event experience. Welcome to the world of Vishal Tent House events, 
            where every gathering becomes a grand story worth telling.
          </p>
        </motion.div>
      </section>

      {/* --- EVENT CATALOG GRID (Interactive Cards) --- */}
      <section className="bg-stone-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-serif text-gray-900">Curated Experiences</h2>
             <p className="text-gray-500 mt-2">Choose your celebration style</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <EventCard 
              icon={<GlassWater size={32} />} 
              title="Cocktail Party" 
              subtitle="Raise a Toast"
              desc="Unforgettable nights with premium drinks, gourmet bites, and lively ambiance."
              img={venue13}
/>
            <EventCard 
              icon={<Sun size={32} />} 
              title="Haldi Ceremony" 
              subtitle="Golden Glow"
              desc="Immerse in tradition with vibrant décor and a joyous, sunny atmosphere."
              img={venue14}
            />
            <EventCard 
              icon={<Palette size={32} />} 
              title="Mehendi Events" 
              subtitle="Colors of Joy"
              desc="Add color to your celebrations with elegant setups and fun entertainment."
              img={venue16}
            />
            <EventCard 
              icon={<Cake size={32} />} 
              title="Birthday Party" 
              subtitle="Make a Wish"
              desc="Custom themes, delicious catering, and lively entertainment for all ages."
              img={venue17}
            />
            <EventCard 
              icon={<Heart size={32} />} 
              title="Anniversary" 
              subtitle="Cherish Love"
              desc="Romantic settings with fine dining and dreamy décor to celebrate your journey."
              img={venue18}
            />
            <EventCard 
              icon={<Briefcase size={32} />} 
              title="Grand Entrance" 
              subtitle="Glamorous welcome"
              desc="Impress every guest with a stunning setup and seamless flow."
              img={venue19}
            />
            <EventCard 
              icon={<PartyPopper size={32} />} 
              title="Grand Reception" 
              subtitle="Lavish Finale"
              desc="End wedding celebrations with a lavish spread and elegant ambiance."
              img={venue20}
            />
            <EventCard 
              icon={<Award size={32} />} 
              title="Sagan Ceremony" 
              subtitle="Celebrate best moments"
              desc="Celebrate the best moments of your journey with a grand ceremony."
              img={venue21}
            />
          </div>
        </div>
      </section>

      {/* --- DETAILED SECTIONS (Zig-Zag Layout) --- */}
      
      {/* 1. Weddings */}
      <DetailSection 
        title="Weddings That Feel Like a Dream"
        text={
          <>
            <p className="mb-4">Weddings are the heart of what we do. Each one is tailored to reflect the couple’s unique journey. Choose from our luxurious venues:</p>
            <ul className="list-disc pl-5 space-y-2 mb-4 text-gray-700">
              <li><strong>Hawaii Glasshouse:</strong> Stunning glass architecture for dreamy haldi & pheras.</li>
              <li><strong>Imperial Hall:</strong> Opulent receptions and big-fat Indian weddings.</li>
              <li><strong>Windsor Hall:</strong> Cozy modern charm for engagement ceremonies.</li>
            </ul>
            <p>We work closely with you to bring your vision to life—whether it’s a floral wonderland or a modern boho vibe.</p>
          </>
        }
        img={venue22}
        reversed={false}
      />

      {/* 2. Corporate */}
      
      {/* 3. Pre-Wedding & Socials */}
      <DetailSection 
        title="Pre-Wedding & Festive Celebrations"
        text={
          <>
            <p className="mb-4">The magic doesn’t start or end at the wedding day. From <strong>Mehendi functions</strong> filled with color to <strong>Cocktail nights</strong> with curated bar experiences, we handle it all.</p>
            <p className="mb-4">We also love celebrating cultural festivities! From Diwali parties and New Year galas to Christmas carnivals — Vishal Tent House is the perfect backdrop for seasonal joy. Want a Gatsby-style New Year party? We’ll make it happen.</p>
          </>
        }
        img={venue23}
        reversed={false}
      />

      {/* --- SERVICES / EXECUTION --- */}
      <section className="bg-stone-900 text-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Flawless Execution, Every Time</h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-light text-lg">
              At Vishal Tent House, planning an event is never overwhelming—because you’re never alone. 
              From your first meeting to the final guest departure, we offer complete coordination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {[
               "Dedicated Event Manager", "Decor & Theme Planning", "In-house Catering", 
               "Professional Service Staff", "Audio-visual Setup", "Parking & Valet Assistance"
             ].map((service, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: idx * 0.1 }}
                 className="flex items-center gap-4 bg-white/5 p-6 rounded-lg border border-white/10"
               >
                 <CheckCircle2 className="text-amber-500 shrink-0" size={24} />
                 <span className="text-lg font-light tracking-wide">{service}</span>
               </motion.div>
             ))}
          </div>

          {/* Why Choose Us */}
          <div className="mt-20 border-t border-white/10 pt-16 text-center">
            <h3 className="text-2xl font-serif text-amber-500 mb-8">Why Choose Vishal Tent House?</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h4 className="text-xl font-bold mb-2">Versatile Venues</h4>
                <p className="text-sm text-gray-400">Three unique spaces for every style.</p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Experienced Team</h4>
                <p className="text-sm text-gray-400">Trusted by thousands of families.</p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Stress-Free</h4>
                <p className="text-sm text-gray-400">From ideation to execution.</p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Trusted Network</h4>
                <p className="text-sm text-gray-400">Best vendors in one place.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 px-6 bg-amber-50 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <Music size={48} className="mx-auto text-amber-600" />
          <h2 className="text-4xl md:text-6xl font-serif text-gray-900">Your Moment, Our Mission</h2>
          <p className="text-xl text-gray-600 font-light">
            Every event at Vishal Tent House is a story in the making. Whether you’re raising a toast to love, 
            success, or new beginnings — we’re here to help you celebrate it in the most memorable way possible.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-900 text-white px-10 py-4 rounded-sm uppercase tracking-widest font-bold hover:bg-gray-800 transition-colors shadow-xl"
          >
            Start Planning
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

// --- Sub-Components ---

// 1. Event Card (Grid Item)
const EventCard = ({ icon, title, subtitle, desc, img }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="group relative h-[400px] rounded-lg overflow-hidden cursor-pointer shadow-lg"
  >
    {/* Background Image */}
    <img src={img} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300"></div>
    
    {/* Content */}
    <div className="absolute bottom-0 left-0 w-full p-6 text-white transform transition-transform duration-300">
      <div className="mb-4 text-amber-400 group-hover:scale-110 transition-transform origin-left">
        {icon}
      </div>
      <p className="text-xs uppercase tracking-widest font-bold text-amber-400 mb-1">{subtitle}</p>
      <h3 className="text-2xl font-serif mb-3">{title}</h3>
      <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 h-0 group-hover:h-auto">
        {desc}
      </p>
    </div>
  </motion.div>
);

// 2. Detail Section (Zig-Zag)
const DetailSection = ({ title, text, img, reversed }) => (
  <section className={`py-20 px-6 ${reversed ? 'bg-amber-50/50' : 'bg-white'}`}>
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Text Side */}
      <motion.div 
        initial={{ opacity: 0, x: reversed ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className={`order-2 ${reversed ? 'lg:order-2' : 'lg:order-1'}`}
      >
        <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-6">{title}</h2>
        <div className="w-16 h-[2px] bg-amber-500 mb-8"></div>
        <div className="text-gray-600 leading-relaxed text-lg font-light">
          {text}
        </div>
      </motion.div>

      {/* Image Side */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className={`relative h-[400px] md:h-[500px] order-1 ${reversed ? 'lg:order-1' : 'lg:order-2'}`}
      >
        <div className={`absolute top-4 ${reversed ? 'left-4' : 'right-4'} w-full h-full border-2 border-amber-500/30 rounded-lg`}></div>
        <img src={img} alt={title} className="relative z-10 w-full h-full object-cover rounded-lg shadow-xl" />
      </motion.div>
    </div>
  </section>
);

export default EventsPage;