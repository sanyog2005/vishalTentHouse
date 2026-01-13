import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, User } from 'lucide-react';

// --- 1. CUSTOM DECORATIVE SVGS ---

// The subtle line-art flower sketch for the background sides
const LineArtFloral = ({ className }) => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M100 180C100 180 80 120 40 100C10 90 20 50 50 40C80 30 90 60 100 80C110 60 140 20 170 40C200 60 180 100 160 110C120 130 100 180 100 180Z" stroke="#e5e7eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M100 180C100 180 120 150 160 160C190 170 190 130 170 120" stroke="#e5e7eb" strokeWidth="2" strokeLinecap="round"/>
    <path d="M100 180C100 180 80 150 40 160C10 170 10 130 30 120" stroke="#e5e7eb" strokeWidth="2" strokeLinecap="round"/>
    <path d="M100 80L100 40" stroke="#e5e7eb" strokeWidth="2" strokeLinecap="round"/>
    <path d="M50 100L30 80" stroke="#e5e7eb" strokeWidth="2" strokeLinecap="round"/>
    <path d="M150 100L170 80" stroke="#e5e7eb" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// The colorful roses for the review card corners
const CornerRoses = ({ className, rotation = 0 }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={{ transform: `rotate(${rotation}deg)` }}>
    <g opacity="0.9">
      {/* Rose 1 (Pink/Purple) */}
      <circle cx="30" cy="70" r="15" fill="#C58F98" />
      <path d="M30 70 m-10 0 a 10 10 0 1 0 20 0 a 10 10 0 1 0 -20 0" stroke="#fff" strokeWidth="1" fill="none"/>
      
      {/* Rose 2 (Darker) */}
      <circle cx="55" cy="85" r="12" fill="#7D5A6F" />
      <path d="M55 85 m-8 0 a 8 8 0 1 0 16 0 a 8 8 0 1 0 -16 0" stroke="#fff" strokeWidth="0.5" fill="none"/>

      {/* Leaves */}
      <path d="M40 55 Q 50 40 60 55" stroke="#8A9A85" strokeWidth="3" fill="none" />
      <path d="M20 60 Q 10 50 20 40" stroke="#8A9A85" strokeWidth="3" fill="none" />
      <path d="M70 80 Q 85 85 80 70" stroke="#8A9A85" strokeWidth="3" fill="none" />
    </g>
  </svg>
);


// --- 2. DATA ---
const reviews = [
  {
    id: 1,
    name: "ARPIT GOSWAMI",
    image: null, // null = show placeholder icon
    text: "Attended a marriage party yesterday. Very spacious and elegant decoration. Nice food and drinks."
  },
  {
    id: 2,
    name: "PRIYA SHARMA",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
    text: "The venue was absolutely breathtaking! The staff went above and beyond to make our special day perfect."
  },
  {
    id: 3,
    name: "RAHUL VERMA",
    image: null,
    text: "Excellent hospitality and arrangement. The parking space was ample, and the lighting was magical."
  }
];

const ClientReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="relative w-full py-20 bg-white overflow-hidden">
      
      {/* --- Background Decorations --- */}
      <div className="absolute top-1/2 -left-10 w-64 h-64 -translate-y-1/2 opacity-30 pointer-events-none">
        <LineArtFloral className="w-full h-full text-gray-200" />
      </div>
      <div className="absolute bottom-0 -right-10 w-80 h-80 opacity-30 pointer-events-none rotate-180">
        <LineArtFloral className="w-full h-full text-gray-200" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
             <span className="text-[#E88D46] font-serif text-sm uppercase tracking-widest block mb-3 font-semibold">
              Client's Reviews
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#1a1a1a] mb-6">
              Thank You For The Best Wishes
            </h2>
            <p className="text-gray-500 font-light leading-relaxed">
              Meet Our Happy Clients – Their Smiles Say It All! With Seamless Planning And Unforgettable Experiences, We Turn Dreams Into Reality.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4">
            <button 
              onClick={prevReview}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#E88D46] hover:border-[#E88D46] hover:text-white transition-all duration-300 group"
            >
              <ChevronLeft className="w-5 h-5 text-gray-400 group-hover:text-white" />
            </button>
            <button 
              onClick={nextReview}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#E88D46] hover:border-[#E88D46] hover:text-white transition-all duration-300 group"
            >
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-white" />
            </button>
          </div>
        </div>

        {/* --- Review Card --- */}
        <div className="relative max-w-4xl mx-auto mt-20">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    className="relative bg-white border border-gray-100 shadow-sm p-12 md:p-16 text-center"
                >
                    {/* Avatar (Floating Top Center) */}
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                        <div className="w-24 h-24 rounded-full bg-gray-200 border-4 border-white shadow-lg overflow-hidden flex items-center justify-center">
                            {reviews[currentIndex].image ? (
                                <img src={reviews[currentIndex].image} alt={reviews[currentIndex].name} className="w-full h-full object-cover" />
                            ) : (
                                <User className="w-12 h-12 text-gray-400" />
                            )}
                        </div>
                    </div>

                    {/* Corner Decorations */}
                    <div className="absolute bottom-0 left-0 w-32 h-32 pointer-events-none">
                         <CornerRoses className="w-full h-full" rotation={0} />
                    </div>
                    <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none">
                         <CornerRoses className="w-full h-full" rotation={180} />
                    </div>

                    {/* Content */}
                    <div className="mt-6 relative z-10">
                        <h3 className="text-xl md:text-2xl font-serif text-[#2A1B3D] uppercase tracking-wide mb-6">
                            {reviews[currentIndex].name}
                        </h3>
                        <p className="text-gray-600 text-lg italic font-light leading-relaxed max-w-2xl mx-auto">
                            "{reviews[currentIndex].text}"
                        </p>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default ClientReviews;