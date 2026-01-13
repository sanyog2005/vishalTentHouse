import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ArrowRight, Instagram, ChevronLeft, ChevronRight } from 'lucide-react';
import venue12 from '../assets/31.jpeg';
import venue13 from '../assets/3.jpeg';
import venue14 from '../assets/35.jpeg';
import venue15 from '../assets/34.jpeg';
import venue16 from '../assets/6.jpeg';
import venue17 from '../assets/15.jpeg';
import venue18 from '../assets/33.jpeg';
import venue19 from '../assets/9.jpeg';
import venue20 from '../assets/10.jpeg';
import venue21 from '../assets/22.jpeg';
import venue22 from '../assets/12.jpeg';
import venue23 from '../assets/13.jpeg';
import venue24 from '../assets/32.jpeg';

// --- Data ---
const galleryImages = [
  // Left Column
  { src: venue13, alt: "stage" },

  { src: venue15, alt: "Couple on stage" },
  
  // Center Column
  { src: venue24, alt: "Bride portrait" },
  
  // Right Column (Grid)
  { src: venue14, alt: "Bride portrait" },
  { src: venue18, alt: "Couple with guests" },
  { src: venue16, alt: "Floral decor" },
  { src: venue17, alt: "Bride entry" },
];

// --- Reusable Image Card ---
const ImageCard = ({ src, alt, className, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: delay }}
    className={`relative group overflow-hidden rounded-2xl shadow-md ${className}`}
  >
    <motion.img
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      src={src}
      alt={alt}
      className="w-full h-full object-cover transition-transform duration-500"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
      <p className="text-white font-serif text-sm tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        View Memory
      </p>
    </div>
  </motion.div>
);

const GallerySection2 = () => {
  // --- Mobile Slider Logic ---
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({ x: direction > 0 ? 300 : -300, opacity: 0, scale: 0.95 }),
    center: { zIndex: 1, x: 0, opacity: 1, scale: 1 },
    exit: (direction) => ({ zIndex: 0, x: direction < 0 ? 300 : -300, opacity: 0, scale: 0.95 })
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = galleryImages.length - 1;
      if (nextIndex >= galleryImages.length) nextIndex = 0;
      return nextIndex;
    });
  };

  return (
    <section className="py-20 md:py-32 bg-[#fffdf9] overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* --- Header --- */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16 space-y-4"
        >
          <div className="flex justify-center items-center gap-2 mb-4">
             <div className="h-[1px] w-8 md:w-12 bg-[#E88D46]" />
             <Heart className="w-5 h-5 fill-[#E88D46] text-[#E88D46]" />
             <div className="h-[1px] w-8 md:w-12 bg-[#E88D46]" />
          </div>
          <span className="text-[#E88D46] font-medium text-xs md:text-sm uppercase tracking-[0.3em] block">
            Vishal Tent House
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-[#2A1B3D] tracking-tight">
            Captured Moments
          </h2>
        </motion.div>

        {/* =========================================
            MOBILE VIEW: CAROUSEL (< md)
           ========================================= */}
        <div className="block md:hidden relative h-[450px] w-full max-w-sm mx-auto">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = Math.abs(offset.x) * velocity.x;
                if (swipe < -10000) paginate(1);
                else if (swipe > 10000) paginate(-1);
              }}
              className="absolute w-full h-full rounded-2xl overflow-hidden shadow-xl"
            >
              <img src={galleryImages[currentIndex].src} alt={galleryImages[currentIndex].alt} className="w-full h-full object-cover pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6 pt-20">
                <p className="text-white font-serif text-lg tracking-wide">{galleryImages[currentIndex].alt}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation Buttons */}
          <button className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white/90 text-[#2A1B3D] p-3 rounded-full shadow-lg z-10" onClick={() => paginate(-1)}>
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white/90 text-[#2A1B3D] p-3 rounded-full shadow-lg z-10" onClick={() => paginate(1)}>
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* =========================================
            DESKTOP VIEW: PERFECT GRID (>= md)
           ========================================= */}
        {/* We use h-[800px] to enforce a specific height. 
           'grid-cols-12' allows flexible width distribution (3/12, 5/12, 4/12).
        */}
        <div className="hidden md:grid grid-cols-12 gap-6 h-[800px]">
          
          {/* LEFT COLUMN (Span 3): 2 Stacked Images */}
          <div className="col-span-3 flex flex-col gap-6 h-full">
            <ImageCard src={galleryImages[0].src} alt={galleryImages[0].alt} className="flex-1 w-full" delay={0} />
            <ImageCard src={galleryImages[1].src} alt={galleryImages[1].alt} className="flex-1 w-full" delay={0.1} />
          </div>

          {/* CENTER COLUMN (Span 5): 1 Tall Image */}
          <div className="col-span-5 h-full">
            <ImageCard src={galleryImages[2].src} alt={galleryImages[2].alt} className="h-full w-full" delay={0.2} />
          </div>

          {/* RIGHT COLUMN (Span 4): 2x2 Grid filling the height */}
          <div className="col-span-4 grid grid-cols-2 grid-rows-2 gap-4 h-full">
            {galleryImages.slice(3, 7).map((image, index) => (
              <ImageCard 
                key={index}
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full" // Forces image to fill the grid cell perfectly
                delay={0.3 + index * 0.1} 
              />
            ))}
          </div>

        </div>

        {/* --- Footer --- */}
        <div className="mt-16 flex justify-center">
          <button className="group relative px-8 py-4 bg-[#2A1B3D] text-white rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
            <span className="absolute inset-0 w-full h-full bg-[#E88D46] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
            <span className="relative flex items-center gap-3 font-medium tracking-widest uppercase text-sm">
              View Full Gallery
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default GallerySection2;