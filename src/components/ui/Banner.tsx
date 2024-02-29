'use client';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import heroBG from '../../assets/banner.jpg';
const Banner = () => {
  return (
    <div className='main-banner  mt-10 relative  h-screen bg-gradient-to-r from-transparent to-gray-900  '>
      <div className='   mix-blend-overlay   '>
        <Image
          src={heroBG}
          fill
          alt=' hero image'
          className='object-cover object-center md:object-center    '
        />
      </div>

      <div className='   text-white h-screen flex  justify-end items-center container '>
        <div className=' text-end'>
          <h1 className='sg-title-txt text-5xl'>
            <span className='text-white'>Cross Road Initiative</span>
          </h1>
          <div className=' text-white font-medium text-2xl space-y-1'>
            <p className=''>We are here to help</p>
            <p className=''>Bangladeshi Studnets</p>
            <p className=''>We are here to help</p>
            <p className=''>Pursue higher education</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

// <div className='md:grid md:grid-cols-12 md:gap-12 '>
//   <div className='md:col-span-5 hidden md:block'></div>
//   <div className='md:col-span-7 text-right bg-red-400'>
//     <div className=''>
//       <h1 className='sg-title-txt text-5xl'>
//         <span className='text-white'>Cross Road Initiative</span>
//       </h1>
//       <div className=' text-white font-medium text-2xl space-y-1'>
//         <p className=''>We are here to help</p>
//         <p className=''>Bangladeshi Studnets</p>
//         <p className=''>We are here to help</p>
//         <p className=''>Pursue higher education</p>
//       </div>
//     </div>
//   </div>
// </div>;
