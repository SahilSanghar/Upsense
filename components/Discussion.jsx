import Image from 'next/image'
import React from 'react'

const Discussion = () => {
return (
    <div className="h-[80vh] z-10 bg-gray-900 rounded-[40px] -mt-10 py-[200px] text-center">
        <p className="text-8xl">
            Got a project <br />
            to discuss?
        </p>
        <div className="flex justify-center items-center pt-5">
            <button className='bg-[#6610f2] text-black h-[50px] w-[230px] rounded-full'>
                Book a FREE Strategy Call
            </button>
            <div className="bg-[#6e44ff] rounded-full h-[50px] w-[70px] py-1.5 px-3.5">
            <Image src='/right-arrow.png' alt='Right Arrow' height={20} width={200} className='h-[40px] w-[50px]' />
            </div>
        </div>
    </div>
)
}

export default Discussion