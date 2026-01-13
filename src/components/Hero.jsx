import React from 'react';
import { Gem } from 'lucide-react';
import { motion } from 'framer-motion';
import myVideo from '../assets/bg.mp4';

// --- INSTRUCTIONS FOR LOCAL VIDEO ---
// 1. Place your video file (e.g., 'hero-bg.mp4') in your 'src/assets' folder.
// 2. Uncomment the import line below:
// import heroVideo from '../assets/hero-bg.mp4'; 
// 3. Replace the 'src' in the <motion.video> tag below with {heroVideo}.

const Hero = () => {
  // --- Animation Variants ---
  
  // Staggers the appearance of text elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5 
      }
    }
  };

  // Animations for text moving up and fading in
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 20 }
    }
  };

  // Smooth zoom-out effect for the background video on load
  const bgVideoVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 2.5, ease: "easeOut" }
    }
  };

  return (
    <main className="relative h-[calc(100vh)] w-full overflow-hidden font-sans">

      {/* ==================== Background Layer (z-0) ==================== */}
      <div className="absolute inset-0 z-0">
        
        {/* Background Video */}
        <motion.video
          // Use a high-quality stock video or your imported local file here
          src={myVideo}
          className="w-full h-full object-cover"
          
          // Essential attributes for auto-playing background video
          autoPlay 
          loop 
          muted 
          playsInline 
          
          variants={bgVideoVariants}
          initial="hidden"
          animate="visible"
        />

        {/* Dark Overlay: Adjust opacity (bg-black/50) to make text readable */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>


      {/* ==================== Content Layer (z-10) ==================== */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >

        {/* 1. Welcome Tagline */}
        <motion.div variants={itemVariants} className="flex items-center gap-4 mb-4">
          <motion.span
            className="uppercase tracking-[0.3em] text-sm md:text-base font-medium cursor-default"
            whileHover={{ letterSpacing: "0.5em", color: "#E9D5FF" }}
            transition={{ duration: 0.5 }}
          >
            Welcome To
          </motion.span>
        </motion.div>

        {/* 2. Main Title */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-9xl mb-6 font-script font-bold cursor-pointer drop-shadow-2xl"
          whileHover={{
            scale: 1.05,
            textShadow: "0px 0px 20px rgba(255, 255, 255, 0.6)"
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Vishal Tent House
        </motion.h1>

        {/* 3. Decorative Divider with Gem */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center w-full max-w-lg mb-8 opacity-90"
        >
          {/* Left Line */}
          <motion.div
            className="h-[1px] bg-white/80"
            initial={{ width: 0 }}
            animate={{ width: "8rem" }} 
            transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
          ></motion.div>

          {/* Icon */}
          <motion.div
            className="mx-6 relative"
            whileHover={{ rotate: 180, scale: 1.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute -inset-3 bg-white/20 rounded-full blur-md opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            <Gem size={32} strokeWidth={1.5} className="text-white drop-shadow-md" />
          </motion.div>

          {/* Right Line */}
          <motion.div
            className="h-[1px] bg-white/80"
            initial={{ width: 0 }}
            animate={{ width: "8rem" }}
            transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
          ></motion.div>
        </motion.div>

        {/* 4. Subtitle */}
        <motion.h2
          variants={itemVariants}
          className="uppercase tracking-widest text-sm md:text-lg lg:text-xl font-light opacity-90 max-w-2xl leading-relaxed"
          whileHover={{ color: "#E9D5FF" }}
        >
          The Premier Wedding Venue Destination
        </motion.h2>

      </motion.div>
    </main>
  );
};

export default Hero;