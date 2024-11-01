import Image from 'next/image';
import React from 'react';

const WhoAreWe = () => {
return (
    <div className="">
    {/* Main Body */}
    <div className="flex justify-around">
    {/* Left Gif */}
    <div className="w-full max-w-md">
        <video 
        src="/whoarewe.mp4" 
        alt='Gif'
        width="100%" 
        height="auto" 
        autoPlay 
        loop 
        muted 
        playsInline
        className="rounded-lg shadow-lg"
        />
    </div>
    {/* Right Text */}
    <div className=" text-black text-left">
        <p className="text-7xl">
            Who are we?
        </p>
        <p className="text-3xl">
            We are upsense, an award-winning <br />
            digital design agency focusing on <br />
            branding, web design, and Product <br />
            designing in the heart of Singapore <br />
            We design creative brands, websites, <br />
            and product that deliver results.
        </p>
        <div className="flex items-center">
            <button className="bg-green-400 h-[40px] w-[180px] rounded-full">
                Jump into our world
            </button>
            <div className="bg-green-400 h-[40px] w-[50px] rounded-full">
                <Image src='/right-arrow.png' alt='Right Arrow' width={500} height={200} className='w-[30px] h-[30px] ms-2 mt-1.5' />
            </div>
        </div>
    </div>
    </div>
    {/* Footer */}
    <div className="text-center mt-10">
        <p className='text-black text-2xl'>
            Teamed up with awesome brands through the years.
        </p>
        <div className='flex justify-around'>
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
