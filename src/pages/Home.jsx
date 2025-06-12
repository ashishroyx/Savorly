import React from 'react';
import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import Hero from "../components/Hero";
import Category from '../components/Category';

function Home() {
  return (
    <div className="bg-[#A3B18A] w-full overflow-x-hidden relative">
      <Hero />
      
      {/* Category positioned on top of Hero */}
      {/* <div className="absolute top-8 left-0 w-full flex justify-center z-30">
        <Category />
      </div> */}

      <Veggie />
      <Popular />
    </div>
  );
}

export default Home;
