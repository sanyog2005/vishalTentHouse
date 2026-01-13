import React from 'react';
import { Gem } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  // --- Animation Variants ---
  
  // Variants for the main text content container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5 // Increased delay slightly to let bg load a bit
      }
    }
  };

  // Variants for individual text items
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 20 }
    }
  };

  // Variant for the background image to give it a subtle zoom effect on load
  const bgImageVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 2.5, ease: "easeOut" }
    }
  };

  return (
    // Main container: Defines height and relative positioning context
    <main className="relative h-[calc(120vh-120px)] w-full overflow-hidden font-sans">

      {/* ==================== Background Layer (z-0) ==================== */}
      <div className="absolute inset-0 z-0">
        {/* 1. The Background Image */}
        <motion.img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Vishal Tent House Wedding Setup"
          className="w-full h-full object-cover"
          variants={bgImageVariants}
          initial="hidden"
          animate="visible"
        />
        {/* 2. Dark Overlay - Essential for white text readability */}
        {/* Adjust bg-black/XX to make it darker or lighter (e.g., bg-black/40, bg-black/70) */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>


      {/* ==================== Content Layer (z-10) ==================== */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >

        {/* 1. Welcome Text */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-4 mb-4"
        >
          <motion.span
            className="uppercase tracking-[0.3em] text-sm md:text-base font-medium cursor-default"
            whileHover={{ letterSpacing: "0.5em", color: "#E9D5FF" }}
            transition={{ duration: 0.5 }}
          >
            Welcome To
          </motion.span>
        </motion.div>

        {/* 2. Main Title */}
        {/* Note: Ensure you have a nice script font imported in your CSS for 'font-script' */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl lg:text-9xl mb-6 font-script font-bold cursor-pointer drop-shadow-lg"
          whileHover={{
            scale: 1.05,
            textShadow: "0px 0px 15px rgba(255, 255, 255, 0.8)"
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Vishal Tent House
        </motion.h1>

        {/* 3. Divider */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center w-full max-w-lg mb-8 opacity-90"
        >
          {/* Left Line - Fixed animate width to specific rem values for consistency */}
          <motion.div
            className="h-[1px] bg-white/80"
            initial={{ width: 0 }}
            animate={{ width: "8rem" }} 
            transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
          ></motion.div>

          {/* Gem Icon */}
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
          className="uppercase tracking-widest text-lg md:text-xl lg:text-2xl font-serif font-light opacity-95 max-w-2xl leading-relaxed drop-shadow-md"
          whileHover={{ color: "#E9D5FF" }}
        >
          The Premier Wedding Venue Destination
        </motion.h2>

      </motion.div>
    </main>
  );
};

export default Hero;