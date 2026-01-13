import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ArrowRight } from 'lucide-react';
import venue5 from '../assets/25.jpeg';
import venue6 from '../assets/6.jpeg';
import venue7 from '../assets/20.jpeg';
import venue8 from '../assets/26.jpeg';
import venue9 from '../assets/27.jpeg';


// --- 1. ASSETS & UTILS ---

// Premium Grain Texture
const GrainOverlay = () => (
  <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0 mix-blend-multiply">
    <svg className='w-full h-full'>
      <filter id='noiseFilter'>
        <feTurbulence type='fractalNoise' baseFrequency='0.6' stitchTiles='stitch' />
      </filter>
      <rect width='100%' height='100%' filter='url(#noiseFilter)' />
    </svg>
  </div>
);

// Custom Floral SVGs
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

// --- 2. FLOATING BACKGROUND CONFIGURATION ---
const floatingAnimation = `
  @keyframes float {
    0% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-15px) rotate(3deg); }
    100% { transform: translateY(0) rotate(0deg); }
  }
`;

// SIGNIFICANTLY INCREASED FLORAL DENSITY
const floatingElements = [
  // --- Top Left Cluster ---
  { Component: WatercolorLeafBranch, size: 160, style: { top: '-5%', left: '-4%' }, delay: '0s', duration: '22s', className: "rotate-180 opacity-80" },
  { Component: WatercolorFlower, size: 100, style: { top: '10%', left: '2%' }, delay: '2s', duration: '19s', className: "-rotate-12 opacity-60" },
  { Component: WatercolorLeafBranch, size: 70, style: { top: '18%', left: '-2%' }, delay: '4s', duration: '25s', className: "rotate-45 opacity-40 blur-[1px]" },

  // --- Top Right Cluster ---
  { Component: WatercolorFlower, size: 180, style: { top: '-8%', right: '-5%' }, delay: '1s', duration: '24s', className: "rotate-12 opacity-70" },
  { Component: WatercolorLeafBranch, size: 110, style: { top: '5%', right: '6%' }, delay: '3s', duration: '21s', className: "-rotate-90 opacity-50" },

  // --- Mid-Section Fillers (More subtle) ---
  { Component: WatercolorFlower, size: 140, style: { top: '35%', left: '-5%' }, delay: '5s', duration: '28s', className: "rotate-45 opacity-30 blur-[2px]" },
  { Component: WatercolorLeafBranch, size: 90, style: { top: '45%', right: '-2%' }, delay: '2s', duration: '23s', className: "-rotate-12 opacity-40" },
  { Component: WatercolorFlower, size: 60, style: { top: '55%', left: '8%' }, delay: '6s', duration: '26s', className: "-rotate-45 opacity-25" },
  { Component: WatercolorLeafBranch, size: 120, style: { top: '60%', right: '2%' }, delay: '4s', duration: '20s', className: "rotate-90 opacity-30 blur-[1px]" },

  // --- Bottom Left Cluster ---
  { Component: WatercolorFlower, size: 150, style: { bottom: '-5%', left: '-3%' }, delay: '3s', duration: '21s', className: "-rotate-12 opacity-70" },
  { Component: WatercolorLeafBranch, size: 100, style: { bottom: '12%', left: '4%' }, delay: '1s', duration: '18s', className: "rotate-45 opacity-50" },
  
  // --- Bottom Right Cluster ---
  { Component: WatercolorLeafBranch, size: 170, style: { bottom: '-10%', right: '-6%' }, delay: '0s', duration: '25s', className: "-rotate-45 opacity-80" },
  { Component: WatercolorFlower, size: 90, style: { bottom: '15%', right: '3%' }, delay: '4s', duration: '22s', className: "rotate-12 opacity-60" },
  { Component: WatercolorFlower, size: 110, style: { bottom: '2%', right: '12%' }, delay: '2s', duration: '20s', className: "-rotate-12 opacity-30 blur-[2px]" },

   // --- Center Top/Bottom Hints ---
  { Component: WatercolorFlower, size: 200, style: { top: '-15%', left: '45%' }, delay: '7s', duration: '30s', className: "opacity-20 blur-[3px]" },
  { Component: WatercolorLeafBranch, size: 80, style: { bottom: '-2%', left: '40%' }, delay: '5s', duration: '27s', className: "rotate-12 opacity-30" },
];


