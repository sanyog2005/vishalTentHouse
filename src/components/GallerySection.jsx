import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, ArrowUpRight } from 'lucide-react';
import v1 from '../assets/47.jpg';
import v2 from '../assets/54.jpg';
import v3 from '../assets/50.jpg';

const galleryImages = [
  {
    id: 1,
    src: v1,
    alt: "Groom Royal Entry",
    position: "object-top",
    caption: "Royal Groom Entry"
  },
  {
    id: 2,
    src: v2,
    alt: "Couple on Wedding Stage",
    position: "object-center",
    caption: "The Perfect Moment"
  },
  {
    id: 3,
    src: v3,
    alt: "Bride Entry",
    position: "object-center",
    caption: "Magical Bridal Entry"
  }
];

const GallerySection = () => {
  return (
    <section className="w-full bg-white relative">
      
      {/* Container Grid - Gap-0 for seamless strip look */}
      <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-0">
        
        {galleryImages.map((image, index) => (
          <motion.div 
            key={image.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="group relative h-[300px] md:h-[450px] overflow-hidden cursor-pointer bg-gray-100"
          >
            {/* The Image - Slow Zoom Effect */}
            <img 
              src={image.src} 
              alt={image.alt}
              className={`w-full h-full object-cover transition-transform duration-[1.5s] ease-in-out group-hover:scale-110 ${image.position}`}
            />

            {/* 1. Base Dark Tint (Always visible slightly for text contrast, deepens on hover) */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />

            {/* 2. Gradient Overlay (From bottom) - Improves text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

            {/* 3. Content Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              
              {/* Icon Container - Scales & Rotates */}
              <div className="mb-4 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                <div className="w-12 h-12 rounded-full border border-white/30 backdrop-blur-sm flex items-center justify-center bg-white/10 hover:bg-[#E88D46] hover:border-[#E88D46] transition-colors duration-300">
                  <Instagram className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Text Content */}
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-[#E88D46] text-xs font-bold uppercase tracking-[0.2em] mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  Real Weddings
                </span>
                
                <h3 className="text-white font-serif text-2xl md:text-3xl tracking-wide opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  {image.caption}
                </h3>

                {/* Decorative Line */}
                <div className="w-0 group-hover:w-16 h-[1px] bg-white/60 mx-auto mt-4 transition-all duration-700 delay-200" />
              </div>

            </div>

            {/* Corner Action Icon (Optional Detail) */}
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
               <ArrowUpRight className="text-white/80 w-6 h-6" />
            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default GallerySection;