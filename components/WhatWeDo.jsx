import Image from 'next/image';
import React from 'react';

const WhatWeDo = () => {
  return (
    <div className="relative" style={{ backgroundColor: '#1D1D1D' }}>
      {/* Dot Background */}
      <div className="absolute inset-0 h-full w-fit bg-dot-black/[0.2] dark:bg-dot-white/[0.2] pointer-events-none">
        <div className="absolute inset-0 flex items-center justify-center bg-black/[0.5] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      <ul className="text-gray-400 text-5xl relative z-10 ps-32 py-20 overflow-hidden">
        <p className='text-green-500 pt-5'>What we do</p>
        <li className="hover:text-white flex items-center py-3 mt-5">
          Product Design
          <Image src='/top-right.png' alt='Top Right Arr' width={200} height={20} className='w-[40px] h-[40px] ms-[800px]' />
        </li>
        <li className="hover:text-white flex items-center py-3">
          Branding
          <Image src='/top-right.png' alt='Top Right Arr' width={200} height={20} className='w-[40px] h-[40px] ms-[935px]' />
        </li>
        <li className="hover:text-white flex items-center py-3">
          Web Design
          <Image src='/top-right.png' alt='Top Right Arr' width={200} height={20} className='w-[40px] h-[40px] ms-[866px]' />
        </li>
        <li className="hover:text-white flex items-center py-3">
          Web Development
          <Image src='/top-right.png' alt='Top Right Arr' width={200} height={20} className='w-[40px] h-[40px] ms-[732px]' />
        </li>
        <li className="hover:text-white flex items-center py-3">
          UX Design
          <Image src='/top-right.png' alt='Top Right Arr' width={200} height={20} className='w-[40px] h-[40px] ms-[896px]' />
        </li>
      </ul>
    </div>
  );
};

export default WhatWeDo;
