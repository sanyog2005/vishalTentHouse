import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import venueOne from '../assets/11.jpeg';
import venue2 from '../assets/22.jpeg';
import venue3 from '../assets/23.jpeg';
import venue4 from '../assets/24.jpeg';




// --- 1. ASSETS & UTILS ---

// A subtle noise texture to give the page a "premium paper" feel
const GrainOverlay = () => (
  <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-20 mix-blend-multiply">
    <svg className='w-full h-full'>
      <filter id='noiseFilter'>
        <feTurbulence type='fractalNoise' baseFrequency='0.6' stitchTiles='stitch' />
      </filter>
      <rect width='100%' height='100%' filter='url(#noiseFilter)' />
    </svg>
  </div>
);

// Reuse your beautiful floral SVGs
const WatercolorFlower = ({ size = 60, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g opacity="0.9">
      <path d="M48.9917 13.0005C53.3484 11.2663 63.0509 15.5615 66.1687 18.6323C71.6643 24.0454 76.9052 29.558 81.3783 35.6995C83.8511 39.0943 90.9806 45.5207 89.0956 51.1348C87.7267 55.2118 81.6216 58.0216 77.1573 59.8966C70.7684 62.5801 65.0526 67.4995 57.8331 69.8126C51.4434 71.8598 43.9079 70.0986 37.5102 67.8527C28.1284 64.5588 17.6638 61.0754 13.802 50.9573C11.2304 44.219 15.9669 36.2012 20.9287 30.8156C25.4686 25.8878 31.0607 21.6806 37.4754 17.9437C39.8488 16.561 43.4422 15.2089 48.9917 13.0005Z" fill="#E88D46" fillOpacity="0.3"/>
      <path d="M57.3052 27.657C61.1345 26.6369 67.4721 29.2255 70.1675 31.1365C75.2146 35.0684 79.8426 39.4264 83.3226 44.6453C84.6916 48.6381 81.4458 51.2176 78.7189 52.9447C73.8758 56.0113 69.8731 60.6846 63.851 62.3231C58.8157 63.6929 51.4567 63.1686 46.7893 60.5091C39.8361 56.5477 33.6275 51.6311 30.2634 42.2621C28.9649 38.6454 31.5672 34.5594 34.866 31.2256C38.1227 27.9336 41.7769 24.6924 46.5152 22.3702C49.3114 21.0001 53.2053 28.7497 57.3052 27.657Z" fill="#E88D46" fillOpacity="0.5"/>
      <path d="M63.7293 41.8118C66.8153 42.4276 68.4235 47.1567 68.3106 50.4988C68.1016 56.6864 66.0603 62.8378 61.4277 67.1532C57.5199 70.7938 50.9575 71.3491 46.1014 68.9076C41.5581 66.6241 37.8638 62.9967 34.6401 58.3236C31.2383 53.393 31.6509 45.8234 34.9957 40.9629C38.5356 35.8199 43.9494 31.7259 49.4221 29.3028C51.3103 28.4669 54.0824 26.1412 57.0204 25.1936C60.4128 24.0992 59.9665 41.0608 63.7293 41.8118Z" fill="#E88D46" fillOpacity="0.7"/>
      <path d="M50.6405 48.9717C52.4852 49.8447 53.0248 53.0875 52.5804 55.1939C51.4015 60.7804 48.3755 66.1884 44.1068 69.7562C41.5757 71.8724 36.3525 71.726 34.0968 68.4618C32.6162 66.3189 32.0625 63.1832 32.123 60.5405C32.2381 55.5133 34.2238 50.1633 38.4904 46.877C42.0443 44.1403 45.9399 40.5314 50.2302 39.2873C53.2807 38.4029 56.8584 37.2995 59.2113 38.6274C63.3729 40.9759 56.4325 42.9508 57.4869 45.8697C58.4388 48.5049 57.5292 50.1295 54.9476 50.502C53.3021 50.7393 51.6979 50.3733 50.0831 50.7071C48.7487 50.9829 48.6113 48.0117 50.6405 48.9717Z" fill="#E88D46"/>
    </g>
  </svg>
);

const WatercolorLeafBranch = ({ size = 60, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g opacity="0.8">
    <path d="M45.2236 84.5136C47.0147 79.7165 48.3454 74.6292 49.7052 69.5112C51.9788 60.9542 53.6457 52.2145 55.4686 43.5137C57.7054 32.8389 59.918 22.1596 63.0468 11.7623C63.6356 9.80562 65.0415 6.64057 63.706 4.98169C62.4334 3.40087 59.3889 5.24339 57.9421 6.56823C51.7973 12.1956 47.0739 19.4304 43.3076 26.9583C39.1378 35.2935 35.171 44.2163 33.5564 53.5095C32.4762 59.7276 32.0251 66.5944 34.6966 72.2191C36.6612 76.3546 39.438 80.5343 43.4118 82.9275C44.1497 83.372 44.5861 86.2212 45.2236 84.5136Z" fill="#4A6741" fillOpacity="0.4"/>
    <path d="M53.8522 47.558C57.2987 45.8701 61.3833 45.4565 64.9625 44.2602C72.8863 41.6113 81.3847 38.002 88.2434 33.0606C89.713 32.0015 92.5444 30.122 91.3901 28.5178C90.2296 26.9046 86.6053 28.3979 84.7427 29.0912C76.588 32.1265 67.1954 34.3262 59.3148 37.7588C51.7935 41.035 45.1174 45.5513 39.7066 51.2111C38.342 52.6384 36.9983 54.9288 38.3244 56.6946C40.2402 59.2461 45.541 54.2258 47.8538 52.326C50.0472 50.5238 51.7395 48.5929 53.8522 47.558Z" fill="#4A6741" fillOpacity="0.6"/>
    <path d="M46.4751 28.6152C42.7125 29.4532 38.6979 30.339 35.0581 31.7365C27.0002 34.8308 18.4367 38.4793 11.7175 44.0728C10.2776 45.2713 7.52082 47.3929 8.87973 48.8277C10.2455 50.2695 13.8303 48.4765 15.6556 47.6377C23.6457 43.9661 32.9189 40.9877 40.5342 36.869C47.8013 32.9388 53.9948 27.8378 58.9737 21.7794C60.2294 20.2515 61.4042 17.8292 59.9122 16.1977C57.7566 13.8411 53.1715 19.6273 51.076 21.826C49.0889 23.9108 48.1229 28.2482 46.4751 28.6152Z" fill="#4A6741" fillOpacity="0.6"/>
    </g>
    </svg>
);

// --- 2. CONFIGURATION ---

const floatingAnimation = `
  @keyframes float {
    0% { transform: translateY(0) rotate(0deg); opacity: 0.4; }
    50% { transform: translateY(-25px) rotate(8deg); opacity: 0.7; }
    100% { transform: translateY(0) rotate(0deg); opacity: 0.4; }
  }
`;

const floatingElements = [
  { Component: WatercolorFlower, size: 140, style: { top: '-5%', left: '-2%' }, delay: '0s', duration: '18s', className: "-rotate-12 blur-[1px]" },
  { Component: WatercolorLeafBranch, size: 160, style: { top: '10%', right: '-4%' }, delay: '2s', duration: '20s', className: "rotate-45" },
  { Component: WatercolorLeafBranch, size: 120, style: { top: '50%', left: '-5%' }, delay: '5s', duration: '22s', className: "rotate-12 blur-[2px]" },
  { Component: WatercolorFlower, size: 180, style: { bottom: '-5%', right: '-2%' }, delay: '1s', duration: '19s', className: "rotate-12" },
  { Component: WatercolorLeafBranch, size: 100, style: { bottom: '20%', left: '10%' }, delay: '3s', duration: '16s', className: "-rotate-45 opacity-30" },
];

const venuesData = [
  {
    id: 1,
    name: "Bali  sdf Pool Side",
    image: venueOne,
    category: "Outdoor Luxury",
    description: "A tropical paradise featuring open cabanas and serene water features.",
    capacity: "800 Guests",
    features: ["Fountain Pond", "Cabana Dining", "Ambient Lighting"],
  },
  {
    id: 2,
    name: "Hawaii Glass House",
    image: venue2,
    category: "Botanical Garden",
    description: "Surrounded by lush greenery, perfect for sun-drenched day weddings.",
    capacity: "800 Guests",
    features: ["Panoramic Views", "Climate Controlled", "Botanical Decor"],
  },
  {
    id: 3,
    name: "The Roseate",
    image: venue3,
    category: "Intimate Elegance",
    description: "An sophisticated setting designed for exclusive, high-end gatherings.",
    capacity: "500 Guests",
    features: ["Modern Acoustics", "Valet Service", "Private Suites"],
  },
  {
    id: 4,
    name: "Crystal Ballroom",
    image: venue4,
    category: "Grand Ballroom",
    description: "A majestic hall with state-of-the-art visuals for royal celebrations.",
    capacity: "1000 Guests",
    features: ["LED Mapping", "Hydraulic Stage", "Premium Audio"],
  }
];

// --- 3. MAIN COMPONENTS ---

const Venues = () => {
  return (
    <section className="relative py-24 bg-[#fffaf5] overflow-hidden">
      {/* Texture Overlay */}
      <GrainOverlay />
      
      {/* Background Animation Styles */}
      <style>{floatingAnimation}</style>

      {/* Floating Flowers */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {floatingElements.map((item, index) => (
          <div
            key={index}
            className="absolute"
            style={{
              ...item.style,
              animation: `float ${item.duration} ease-in-out infinite`,
              animationDelay: item.delay,
            }}
          >
            <item.Component size={item.size} className={item.className} />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 space-y-4"
        >
          <p className="text-[#e88d46] uppercase tracking-[0.2em] text-xs font-bold">Discover Perfection</p>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800">Exclusive Venues</h2>
          <div className="w-20 h-px bg-[#e88d46] mx-auto opacity-50"></div>
        </motion.div>

        {/* Grid Layout - Staggered Effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-20 max-w-6xl mx-auto">
          {venuesData.map((venue, index) => (
            <div key={venue.id} className={`${index % 2 !== 0 ? 'md:translate-y-16' : ''}`}>
               <VenueCard venue={venue} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const VenueCard = ({ venue, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative w-full h-[550px] cursor-pointer perspective-1000"
    >
      {/* Offset Border Decoration */}
      <div className="absolute inset-0 border border-[#e88d46]/30 rounded-[100px] translate-x-3 translate-y-3 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>

      {/* Main Card Container - Stadium/Pill Shape */}
      <div className="relative w-full h-full rounded-[100px] overflow-hidden bg-gray-100 shadow-xl transition-all duration-500 group-hover:shadow-2xl">
        
        {/* Image Layer */}
        <div className="absolute inset-0">
          <img 
            src={venue.image} 
            alt={venue.name} 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter sepia-[0.3] group-hover:sepia-0"
          />
          {/* Base gradient to make white text readable before hover */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 opacity-80 group-hover:opacity-0 transition-opacity duration-500"></div>
        </div>

        {/* HOVER OVERLAY 
            Using glassmorphism + colored gradient instead of solid block
        */}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-[#e88d46]/95 via-[#e88d46]/85 to-[#e88d46]/40 
                     backdrop-blur-[4px] opacity-0 group-hover:opacity-100 
                     transition-all duration-500 ease-in-out"
        >
          <div className="flex flex-col items-center justify-center h-full text-center p-8 text-white">
            
            {/* Animated Content Wrapper */}
            <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-out space-y-6">
              
              {/* Top Label */}
              <span className="inline-block px-3 py-1 border border-white/30 rounded-full text-[10px] uppercase tracking-widest bg-white/10 backdrop-blur-md">
                {venue.category}
              </span>

              {/* Title with Serif font */}
              <h3 className="text-3xl md:text-4xl font-serif italic relative">
                {venue.name}
              </h3>

              {/* Divider */}
              <div className="w-12 h-px bg-white/50 mx-auto"></div>

              {/* Description */}
              <p className="text-sm font-light leading-relaxed max-w-[280px] mx-auto opacity-90">
                {venue.description}
              </p>

              {/* Features Grid */}
              <div className="flex flex-wrap justify-center gap-2 text-xs font-medium tracking-wide pt-2">
                 {venue.features.map((f, i) => (
                   <span key={i} className="flex items-center gap-1 opacity-80">
                     • {f}
                   </span>
                 ))}
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <button className="group/btn relative inline-flex items-center gap-2 px-8 py-3 bg-white text-[#e88d46] rounded-full overflow-hidden transition-all hover:bg-orange-50">
                  <span className="relative z-10 text-xs font-bold tracking-widest uppercase">View Details</span>
                  <ArrowUpRight className="w-4 h-4 relative z-10 transition-transform group-hover/btn:rotate-45" />
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* Resting State Label (Visible when not hovering) */}
        <div className="absolute bottom-10 left-0 right-0 text-center text-white opacity-100 group-hover:opacity-0 transition-opacity duration-300 transform group-hover:translate-y-4">
           <h3 className="text-2xl font-serif mb-1">{venue.name}</h3>
           <p className="text-xs uppercase tracking-widest opacity-80">{venue.capacity}</p>
        </div>

      </div>
    </motion.div>
  );
};

export default Venues;