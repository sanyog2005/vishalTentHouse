import React from 'react';
import Hero from '../components/Hero';
import Venues from '../components/Venues';
import VenueHighlight from '../components/VenueHighlight';
import GallerySection from '../components/GallerySection';
import RecentEventsSection from '../components/RecentEventsSection';

import GallerySection2 from '../components/GallerySection2';
import ClientReviews from '../components/ClientReviews';
import DreamWeddingSection from '../components/DreamWeddingSection';
import NewsUpdatesSection from '../components/NewsUpdatesSection';
import InstagramFeedSection from '../components/InstagramFeedSection';
import CateringPage from '../components/CateringPage';

 
const Home = () => {
  return (
    <>
       <Hero />
      <Venues />
      <VenueHighlight />
      <GallerySection/>
      <RecentEventsSection />
        <CateringPage />
      <GallerySection2 />
      <ClientReviews />
      <DreamWeddingSection />
      <NewsUpdatesSection/>
      <InstagramFeedSection />
    </>
  );
};
export default Home;