import React from 'react';
import { Heart, ArrowRight, Calendar, Tag } from 'lucide-react';
import venue19 from '../assets/24.jpeg';
import venue20 from '../assets/10.jpeg';
import venue21 from '../assets/22.jpeg';
import venue22 from '../assets/39.jpeg';
import venue23 from '../assets/13.jpeg';
import venue24 from '../assets/32.jpeg';

// --- CUSTOM BACKGROUND SVGs ---

const FloralTopLeft = () => (
  <svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[300px] md:w-[500px] h-auto opacity-60">
    <g opacity="0.2">
      <path d="M-100 200C-100 200 50 150 150 50C250 -50 300 0 300 0" stroke="#E88D46" strokeWidth="2"/>
      <path d="M-80 220C-80 220 60 180 160 80C260 -20 310 30 310 30" stroke="#E88D46" strokeWidth="2"/>
      {/* Watercolor Leaf Shapes */}
      <path d="M256.003 62.1705C219.838 104.929 147.866 136.713 95.8189 165.055C43.7718 193.397 -4.97569 207.224 -41.5834 179.086C-78.191 150.948 -88.3409 86.4149 -59.195 39.3424C-30.0492 -7.7301 36.2852 -23.1699 92.1614 -15.4285C148.038 -7.68702 292.168 19.4124 256.003 62.1705Z" fill="#E88D46"/>
      <path d="M210.5 129C170.1 168.2 99.8333 188.167 43.5 203C-12.8333 217.833 -62.1 222.2 -92.5 194.5C-122.9 166.8 -125.5 107.5 -99.5 66.5C-73.5 25.5 -12.8333 13.8333 43.5 23C99.8333 32.1667 250.9 89.8 210.5 129Z" fill="#2A1B3D" fillOpacity="0.3"/>
      <path d="M329.5 -36C303.9 -4.4 251.167 40.8333 202.5 79C153.833 117.167 112.3 146.4 80 127C47.7 107.6 48.1667 51.8333 77.5 14.5C106.833 -22.8333 163.5 -54.8333 218 -62C272.5 -69.1667 355.1 -67.6 329.5 -36Z" fill="#E88D46" fillOpacity="0.6"/>
    </g>
  </svg>
);

const FloralBottomRight = () => (
  <svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[300px] md:w-[500px] h-auto opacity-60">
     <g opacity="0.2">
      <path d="M600 300C600 300 450 350 350 450C250 550 200 500 200 500" stroke="#E88D46" strokeWidth="2"/>
      <path d="M580 280C580 280 440 320 340 420C240 520 190 470 190 470" stroke="#E88D46" strokeWidth="2"/>
      {/* Watercolor Leaf Shapes rotated */}
      <path d="M243.997 437.83C280.162 395.071 352.134 363.287 404.181 334.945C456.228 306.603 504.976 292.776 541.583 320.914C578.191 349.052 588.341 413.585 559.195 460.658C530.049 507.73 463.715 523.17 407.839 515.429C351.962 507.687 207.832 480.588 243.997 437.83Z" fill="#E88D46"/>
      <path d="M289.5 371C329.9 331.8 400.167 311.833 456.5 297C512.833 282.167 562.1 277.8 592.5 305.5C622.9 333.2 625.5 392.5 599.5 433.5C573.5 474.5 512.833 486.167 456.5 477C400.167 467.833 249.1 410.2 289.5 371Z" fill="#2A1B3D" fillOpacity="0.3"/>
    </g>
  </svg>
);

// --- MAIN COMPONENTS ---

const blogPosts = [
  {
    id: 1,
    image:venue19,
    category: "Inspiration",
    date: "Oct 12, 2024",
    title: "Planning a Dream Wedding at Vishal Tent House: Tips & Themes",
    excerpt: "Discover the secrets to a flawless outdoor celebration, from decor selection to lighting the perfect evening."
  },
  {
    id: 2,
    image: venue22,
    category: "Venue Spotlight",
    date: "Sep 28, 2024",
    title: "Why Vishal Tent House is the Ultimate Wedding Farmhouse in Delhi NCR?",
    excerpt: "Sprawling lawns, luxury amenities, and easy connectivity—find out why couples love saying 'I Do' here."
  },
  {
    id: 3,
    image: venue21,
    category: "Expert Advice",
    date: "Sep 15, 2024",
    title: "Wedding Planning Tips: Your Stress-Free Guide to \"I Do\"",
    excerpt: "A step-by-step timeline to keep your sanity intact while planning the biggest day of your life."
  }
];

