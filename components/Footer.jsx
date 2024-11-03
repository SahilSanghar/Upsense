import Image from 'next/image';
import React from 'react';

const Footer = () => {
return (
    <div className="h-[50vh] -mt-10 -z-10 pt-[80px] bg-slate-300 text-black">
      {/* First row */}
    <div className=" grid grid-cols-4 gap-4 mb-4">
        <div className="p-4 rounded">
            <Image src='/hlogo3.svg' alt='Globe' height={20} width={500} className='h-[55px] w-[500px]' />
            <ul className="flex justify-around pt-5 text-xl">
                <li className="">
                    In
                </li>
                <li className="">
                    Be
                </li>
                <li className="">
                    IG
                </li>
                <li className="">
                    Tw
                </li>
                <li className="">
                    Dr
                </li>
            </ul>
        </div>
        <div className="p-4 rounded">
            <ul className="ps-8">
                <p className="text-3xl -ms-10 pb-5">We are operating from</p>
                <li className="flex items-center space-x-4">
                    <span className="">01:33 pm</span>
                    <Image src='/right-arrow.png' alt='Right Arrow' width={25} height={20} />
                    <span>CBD, Singapore</span>
                </li>
                <li className="flex items-center space-x-4">
                    <span className="">01:33 pm</span>
                    <Image src='/right-arrow.png' alt='Right Arrow' width={25} height={20} />
                    <span>Colombo, WP, Sri Lanka</span>
                </li>
                <li className="flex items-center space-x-4">
                    <span className="">01:33 pm</span>
                    <Image src='/right-arrow.png' alt='Right Arrow' width={25} height={20} />
                    <span>Male, Maldives</span>
                </li>
                <li className="flex items-center space-x-4">
                    <span className="">01:33 pm</span>
                    <Image src='/right-arrow.png' alt='Right Arrow' width={25} height={20} />
                    <span>Melbourne, Australia</span>
                </li>
            </ul>
        </div>
        <div className="p-4 rounded"></div>
        <div className="p-4 pb-8 rounded text-right pe-[50px]">
            <div className="ms-[150px] mb-2">
                <Image src="/logo.jpg" alt="Logo" height={20} width={100} />
            </div>
            <div className="">
                <p className="">
                    160 Robinson Road, Singapore <br />
                    Business Federation Cebter, <br />
                    Singapore (068914)
                </p>
            </div>
            <div className="">
                <p className="">
                    | Email | - info@upsense.sg
                </p>
            </div>
            <div className="">
                <p className="">
                    | Phone | - 65 86963594
                </p>
            </div>
        </div>
    </div>

      {/* Second row */}
    <div className="bg-slate-400 h-[12vh] grid grid-cols-4 gap-4">
        <div className="p-4 rounded">UPSENSE PTE LTD .2024</div>
        <div className="p-4 rounded">
            <p className="">
                SAY HELLO <br />
                <span className="">info@upsense.sg</span>
            </p>
        </div>
        <div className="p-4 rounded">
            SOCIAL MEDIA <br />
            <span className="">@upsensenow</span>
        </div>
        <div className="p-4 rounded">
            MADE IN SINGAPORE <br />
            with love
        </div>
    </div>
    </div>
);
};

export default Footer;
