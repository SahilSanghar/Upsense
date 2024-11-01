import Image from 'next/image'
import React from 'react'

const Projects = () => {
return (
    <div className="bg-gray-900">
    {/* Header */}
    <div className='flex justify-between mx-10 py-5'>
        <p className='text-5xl'>
            Take a look at our <br />
            projects
        </p>
        <div className='flex items-center'>
            <button className='text-xl'>
                See all work
            </button>
            <Image src='/right-arrow.png' alt='Right Arrow' width={20} height={20} className='h-[30px] w-[30px] ms-4' />
        </div>
    </div>
    {/* Main Cards */}
    <div className="grid grid-cols-2 md:grid-cols-1 gap-16 px-[100px]">
    <div className="grid grid-cols-2 gap-4">
        <div className="">
            <Image src='/p1.jpeg' alt='Project 1' height={80} width={800} className='h-[400px] w-[600px]' />
            <p className='text-gray-400 text-xl'>
                Arenaton digital product overhaul
            </p>
            <p className='text-white text-3xl'>
                Elevating Arenaton: A Defi, NFT, <br /> 
                and Betting Platform's <br />
                Transformation 
            </p>
            <div className="">
                <button className="border-dashed border-white border-2 rounded-full w-[120px] h-[40px]">
                    Rebranding
                </button>
                <button className="border-dashed border-white border-2 rounded-full w-[170px] h-[40px]">
                    Web Development
                </button>
                <button className="border-dashed border-white border-2 rounded-full w-[170px] h-[40px]">
                    Product Redesign
                </button><br />
                <button className="border-dashed border-white border-2 rounded-full w-[120px] h-[40px]">
                    Web Design
                </button>
            </div>
        </div>
        <div className="">
            <Image src='/p2.jpg' alt='Project 2' height={80} width={800} className='h-[400px] w-[600px]' />
            <p className='text-gray-400 text-xl'>
                Knowledge Sharing Economy
            </p>
            <p className='text-white text-3xl'>
                Transforming Qitt: From Insight to <br />
                Impact in the Q&A Space
            </p>
            <div className="">
                <button className="border-dashed border-white border-2 rounded-full w-[110px] h-[40px]">
                    Branding
                </button>
                <button className="border-dashed border-white border-2 rounded-full w-[170px] h-[40px]">
                    Product Redesign
                </button>
                <button className="border-dashed border-white border-2 rounded-full w-[150px] h-[40px]">
                    User Research
                </button><br />
                <button className="border-dashed border-white border-2 rounded-full w-[220px] h-[40px]">
                    Corporate Identity Design
                </button>
            </div>
        </div>
    </div>
    <div className="grid grid-cols-2 gap-4">
        <div className="">
            <Image src='/p3.jpg' alt='Project 3' height={80} width={800} className='h-[400px] w-[600px]' />
            <p className='text-gray-400 text-xl'>
                Arenaton digital product overhaul
            </p>
            <p className='text-white text-3xl'>
                Elevating Arenaton: A Defi, NFT, <br /> 
                anc Betting Platform's <br />
                Transformation 
            </p>
            <div className="">
                <button className="border-dashed border-white border-2 rounded-full w-[120px] h-[40px]">
                    Rebranding
                </button>
                <button className="border-dashed border-white border-2 rounded-full w-[170px] h-[40px]">
                    Web Development
                </button>
                <button className="border-dashed border-white border-2 rounded-full w-[170px] h-[40px]">
                    Product Redesign
                </button><br />
                <button className="border-dashed border-white border-2 rounded-full w-[120px] h-[40px]">
                    Web Design
                </button>
            </div>
        </div>
        <div className="">
            <Image src='/p4.jpg' alt='Project 4' height={80} width={800} className='h-[400px] w-[600px]' />
            <p className='text-gray-400 text-xl'>
                Elevating Copperwell California
            </p>
            <p className='text-white text-3xl'>
                A Comprehensive Branding, <br />
                eCommerce, and Marketing <br />
                Transformation
            </p>
            <div className="">
                <button className="border-dashed border-white border-2 rounded-full w-[140px] h-[40px]">
                    Brand Strategy
                </button>
                <button className="border-dashed border-white border-2 rounded-full w-[120px] h-[40px]">
                    Rebranding
                </button>
                <button className="border-dashed border-white border-2 rounded-full w-[120px] h-[40px]">
                    Web Design
                </button><br />
                <button className="border-dashed border-white border-2 rounded-full w-[220px] h-[40px]">
                    Corporate Identity Design
                </button>
                <button className="border-dashed border-white border-2 rounded-full w-[170px] h-[40px]">
                    Web Development
                </button>
            </div>
        </div>
    </div>
    </div>
    </div>
)
}

export default Projects