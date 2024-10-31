import React from 'react'

const Hero = () => {
return (
    <div className="relative flex items-center justify-center h-[100vh] w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/hero-image.jpg')" }}>
    <div className="absolute inset-0 bg-slate-300 opacity-60"></div>
    <div className="relative z-10 text-left max-w-2xl mx-auto text-black">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Branding Digital Experiences & Innovative Strategies</h1>
        <p className="text-lg md:text-xl mb-8">Creative*Design Studio</p>
        <p className="text-lg md:text-xl mb-8">Located In the heart of singapore</p>
        <p className="">
            font * font * font
        </p>
    </div>
    </div>
)
}

export default Hero