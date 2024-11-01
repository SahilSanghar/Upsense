import Image from 'next/image';
import React from 'react'
import { FaArrowAltCircleRight } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed top-5 w-[1440px] mx-[50px] z-10 bg-opacity-50 bg-zinc-400 text-white rounded-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="text-xl font-bold">
          <Image src='/logo.jpg' alt='Logo' height={50} width={550} className='w-[80px] h-[80px]' />
        </div>
        <div className="space-x-8 text-black font-extralight">
          <a href="#about" className="hover:">Services +</a>
          <a href="#services" className="hover:">Work</a>
          <a href="#contact" className="hover:">Culture</a>
          <a href="#contact" className="hover:">Insights</a>
        </div>
        <div className="flex items-center">
          <button className='bg-black w-[120px] h-[35px] rounded-full'>Start Project</button>
          <button className='bg-black w-[50px] h-[35px] rounded-full px-3.5 ms-2'><FaArrowAltCircleRight className='h-5 w-5' /></button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar