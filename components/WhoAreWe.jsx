import Image from 'next/image';
import React from 'react';

const WhoAreWe = () => {
return (
    <div className="py-10 bg-white w-full">
    {/* Main Body */}
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:mx-[100px]">
    {/* Left Gif */}
    <div className="w-full ">
        <video 
        src="/whoarewe.mp4" 
        alt='Gif'
        width="100%" 
        height="auto" 
        autoPlay 
        loop 
        muted 
        playsInline
        className='border-none'
        />
    </div>
    {/* Right Text */}
    <div className=" text-black text-left md:mx-7 sm:mx-8">
        <p className="text-7xl -ms-3">
            Who are we?
        </p>
        <p className="text-3xl">
            We are upsense, an award-winning 
            digital design agency focusing on
            branding, web design, and Product
            designing in the heart of Singapore 
            We design creative brands, websites,
            and product that deliver results.
        </p>
        <div className="flex items-center mt-5">
            <button className="px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition font-semibold duration-200">
                Jump into our world
            </button>
            <button className="w-[60px] px-4 py-2 ms-3 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
                <Image src='/right-arrow.png' alt='Right Arrow' width={100} height={20} className='w-[25px] h-[25px]' />
            </button>
        </div>
    </div>
    </div>
    {/* Footer */}
    <div className="text-center mt-10">
        <p className='text-black text-2xl'>
            Teamed up with awesome brands through the years.
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 justify-items-center items-center'>
            <Image src='/fiverr.png' alt='fiverr' width={200} height={100} />
            <Image src='/fintech.png' alt='Fintech' width={200} height={100} />
            <Image src='/hpr.png' alt='HPR' width={200} height={100} />
            <Image src='/learningpoint.png' alt='Learning Point' width={200} height={100} />
            <Image src='/PrincetonUniversity.png' alt='Princeton University' width={200} height={100} />
            <Image src='/unhcr.png' alt='UNHCR' width={200} height={100} />
        </div>
    </div>
    </div>
);
};

export default WhoAreWe;
