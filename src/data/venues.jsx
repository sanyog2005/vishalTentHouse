import React from 'react';
import { Tent, Users, Waves, Lamp, Sparkles, ArrowRight } from 'lucide-react';

export const venuesData = [
  {
    id: "bali-pool-side",
    title: "Bali Pool Side",
    tagline: "Tropical Serenity",
    desc: "Escape to a tropical paradise right in the city. The Bali Pool Side offers a mesmerizing blend of aquatic beauty and lush open lawns.",
    longDesc: "Inspired by the exotic landscapes of Bali, this venue features a pristine infinity pool surrounded by manicured lawns and tropical flora. It creates a relaxed yet sophisticated atmosphere ideal for engagement parties, cocktail nights, and intimate weddings. The cabana-style dining areas add a touch of resort-style luxury to your event.",
    img: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2000&auto=format&fit=crop",
    capacity: "350 - 550 Pax",
    type: "Open Lawn + Pool",
    size: "12,000 sq. ft.",
    features: [
      { icon: <Tent size={18} />, text: "Open Lawn" },
      { icon: <Users size={18} />, text: "Capacity: 350 - 550 Pax" },
      { icon: <Waves size={18} />, text: "Infinity-Pool Design" },
      { icon: <Lamp size={18} />, text: "Cabana Dining Area" }
    ]
  },
  {
    id: "hawaii-glass-house",
    title: "Hawaii Glass House",
    tagline: "Nature Meets Luxury",
    desc: "A stunning architectural marvel wrapped in glass. Surrounded by fountains and greenery, this venue brings the outdoors in.",
    longDesc: "The Hawaii Glass House is our signature venue, offering a seamless blend of indoor comfort and outdoor beauty. The transparent structure allows natural light to flood the space during the day and offers a starry view at night, all while keeping your guests cool and comfortable. It features a stunning fountain pond and lush vertical gardens.",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000&auto=format&fit=crop",
    capacity: "Up To 800 Pax",
    type: "Glass Structure + Lawn",
    size: "15,000 sq. ft.",
    features: [
      { icon: <Sparkles size={18} />, text: "Glass Architecture" },
      { icon: <Users size={18} />, text: "Capacity: Up To 800 Pax" },
      { icon: <Waves size={18} />, text: "Fountain Pond" },
      { icon: <Tent size={18} />, text: "Open & Covered Mix" }
    ]
  },
  {
    id: "imperial-hall",
    title: "Imperial Hall",
    tagline: "The Royal Statement",
    desc: "Grandeur redefined. The Imperial Hall features majestic entryways and high ceilings, designed for a royal coronation feel.",
    longDesc: "Step into a world of regality at the Imperial Hall. With its soaring ceilings, crystal chandeliers, and a grand entry passage that makes every arrival a moment to remember, this venue is tailored for big fat Indian weddings. The interiors are designed with a modern-royal aesthetic, requiring minimal decor to look stunning.",
    img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2000&auto=format&fit=crop",
    capacity: "Up To 500 Pax",
    type: "Indoor Banquet",
    size: "8,000 sq. ft.",
    features: [
      { icon: <Tent size={18} />, text: "Fully AC Hall" },
      { icon: <Users size={18} />, text: "Capacity: Up To 500 Pax" },
      { icon: <ArrowRight size={18} />, text: "Grand Entry Passage" },
      { icon: <Lamp size={18} />, text: "Modern Royal Decor" }
    ]
  },
  {
    id: "windsor-hall",
    title: "Windsor Hall",
    tagline: "Modern Sophistication",
    desc: "Chic, contemporary, and versatile. Windsor Hall boasts state-of-the-art RGB lighting and a unique mezzanine floor.",
    longDesc: "Windsor Hall is designed for the modern couple. It breaks away from traditional aesthetics to offer a chic, club-inspired vibe perfect for Sangeets and cocktail parties. The unique mezzanine floor offers a VIP viewing area, while the integrated RGB lighting system allows you to change the mood of the venue instantly.",
    img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2000&auto=format&fit=crop",
    capacity: "Up To 500 Pax",
    type: "Indoor Banquet + Mezzanine",
    size: "7,500 sq. ft.",
    features: [
      { icon: <Sparkles size={18} />, text: "RGB Light System" },
      { icon: <Users size={18} />, text: "Capacity: Up To 500 Pax" },
      { icon: <ArrowRight size={18} />, text: "Mezzanine Floor" },
      { icon: <Lamp size={18} />, text: "Luxury Interiors" }
    ]
  }
];