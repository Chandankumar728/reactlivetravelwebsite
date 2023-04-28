import React,{useState} from 'react'
import {BsPersonCircle} from 'react-icons/bs'
import {FcSearch} from 'react-icons/fc'
import {AiOutlineCloseSquare} from 'react-icons/ai'
import {BiMenu} from 'react-icons/bi'
import {FaFacebook,FaTwitter,FaInstagram,FaYoutube,FaLinkedin} from 'react-icons/fa'




const Navbar = () => {
  const [nav, setNav]=useState(false)
  const handelNav = () =>{
    setNav(!nav)
  }
  return (
    <div className='flex w-full justify-between items-center h-20 px-6 absolute z-10 text-white '>
           <div>
            <h1 className='text-3xl md:text-4xl font-bold'>Travels.</h1>
           </div>
           <ul className=' hidden  md:flex space-x-6 font-bold '>
            
            <li>Home</li>
            <li>Destination</li>
            <li>View</li>
            <li>Book</li>
            <li>Travel</li>

           </ul>

           <div className='hidden md:flex space-x-3'>
           <FcSearch size={20} />
            <BsPersonCircle size={20}/>
           </div>

           <div onClick={handelNav} className='md:hidden z-10 ' >
           {/* <AiOutlineCloseSquare size={20}/> */}
          {nav? <AiOutlineCloseSquare className='text-black' size={20} /> : <BiMenu size={20} />} 
           </div>
               {/* mobile drop down menu   left -100% dispalying things hiddeen  */}
           {/* <div  className='absolute left-[-100%] top-0 w-full bg-gray-300 px-4 py-7 flex flex-col ' > */}
           <div onClick={handelNav}  className={nav ?'absolute text-black left-0 top-0 w-full bg-gray-300 px-4 py-7 flex flex-col ' :'absolute left-[-100%]'} >
           
            <ul>
           <h1 className='text-3xl font-extrabold'>Travels</h1>
            <li className='border-b'>Home</li>
            <li className='border-b'>Destination</li>
            <li className='border-b'>View</li>
            <li className='border-b'>Book</li>
           
            <div className='flex flex-col '>
            <button className='my-4'>Accounts</button>
            
            <button>  Search</button>
            </div>
            <div className='text-2xl cursor-pointer text-blue-800 flex justify-between my-6'>
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
              <FaYoutube />
              <FaLinkedin />

            </div>
            </ul>
           </div>
    </div>
  )
}
 
export default Navbar