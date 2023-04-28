import React from 'react'
import {FcSearch} from 'react-icons/fc'
import vid from '../assets/ocean.mp4';

const Main = () => {
  return (
    <div className='w-full h-screen relative'>
        <video src={vid} className='w-full h-full object-cover' 
        autoPlay loop muted />
        <div className='absolute w-full h-full top-0 left-0 text-center my-[20%]
        '>
          <h1 className='text-4xl  font-bold text-white'>First class Travel</h1>
          <h2 className='text-3xl font-thin py-3  text-white'>Top 1% Locations worldwide</h2>
          <form className='flex justify-between items-center max-w-[700px] mx-auto w-full  border p-1 rounded-md text-black bg-gray-100/30'>
              <div>
                <input className='bg-transparent  w-[300px] sm:w-[600px] px-11 
          ' type="text"  placeholder='Search destination'/>
              </div>
              <div>
              <button  >
               <FcSearch/>
                 </button>
              </div>

          </form>
        </div>

    </div>
  )
}

export default Main