// --- 3. SLIDESHOW IMAGES ---
const slideshowImages = [
  venue5, 
  venue6, 
  venue7, 
  venue8, 
  venue9, 
];

// --- 4. SUB-COMPONENTS ---
const EventListing = ({ category, title }) => (
  <div className="flex flex-col items-center text-center group cursor-pointer p-4 rounded-lg hover:bg-white/50 transition-all duration-300">
    <span className="text-[#4A6741] font-medium mb-1 tracking-wider text-xs uppercase">{category}</span>
    <h3 className="text-2xl md:text-3xl font-serif text-[#1a1a1a] mb-3 uppercase tracking-wide group-hover:text-[#E88D46] transition-colors duration-300">
      {title}
    </h3>
    <div className="flex items-center text-[#E88D46] font-semibold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
      <span className="mr-2">View Gallery</span>
      <ArrowRight className="w-3 h-3" />
    </div>
  </div>
);

const Divider = () => (
  <div className="flex items-center w-32 my-6 opacity-40">
    <div className="h-px bg-[#E88D46] flex-grow"></div>
    <div className="mx-2 text-[#E88D46]">✦</div>
    <div className="h-px bg-[#E88D46] flex-grow"></div>
  </div>
);

// --- 5. MAIN SECTION ---
const RecentEventsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideshowImages.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 md:py-36 bg-[#fffbf7] overflow-hidden">
      
      {/* Texture Overlay */}
      <GrainOverlay />
      
      <style>{floatingAnimation}</style>

      {/* --- LUSH FLORAL BACKGROUND LAYER --- */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {floatingElements.map((item, index) => (
          <div
            key={index}
            className="absolute"
            style={{
              ...item.style,
              // Slight opacity variation in the animation for more life
              animation: `float ${item.duration} ease-in-out infinite alternate`,
              animationDelay: item.delay,
            }}
          >
            <item.Component size={item.size} className={item.className} />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex justify-center items-center gap-2 mb-4">
             <div className="w-8 h-px bg-[#E88D46]"></div>
             <Heart className="w-4 h-4 fill-[#E88D46] text-[#E88D46]" />
             <div className="w-8 h-px bg-[#E88D46]"></div>
          </div>
          <span className="text-[#E88D46] font-bold text-xs uppercase tracking-[0.2em] block mb-3">
            Moments to Remember
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-[#1a1a1a] mb-6">
            Recent Celebrations
          </h2>
          <p className="text-gray-500 font-light max-w-xl mx-auto leading-relaxed bg-white/60 p-2 rounded-lg backdrop-blur-[1px]">
            From intimate gatherings to grand ballroom affairs, explore our gallery of recently hosted unforgettable events.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-16 lg:gap-8">
          
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center space-y-4"
          >
            <EventListing category="Reception" title="Imperial Hall" />
            <Divider />
            <EventListing category="Garden Party" title="Hawaii Glass House" />
          </motion.div>

          {/* Center Slideshow Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex justify-center z-20"
          >
            {/* Decorative Ring behind image */}
            <div className="absolute inset-0 border border-[#E88D46] rounded-full opacity-20 transform scale-110 rotate-12"></div>
            
            <div className="w-full max-w-[450px] h-[550px] relative">
              <AnimatePresence mode="popLayout">
                <motion.img
                  key={currentIndex}
                  src={slideshowImages[currentIndex]}
                  alt="Wedding Event"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2 }}
                  className="w-full h-full object-cover shadow-2xl absolute inset-0"
                  style={{
                    // Arch / Window Shape
                    borderRadius: '200px 200px 20px 20px',
                  }}
                />
              </AnimatePresence>
              
              {/* Inner Border for definition */}
              <div className="absolute inset-0 border-[6px] border-white/30 pointer-events-none" style={{ borderRadius: '200px 200px 20px 20px' }}></div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center space-y-4"
          >
            <EventListing category="Banquet" title="Windsor Hall" />
            <Divider />
            <EventListing category="Poolside" title="Bali Pool Side" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default RecentEventsSection;