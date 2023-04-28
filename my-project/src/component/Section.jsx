import React from 'react'

const Section = () => {
    return (
        <div className='px-20 py-4 shadow-sm'>
            <div className='grid grid-cols-3 md:col-span-2 sm:col-span-1 '>
                <div className='grid col-span-2 '>
                    <h1 className='text-3xl text-center font-extrabold '>The journey of a thousand miles begins with a single step</h1>
                    <p className='text-1xl font-thin '>Travelling is an amazing way to learn a lot of things in life. A lot of people around the world travel every year to many places. Moreover, it is important to travel to humans. Some travel to learn more while some travel to take a break from their life. No matter the reason, travelling opens a big door for us to explore the world beyond our imagination and indulge in many things. Therefore, through this Essay on Travel, we will go through everything that makes travelling great.</p>
                    

                </div>
                <div className='grid col-span-1  px-8 '>
                    <div className=' text-center border border-md '>
                        <h1>GET AN ADDITIONAL 10% OFF</h1>
                        <h1 className='py-4'>10 HOURS LEFT</h1>
                        <button className='bg-black text-white px-24'>BOOK NOW AND SAFE</button>

                        <div className='border-b'>

                            <div class="sm:col-span-1">
                                <label for="dog" class="block text-sm font-medium leading-6 text-gray-900"> 	DESINATION</label>
                                <div class="mt-2 px-12">
                                    <select id="country" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 ">
                                        <option>Select </option>
                                        <option>Paris</option>
                                        <option>Maui</option>
                                        <option>Bora Bora</option>
                                        <option>Tahiti</option>

                                    </select>
                                </div>

                            </div>

                            <div class="sm:col-span-1">
                                <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">CHECH-IN  </label>
                                <div class="mt-2 px-12">
                                    <input type="date" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div class="sm:col-span-1">
                                <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">CHECK-OUT </label>
                                <div class="mt-2  px-12">
                                    <input type="date" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div className='py-6'>
                            <button className='bg-blue-500 text-white px-24'>BOOK NOW AND SAFE</button>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Section