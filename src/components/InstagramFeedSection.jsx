import React from 'react';
import { Play, Instagram } from 'lucide-react';

const InstagramFeedSection = () => {
  const posts = [
    {
      type: 'video',
      src: 'https://images.unsplash.com/photo-1604065315771-318228362722?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80',
      caption: 'कुल्हड़ वाली चाय',
      views: '1.2M'
    },
    {
      type: 'video',
      src: 'https://images.unsplash.com/photo-1515518556098-77e701852943?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80',
      caption: 'दिल्ली की सर्दी में बनारस की टमाटर चाट...',
      views: '850K'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1519225469034-eedf80968049?q=80&w=1974&auto=format&fit=crop',
      caption: 'Decor details',
      isOverlay: true
    },
    {
      type: 'video',
      src: 'https://images.unsplash.com/photo-1631160370842-837330a1db48?q=80&w=1974&auto=format&fit=crop',
      caption: "You, me & Delhi's favorite wedding venue ✨",
      views: '45K'
    },
  ];

  return (
    <section className="py-20 bg-white relative z-10">
      <div className="container mx-auto px-4">
        
        {/* --- Header --- */}
        <div className="flex flex-col items-center justify-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-serif uppercase tracking-widest mb-10 text-center"
            style={{ color: '#000000', opacity: 1, visibility: 'visible', textTransform: 'uppercase' }} 
          >
            FOLLOW @Vishal Tent House
          </h2>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 max-w-4xl">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-full bg-[#2A1B3D] flex items-center justify-center border-2 border-gray-100 p-1">
                 <div className="text-white text-xs font-bold text-center leading-tight">
                    MALLU<br/>FARMS
                 </div>
              </div>
            </div>

            <div className="text-center md:text-left">
              <h3 
                className="font-serif text-lg font-bold tracking-wide mb-2"
                style={{ color: '#000000', opacity: 1 }} 
              >
                Vishal Tent House
              </h3>
              <p 
                className="text-sm md:text-base leading-relaxed max-w-2xl"
                style={{ color: '#4b5563', opacity: 1 }} 
              >
                WINDSOR • IMPERIAL • BALI • HAWAII 4 Dreamy Venues: 2 Stunning Halls + Lawn, Balinese Poolside & Hawaiian Glasshouse + Lawn! 📍 Chattarpur, New Delhi
              </p>
            </div>
          </div>
        </div>

        {/* --- Social Grid --- */}
        
      </div>
    </section>
  );
};

export default InstagramFeedSection;