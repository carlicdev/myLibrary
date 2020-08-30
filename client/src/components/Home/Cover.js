import React from 'react';
import { BsFillDropletFill } from 'react-icons/bs';

const Cover = () => {
    return (
        <div className='cover flex flex-wrap justify-center content-center h-screen'>
            <div className='text-center w-full mb-4'>
            <p className='text-gray-100 inline font-semibold text-6xl mb-4'>Una <span className='inline text-green-500'><BsFillDropletFill className='inline'/></span> de vida<span className='text-green-500 font-bold text-7xl'>.</span></p>
            </div>
            <input className='h-8 lg:h-10 rounded-tl rounded-bl w-1/3 px-2 py-1 focus:outline-none focus:shadow-outline shadow-md' placeholder='correo electrónico'/>
            <button className='bg-green-500 px-2 py-1 lg:h-10 text-white  rounded-tr rounded-br shadow-md'>Saber mas</button>
        </div>
    )
}

export default Cover