import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='w-full bg-gray-100 py-4'>
            <div className='max-w-[1240px] max auto flex flex-col px-4 '>
                <div>
                    <h1 className='text-3xl font-bold'>Travels.</h1>
                    <div className='flex justify-between  w-full sm:max-w-[280px] my-4 text-blue-500 text-2xl '>
                        <FaFacebook />
                        <FaTwitter />
                        <FaInstagram />
                        <FaYoutube />
                        <FaLinkedin />

                    </div>
                </div>

            </div>
            <div className='flex justify-between font-semibold'>
                <ul className='lg:flex' >
                    <li>About</li>
                    <li>Partnership</li>
                    <li>Carrers</li>
                    <li>New Room</li>
                    <li>Travel</li>
                    <li>Advertising</li>
                </ul>
                <ul className='text-right lg:flex'>
                    <li>Home</li>
                    <li>Destination</li>
                    <li>View</li>
                    <li>Book</li>
                    <li>Travel</li>
                </ul>
            </div>

        </div>
    )
}

export default Footer