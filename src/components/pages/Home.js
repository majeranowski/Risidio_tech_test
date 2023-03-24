import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import NFTs from '../NFTs';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <NFTs />
      <Footer />
    </>
  );
}

export default Home;