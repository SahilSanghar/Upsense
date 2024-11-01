import Image from 'next/image'
import React from 'react'

const Hero = () => {
return (
    <div className="relative flex items-center justify-between ps-[100px] h-[100vh] w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/hero-image.jpg')" }}>
    <div className="absolute inset-0 opacity-60"></div>
    <div className=" className='h-[50px] w-[50px]' z-10 text-left text-black">
        <h1 className="text-md md:text-3xl font-light italic mb-4">Branding Digital Experiences & Innovative Strategies</h1>
        <p className="text-lg md:text-7xl mb-8">CREATIVE* <br />DESIGN STUDIO</p>
        <p className="text-lg md:text-5xl md:font-thin mb-8">Located In the heart of singapore</p>
        <p className="flex items-center space-x-4">
            <Image src='/hlogo1.svg' alt='Logo 1' height={20} width={200} className='h-[50px] w-[50px]' />
            <Image src='/hlogo2.svg' alt='Logo 1' height={20} width={200} className='h-[50px] w-[50px]' /> 
            <Image src='/hlogo3.svg' alt='Logo 1' height={20} width={200} className='h-[50px] w-[100px]' />
        </p>
    </div>
    <div className="">
    <div className="relative bg-white h-[380px] w-[300px] mr-10 rounded-[30px] rounded-bl-[100px] overflow-hidden">
      {/* Main content */}
    <div className="py-6 px-6">
        <div className='flex'>
            <div className="">
                <Image src='/hright.png' alt='Card Right' width={500} height={20} className='w-[50px]' />
            </div>
            <div className="text-right text-black ps-10">
                <h2 className="text-xl font-semibold">Prof. Sigrid <br />Adriaenssens</h2>
                <p className="text-sm">Princeton University.USA</p>
            </div>
        </div>
        <div className="text-black px-[40px] py-[25px]">
            <p>
                "They strike the perfect <br />
                balance between <br />
                creative design flair <br />
                and truly listening to <br />
                their clients' needs."
            </p>
        </div>
        
        <button className='absolute right-[50px] bottom-7 bg-black text-lg h-[50px] w-[80px] rounded-full'>
            More
        </button>
    </div>

      {/* Bottom-left inward curve */}
    <div className="absolute bottom-0 left-0 w-24 h-24 bg-slate-300 rounded-bl-[300px] rounded-tr-[140px]">
        <Image src='/left-down.png' alt='Down Left Arrow' width={800} height={20} className='w-[45px] h-[45px] absolute top-4 left-7' />
    </div>
    </div>
    <div className="bg-green-600 h-[10]"></div>
    </div>
    </div>
)
}

export default Hero