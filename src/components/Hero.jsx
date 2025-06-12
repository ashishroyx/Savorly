import React, { useRef } from 'react';
import logo from '../assets/logo.png';
import food1 from '../assets/food1.png';
import veg from '../assets/veg.jpeg';
import nonveg from '../assets/nonveg.jpeg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Hero() {
  const vegRef = useRef(null);
  const nonvegRef = useRef(null);
  const plateRef = useRef(null);

  useGSAP(() => {
    if (vegRef.current) {
      gsap.to(vegRef.current, {
        rotate: 360,
        duration: 1,
        repeat: -1,
        ease: 'linear',
      });
    }
  }, []);

  useGSAP(() => {
    if (nonvegRef.current) {
      gsap.to(nonvegRef.current, {
        rotate: 360,
        duration: 1,
        repeat: -1,
        ease: 'linear',
      });
    }
  }, []);

  useGSAP(() => {
    if (plateRef.current) {
      gsap.to(plateRef.current, {
        rotate: 360,
        duration: 20,
        repeat: -1,
        ease: 'linear',
      });
    }
  }, []);

  return (
    <div className='relative bg-[#A3B18A] w-screen h-[780px] overflow-hidden'>

      {/* Logo */}
      <div className="p-4">
        <img src={logo} alt="logo" className='w-20 h-20 object-contain' />
      </div>

      {/* Rotating Plate Image */}
      <div
        className='absolute top-[500px] left-1/3 transform -translate-y-1/2 z-10'
        ref={plateRef}
      >
        <img src={food1} alt="food" width={550} height={500} />
      </div>

      {/* Marquee */}
      <div className="overflow-hidden whitespace-nowrap py-32">
        <div className='text-5xl'>
          <span className='text-5xl md:text-9xl font-bold ashish px-5'>Cook what you want!</span>
        </div>
        <div className="inline-block animate-marquee text-[#faf9f6af] text-5xl md:text-9xl font-bold ashish">
          {Array.from({ length: 8 }).map((_, idx) => (
            <span key={idx} className="mx-11">Savor the Simplicity</span>
          ))}
        </div>
      </div>

      {/* Rotating Veg & Nonveg Images */}
      <div className="absolute bottom-10 left-390 flex flex-col gap-2 p-4 z-20">
        <img src={veg} alt="veg" ref={vegRef} className="w-20 h-20 object-cover rounded-full m-2 p-1" />
        <img src={nonveg} alt="nonveg" ref={nonvegRef} className="w-20 h-20 object-cover rounded-full m-2 p-1" />
      </div>
    </div>
  );
}

export default Hero;
