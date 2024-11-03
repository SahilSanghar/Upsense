import Image from 'next/image';
import React from 'react';
import { Button } from './ui/moving-border';

const Projects = () => {
  return (
    <div className="bg-gray-900 py-10">
      {/* Header */}
      <div className='flex justify-between mx-10 py-10'>
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 px-[100px]">
        <div className="grid grid-cols-1 gap-4">
          <div className="">
            <Image src='/p1.jpeg' alt='Project 1' height={80} width={800} className='h-[400px] w-[600px]' />
            <p className='text-gray-400 text-xl py-2'>
              Arenaton digital product overhaul
            </p>
            <p className='text-white text-3xl pb-1'>
              Elevating Arenaton: A Defi, NFT, <br />
              and Betting Platform's <br />
              Transformation 
            </p>
            <div className="space-x-3 space-y-3">
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-[18px]"
              >
                Rebranding
              </Button>
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-[18px]"
              >
                Web Development
              </Button>
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-[18px]"
              >
                Product Redesign
              </Button><br />
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-[18px]"
              >
                Web Design
              </Button>
            </div>
          </div>
          <div className="">
            <Image src='/p2.jpg' alt='Project 2' height={80} width={800} className='h-[400px] w-[600px]' />
            <p className='text-gray-400 text-xl py-2'>
              Knowledge Sharing Economy
            </p>
            <p className='text-white text-3xl pb-1'>
              Transforming Qitt: From Insight to <br />
              Impact in the Q&A Space
            </p>
            <div className="space-x-3 space-y-3">
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-[18px]"
              >
                Branding
              </Button>
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-[18px]"
              >
                Product Redesign
              </Button>
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-[18px]"
              >
                User Research
              </Button><br />
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-[18px] w-[200px]"
              >
                Corporate Identity Design
              </Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="">
            <Image src='/p3.jpg' alt='Project 3' height={80} width={800} className='h-[400px] w-[600px]' />
            <p className='text-gray-400 text-xl py-2'>
              Arenaton digital product overhaul
            </p>
            <p className='text-white text-3xl pb-1'>
              Elevating Arenaton: A Defi, NFT, <br />
              and Betting Platform's <br />
              Transformation 
            </p>
            <div className="space-x-3 space-y-3">
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-[18px]"
              >
                Rebranding
              </Button>
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-[18px]"
              >
                Web Development
              </Button>
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-[18px]"
              >
                Product Redesign
              </Button><br />
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-[18px]"
              >
                Web Design
              </Button>
            </div>
          </div>
          <div className="">
            <Image src='/p4.jpg' alt='Project 4' height={80} width={800} className='h-[400px] w-[600px]' />
            <p className='text-gray-400 text-xl py-2'>
              Elevating Copperwell California
            </p>
            <p className='text-white text-3xl pb-1'>
              A Comprehensive Branding, <br />
              eCommerce, and Marketing <br />
              Transformation
            </p>
            <div className="space-x-3 space-y-3">
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-[18px]"
              >
                Brand Strategy
              </Button>
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-[18px]"
              >
                Rebranding
              </Button>
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-[18px]"
              >
                Web Design
              </Button><br />
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-[18px]"
              >
                Corporate Identity Design
              </Button>
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-[18px]"
              >
                Web Development
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