const BlogPostCard = ({ post }) => {
  return (
    <article className="group flex flex-col items-center relative z-20"> {/* Added relative z-20 */}
      {/* 1. Image Container */}
      <div className="w-full h-[280px] md:h-[320px] rounded-2xl overflow-hidden relative shadow-lg bg-white"> {/* Added bg-white to prevent bleed */}
        {/* Badge */}
        <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2 shadow-sm">
          <Calendar className="w-3 h-3 text-[#E88D46]" />
          <span className="text-[10px] font-bold tracking-widest uppercase text-[#2A1B3D]">{post.date}</span>
        </div>

        {/* Image */}
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#2A1B3D]/10 group-hover:bg-[#2A1B3D]/0 transition-colors duration-300"></div>
      </div>

      {/* 2. Floating Content Card */}
      <div className="w-[90%] -mt-16 z-30 relative"> {/* Increased z-index to 30 */}
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-xl border-b-4 border-transparent group-hover:border-[#E88D46] transition-all duration-300">
          
          {/* Category Tag */}
          <div className="flex items-center gap-2 mb-3">
            <Tag className="w-3 h-3 text-[#E88D46]" />
            <span className="text-xs font-semibold text-[#E88D46] uppercase tracking-wider">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-serif text-xl md:text-2xl text-gray-900 leading-tight mb-3 group-hover:text-[#E88D46] transition-colors duration-300">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">
            {post.excerpt}
          </p>

          {/* Button */}
          <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#2A1B3D] group/btn">
            <span>Read Article</span>
            <div className="w-6 h-6 rounded-full bg-[#f3f4f6] flex items-center justify-center group-hover/btn:bg-[#E88D46] group-hover/btn:text-white transition-all duration-300">
               <ArrowRight className="w-3 h-3" />
            </div>
          </div>

        </div>
      </div>
    </article>
  );
};

const NewsUpdatesSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden"> {/* Added overflow-hidden */}
      
      {/* --- BACKGROUND FLORAL SVGS --- */}
      {/* Top Left Floral */}
      <div className="absolute top-0 left-0 pointer-events-none z-0 transform -translate-x-1/4 -translate-y-1/4">
        <FloralTopLeft />
      </div>
      
      {/* Bottom Right Floral */}
      <div className="absolute bottom-0 right-0 pointer-events-none z-0 transform translate-x-1/4 translate-y-1/4">
         <FloralBottomRight />
      </div>


      {/* --- MAIN CONTENT CONTAINER --- */}
      {/* Added relative z-10 to ensure content sits above flowers */}
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex justify-center items-center gap-2 mb-4">
             <div className="h-[1px] w-12 bg-[#E88D46]" />
             <Heart className="w-5 h-5 fill-[#E88D46] text-[#E88D46]" />
             <div className="h-[1px] w-12 bg-[#E88D46]" />
          </div>
          
          <span className="text-[#E88D46] font-medium text-sm uppercase tracking-[0.3em] block">
            The Wedding Journal
          </span>
          
          <h2 className="text-4xl md:text-6xl font-serif text-gray-900 tracking-tight">
            News & Updates
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-16 text-center">
            <button className="inline-flex items-center gap-2 text-gray-900 border-b border-gray-900 pb-1 hover:text-[#E88D46] hover:border-[#E88D46] transition-all duration-300 font-serif italic text-lg bg-white/80 backdrop-blur-sm px-2"> {/* Added subtle background to button for readability */}
                View All Posts <ArrowRight className="w-4 h-4" />
            </button>
        </div>

      </div>
    </section>
  );
};

export default NewsUpdatesSection;