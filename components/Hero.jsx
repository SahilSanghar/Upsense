'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { BackgroundGradientAnimation } from './ui/background-gradient-animation';
import { WobbleCard } from "./ui/wobble-card";
import { FlipWords } from "./ui/flip-words";

const Hero = () => {
  const words = ["Singapore", "Sri Lanka", "Maldives", "Australia"];
  const [isWideScreen, setIsWideScreen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 1030); // Set state based on window width
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Gradient Animation */}
      <BackgroundGradientAnimation>
        {/* Main Hero Section */}
        <div
          className={`absolute inset-0 flex items-center justify-between bg-cover bg-center bg-no-repeat h-[100vh] md:h-[80vh] lg:h-[70vh] xl:h-[60vh]`}
          style={{
            backgroundImage: "url('/hero-image.jpg')"
          }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="z-10 text-left text-gray-300 px-10">
            <h1 className="text-md md:text-3xl font-light italic mb-4">Branding Digital Experiences & Innovative Strategies</h1>
            <p className="text-lg md:text-7xl mb-8">CREATIVE* <br />DESIGN STUDIO</p>
            <p className="text-lg md:text-5xl md:font-thin mb-8">Located In the heart of <FlipWords words={words} /></p>
            <div className="flex items-center space-x-4">
              <Image src='/hlogo1.svg' alt='Logo 1' height={20} width={200} className='h-[50px] w-[50px]' />
              <Image src='/hlogo2.svg' alt='Logo 2' height={20} width={200} className='h-[50px] w-[50px]' /> 
              <Image src='/hlogo3.svg' alt='Logo 3' height={20} width={200} className='h-[50px] w-[100px]' />
            </div>
          </div>

          {/* Testimonial Card - Only visible on wide screens */}
          {isWideScreen && (
            <div className="z-10 px-10">
              <WobbleCard containerClassName="bg-[#fb5607] rounded-3xl max-w-xs">
                <div className="text-left">
                  <div className="flex items-start -mt-4">
                    <Image src='/hright.png' alt='Icon' height={20} width={50} />
                    <h2 className="text-white text-xl font-semibold mb-5 text-right">
                      Prof. Sigrid <br />
                      Adriaenssens
                    </h2>
                  </div>
                  <p className="text-neutral-200 text-base -mb-7">
                    “They strike the perfect <br />
                    balance between <br />
                    creative design flair <br />
                    and truly listening to <br />
                    their clients' needs.”
                  </p>
                </div>
              </WobbleCard>
              <WobbleCard containerClassName="mt-5 bg-gradient-to-b from-blue-500 to-blue-600 h-[70px]">
                <p className='text-white -mt-[60px] text-center text-xl'>
                  Insights
                </p>
              </WobbleCard>
            </div>
          )}
        </div>
      </BackgroundGradientAnimation>
    </div>
  );
};

export default Hero;
