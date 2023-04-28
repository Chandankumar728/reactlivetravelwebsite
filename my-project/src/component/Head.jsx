import React from 'react'
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';

const Head = () => {
  return (
    <div className='max-w[1240px] max-auto py-16  px-20 '>
                <h1 className='text-5xl text-center font-extrabold'>All inclusive Resorts </h1>
                <h2 className='text-2xl text-center py-2'>Best Places</h2>

                <div className='grid grid-rows-none  md:grid-cols-5 py-4 gap-2 md-gap-4'>
                      <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2 ' src={img5} alt="/" />
                      <img className='w-full h-full object-cover ' src={img1} alt="/" />
                      <img className='w-full h-full object-cover ' src={img2} alt="/" />
                      <img className='w-full h-full object-cover ' src={img3} alt="/" />
                      <img className='w-full h-full object-cover ' src={img4} alt="/" />
                </div>
    </div>
  )
}

export default Head