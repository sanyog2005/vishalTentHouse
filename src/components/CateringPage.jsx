import React from 'react';
import { Car, BedDouble, Snowflake, UtensilsCrossed, Leaf, ArrowUp, MessageCircle } from 'lucide-react';
import venue9 from '../assets/7.jpeg';
import venue10 from '../assets/12.jpeg';
import venue12 from '../assets/32.jpeg';
import venue13 from '../assets/3.jpeg';
import venue14 from '../assets/4.jpeg';
import venue15 from '../assets/5.jpeg';
import venue16 from '../assets/6.jpeg';
import venue17 from '../assets/7.jpeg';
import venue18 from '../assets/8.jpeg';
import venue19 from '../assets/9.jpeg';
import venue20 from '../assets/10.jpeg';
import venue21 from '../assets/11.jpeg';
import venue22 from '../assets/12.jpeg';
import venue23 from '../assets/13.jpeg';
import venue24 from '../assets/14.jpeg';





const CateringPage = () => {
  return (
    <div className="w-full min-h-screen font-sans">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[500px] w-full overflow-hidden">
        
        {/* Background Image Grid (Simulating the 3-panel look) */}
        <div className="absolute inset-0 grid grid-cols-3">
          {/* Left Image - Salad/Appetizer */}
          <div className="relative h-full w-full">
            <img 
            src={venue9}
              alt="Salad Buffet" 
              className="h-full w-full object-cover"
            />
          </div>
          {/* Center Image - Hall */}
          <div className="relative h-full w-full">
            <img 
            src={venue10}

              alt="Banquet Hall" 
              className="h-full w-full object-cover"
            />
          </div>
          {/* Right Image - Curry */}
          <div className="relative h-full w-full">
            <img 
              src={venue12}
              alt="Main Course" 
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 px-4 text-center">
          {/* Decorative Leaf Icon */}
          <div className="mb-2 text-white/90">
            <Leaf size={40} />
          </div>

          {/* Script Title */}
          <h1 className="text-5xl md:text-7xl mb-4 text-white cursor-pointer drop-shadow-lg" style={{ fontFamily: '"Great Vibes", cursive' }}>
            Vishal Tent House Catering
          </h1>

          {/* Subtitle */}
          <h2 className="text-lg md:text-2xl tracking-widest uppercase font-light text-white/90" style={{ fontFamily: '"Playfair Display", serif' }}>
            Gourmet Catering, Crafted to Perfection
          </h2>
        </div>
      </section>


      {/* ================= AMENITIES SECTION ================= */}
      <section className="relative py-20 bg-white overflow-hidden">
        
        {/* Header */}
        <div className="text-center mb-16 relative z-10">
          <p className="text-orange-400 text-sm md:text-base tracking-[0.2em] uppercase font-semibold mb-2">
            Thank you for giving
          </p>
          <h2 className="text-5xl text-gray-900" style={{ fontFamily: '"Playfair Display", serif' }}>
            Amenities
          </h2>
          {/* Note: Image says "Emenities" (typo), corrected to "Amenities" here */}
        </div>

        {/* Icons Grid */}
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 relative z-10">
          
          {/* Item 1 */}
          <div className="flex flex-col items-center text-center group cursor-pointer">
            <div className="mb-4 text-orange-400 transition-transform duration-300 group-hover:-translate-y-2">
              <Car size={48} strokeWidth={1.5} />
            </div>
            <h3 className="text-sm font-medium text-gray-800 uppercase tracking-wide">
              Dedicated Parking Space
            </h3>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center text-center group cursor-pointer">
            <div className="mb-4 text-orange-400 transition-transform duration-300 group-hover:-translate-y-2">
              <BedDouble size={48} strokeWidth={1.5} />
            </div>
            <h3 className="text-sm font-medium text-gray-800 uppercase tracking-wide">
              Complimentary Bridal Room
            </h3>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center text-center group cursor-pointer">
            <div className="mb-4 text-orange-400 transition-transform duration-300 group-hover:-translate-y-2">
              <Snowflake size={48} strokeWidth={1.5} />
            </div>
            <h3 className="text-sm font-medium text-gray-800 uppercase tracking-wide">
              Centrally Air Conditioned
            </h3>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col items-center text-center group cursor-pointer">
            <div className="mb-4 text-orange-400 transition-transform duration-300 group-hover:-translate-y-2">
              <UtensilsCrossed size={48} strokeWidth={1.5} />
            </div>
            <h3 className="text-sm font-medium text-gray-800 uppercase tracking-wide">
              Housekeeping
            </h3>
          </div>
        </div>

        {/* Decorative Monstera Leaves (CSS Shapes/Absolute Images) */}
        {/* Bottom Right Leaf */}
        <div className="absolute -bottom-10 -right-10 w-48 h-48 opacity-80 pointer-events-none">
           <img src="https://images.unsplash.com/photo-1596520367623-2895f4014f4e?auto=format&fit=crop&q=80&w=300" 
                className="w-full h-full object-contain rotate-180" 
                style={{filter: 'hue-rotate(90deg)'}} /* Green filter simulation */
                alt="leaf" />
        </div>

      </section>

      {/* ================= FLOATING WIDGETS ================= */}
      
      {/* WhatsApp Button (Bottom Left) */}
      

      {/* Scroll to Top (Bottom Right) */}
      <button className="fixed bottom-6 right-6 bg-orange-100 hover:bg-orange-200 text-orange-400 p-3 rounded-full shadow-lg z-50 transition-colors">
        <ArrowUp size={24} />
      </button>

    </div>
  );
};

export default CateringPage;