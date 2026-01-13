import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Heart, MessageCircle, Instagram } from 'lucide-react';
import venue12 from '../assets/12.jpeg';

import venue13 from '../assets/22.jpeg';
import venue14 from '../assets/23.jpeg';
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
import venue28 from '../assets/37.jpeg';
import venue29 from '../assets/38.jpeg';
import venue30 from '../assets/39.jpeg';
import venue31 from '../assets/40.jpeg';
import venue32 from '../assets/41.jpeg';
import venue33 from '../assets/42.jpeg';
import venue34 from '../assets/43.jpeg';


const GalleryPage = () => {

  // --- 20 Curated Images for the Gallery ---
  const galleryImages = [
    { src: venue12, alt: "Grand Entrance" },
    { src: venue13, alt: "Banquet Hall" },
    { src: venue14, alt: "Couple Portrait" },
    { src: venue15, alt: "Table Setting" },
    { src: venue16, alt: "Floral Decor" },
    { src: venue17, alt: "Reception Night" },
    { src: venue18, alt: "Outdoor Seating" },
    { src: venue19, alt: "Outdoor Seating" },
    { src: venue20, alt: "Groom Preparation" },
    { src: venue21, alt: "Bridal Entry" },
    { src: venue22, alt: "Night Lighting" },
    { src: venue14, alt: "Haldi Ceremony" },
    { src: venue24, alt: "Birthday Cake" },
    { src: venue25, alt: "Birthday Cake" },
    { src: venue26, alt: "Birthday Cake" },
    { src: venue27, alt: "Birthday Cake" },
    { src: venue28, alt: "Birthday Cake" },
    { src: venue29, alt: "Birthday Cake" },
    { src: venue30, alt: "Birthday Cake" },
    { src: venue31, alt: "Birthday Cake" },
    { src: venue32, alt: "Birthday Cake" },
    { src: venue33, alt: "Birthday Cake" },
    { src: venue34, alt: "Birthday Cake" },
  ];

  return (
    <div className="relative min-h-screen bg-white font-sans pt-0">
      
      {/* --- HERO SECTION --- */}
      <div className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-black/40 z-10"></div>
           <motion.img 
             initial={{ scale: 1.1 }}
             animate={{ scale: 1 }}
             transition={{ duration: 10, ease: "linear" }}
             src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop" 
             alt="Gallery Hero" 
             className="w-full h-full object-cover" 
           />
        </div>

        <div className="relative z-20 text-center text-white px-4">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 text-sm md:text-base font-medium tracking-wider uppercase opacity-90 mb-4"
          >
            <span>Home</span> <span className="text-amber-400">→</span> <span>Gallery</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight drop-shadow-2xl"
          >
            GALLERY
          </motion.h1>
        </div>
      </div>

      {/* --- INTRO TEXT SECTION 1 --- */}
      <section className="py-20 md:py-28 px-6 max-w-4xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <Camera size={32} className="mx-auto text-amber-600 mb-6" />
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
            Where Every Picture <span className="italic text-amber-600">Tells a Story</span>
          </h2>
          <div className="w-24 h-[2px] bg-amber-500 mx-auto my-6 opacity-50"></div>
          <p className="text-gray-600 leading-relaxed text-lg font-light">
            Step into the world of Vishal Tent House through our gallery — a timeless collection of moments, emotions, 
            and experiences that have come to life within our beautiful venues. From intimate haldi functions and 
            dreamy weddings to glamorous cocktail nights and milestone celebrations, each frame captures the magic 
            we help create every single day.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg font-light">
             We believe that every celebration deserves to be remembered — not just in your hearts, but in the memories 
             you can revisit forever. And that’s what our gallery is all about — showcasing the spirit, soul, and splendour of Vishal Tent House.
          </p>
        </motion.div>
      </section>

      {/* --- MASONRY GALLERY GRID --- */}
      {/* Using Tailwind's 'columns' utility creates a perfect masonry layout 
          that stacks visually like Pinterest, ensuring no gaps.
      */}
      <section className="px-4 md:px-8 pb-20 bg-stone-50 pt-20">
        <div className="max-w-[1920px] mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="break-inside-avoid relative group overflow-hidden rounded-lg shadow-md cursor-zoom-in"
              >
                {/* Image */}
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110" 
                  loading="lazy"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-serif text-xl tracking-wide border-b border-amber-400 inline-block pb-1">
                      {img.alt}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- INTRO TEXT SECTION 2 --- */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h4 className="text-amber-600 font-bold uppercase tracking-[0.2em] text-sm">Versatility</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
              A Celebration for <br /> <span className="italic text-amber-600">Every Season</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg font-light">
              No two events are ever the same — and that’s the beauty of it. Whether it’s the vibrant energy of a 
              springtime wedding, the golden glow of a sundowner ceremony, or the cozy intimacy of a winter engagement, 
              our gallery captures every shade and mood of celebration.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg font-light">
              As you browse through, you’ll see the versatility of our venues — how each corner of Vishal Tent House transforms 
              beautifully to match the vibe of the event. Whether it’s a pastel garden-themed mehendi or a red-and-gold regal 
              wedding setup, the backdrop always complements your dream vision.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] w-full"
          >
             <div className="absolute top-4 right-4 w-full h-full border-2 border-amber-500/20 rounded-lg"></div>
             <img 
               src={venue15} 
               className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-2xl"
             />
          </motion.div>

        </div>
      </section>

      {/* --- INSTAGRAM CTA --- */}
      <section className="bg-stone-900 text-white py-16 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto space-y-6"
        >
          <Instagram size={40} className="mx-auto text-amber-500" />
          <h2 className="text-3xl md:text-4xl font-serif">Follow Us On Instagram</h2>
          <p className="text-gray-400 font-light">
            Stay updated with our latest events, decor trends, and behind-the-scenes magic.
          </p>
          <button className="border border-white/30 hover:border-amber-500 hover:text-amber-500 text-white px-8 py-3 rounded-full transition-all duration-300 uppercase tracking-widest text-sm font-bold">
            @Vishal Tent HouseOfficial
          </button>
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

export default GalleryPage;