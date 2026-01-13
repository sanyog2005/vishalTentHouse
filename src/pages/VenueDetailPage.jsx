// src/pages/VenueDetailPage.js
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircle, CheckCircle2, ArrowLeft, Calendar } from 'lucide-react';
import { venuesData } from '../data/venues'; // Import the data

const VenueDetailPage = () => {
  const { id } = useParams();
  const venue = venuesData.find(v => v.id === id);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!venue) return <div className="h-screen flex items-center justify-center text-2xl">Venue not found</div>;

  return (
    <div className="bg-white min-h-screen">
      
      {/* --- HERO IMAGE --- */}
      <div className="relative h-[60vh] lg:h-[70vh] w-full">
        <img src={venue.img} alt={venue.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <Link to="/venues" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest hover:text-amber-400 transition-colors mb-4">
              <ArrowLeft size={16} /> Back to Venues
            </Link>
            <span className="block text-amber-400 font-bold tracking-[0.2em] uppercase">{venue.tagline}</span>
            <h1 className="text-5xl md:text-7xl font-serif">{venue.title}</h1>
          </motion.div>
        </div>
      </div>

      {/* --- CONTENT LAYOUT --- */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Left Column: Details (2/3 width) */}
        <div className="lg:col-span-2 space-y-12">
          
          {/* Description */}
          <div>
            <h2 className="text-3xl font-serif text-gray-900 mb-6">About The Venue</h2>
            <p className="text-gray-600 leading-relaxed text-lg font-light">
              {venue.longDesc}
            </p>
          </div>

          {/* Key Features Grid */}
          <div className="bg-stone-50 p-8 rounded-lg border border-stone-100">
            <h3 className="text-xl font-serif mb-6 text-gray-900">Venue Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {venue.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-amber-600 shadow-sm">
                    {feature.icon}
                  </div>
                  <span className="text-gray-700">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Specs */}
          <div>
            <h3 className="text-xl font-serif mb-6 text-gray-900">Technical Specifications</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               <SpecBox label="Total Area" value={venue.size} />
               <SpecBox label="Guest Capacity" value={venue.capacity} />
               <SpecBox label="Venue Type" value={venue.type} />
               <SpecBox label="Parking" value="Valet Available" />
            </div>
          </div>

          {/* Gallery Grid (Placeholder for now using same image) */}
          <div>
            <h3 className="text-xl font-serif mb-6 text-gray-900">Gallery</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
               {[1,2,3].map((i) => (
                 <img key={i} src={venue.img} className="w-full h-40 object-cover rounded-sm hover:opacity-90 transition-opacity cursor-pointer" alt="Gallery" />
               ))}
            </div>
          </div>
        </div>

        {/* Right Column: Booking Card (1/3 width, Sticky) */}
        <div className="lg:col-span-1">
           <div className="sticky top-24 bg-white border border-gray-200 shadow-xl p-8 rounded-lg">
              <h3 className="text-2xl font-serif text-gray-900 mb-2">Book {venue.title}</h3>
              <p className="text-gray-500 text-sm mb-6">Get a quote for your preferred dates.</p>
              
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full p-3 bg-stone-50 border border-gray-200 rounded-sm focus:border-amber-500 outline-none" />
                <input type="email" placeholder="Email Address" className="w-full p-3 bg-stone-50 border border-gray-200 rounded-sm focus:border-amber-500 outline-none" />
                <input type="tel" placeholder="Phone Number" className="w-full p-3 bg-stone-50 border border-gray-200 rounded-sm focus:border-amber-500 outline-none" />
                <div className="flex gap-2">
                   <input type="date" className="w-full p-3 bg-stone-50 border border-gray-200 rounded-sm focus:border-amber-500 outline-none" />
                </div>
                
                <button className="w-full bg-amber-600 text-white py-4 font-bold uppercase tracking-widest hover:bg-amber-700 transition-colors">
                  Request Quote
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                 <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Or Call Us Directly</p>
                 <a href="tel:+919717417353" className="text-xl font-serif text-gray-900 hover:text-amber-600">+91-9717417353</a>
              </div>
           </div>
        </div>

      </div>

      {/* Floating WhatsApp */}
      {/* <a href="https://wa.me/919717417353" className="fixed bottom-8 left-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600 transition-colors">
        <MessageCircle size={28} />
      </a> */}
    </div>
  );
};

const SpecBox = ({ label, value }) => (
  <div className="bg-stone-50 p-4 rounded-md border border-stone-100 text-center">
    <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">{label}</p>
    <p className="font-semibold text-gray-900">{value}</p>
  </div>
);

export default VenueDetailPage;