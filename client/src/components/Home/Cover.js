import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillDropletFill } from 'react-icons/bs';

const Cover = () => {
    return (
        <div className='cover flex flex-wrap justify-center content-center h-screen'>
            <div className='text-center w-full mb-4'>
            <p className='text-gray-100 inline font-semibold text-6xl mb-4'>Una <span className='inline text-green-500'><BsFillDropletFill className='inline'/></span> de vida<span className='text-green-500 font-bold text-7xl'>.</span></p>
            </div>
                <Link to='/login'>
                    <button className='bg-green-500 px-2 py-1 hover:bg-green-600 lg:h-10 text-white  mr-1 rounded-tl rounded-bl shadow-md'>
                        Login
                    </button>   
                </Link>
                <Link to='/store'>
                    <button className='bg-green-500 px-2 py-1 hover:bg-green-600 lg:h-10 text-white  ml-1 rounded-tr rounded-br shadow-md'>
                        Tienda
                    </button>
                </Link>           
            <div className='text-center text-white w-full mt-1'>
                Registro
            </div>
        </div>
    )
}

export default Cover