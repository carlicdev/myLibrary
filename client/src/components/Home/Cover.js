import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillDropletFill } from 'react-icons/bs';

const Cover = () => {
    return (
        <div className='cover flex flex-wrap justify-center content-center h-screen'>
            <div className='text-center w-full mb-4'>
            <p className='text-gray-100 inline font-semibold text-6xl mb-4'>Una <span className='inline text-green-500'><BsFillDropletFill className='inline'/></span> de vida<span className='text-green-500 font-bold text-7xl'>.</span></p>
            </div>
            <div className='container text-center'>
                <div className='block'>
                <Link to='/login'>
                    <button className='w-64 bg-green-500 px-2 py-1 hover:bg-green-600 lg:h-10 text-white rounded shadow-md font-semibold focus:outline-none'>
                        Login
                    </button>   
                </Link>
                </div>
                <div className='block mt-2'>
                <Link to='/store'>
                    <button className='w-64  bg-green-500 px-2 py-1 hover:bg-green-600 lg:h-10 text-white rounded shadow-md font-semibold focus:outline-none'>
                        Tienda
                    </button>
                </Link>
                </div>  
                </div>   
            <div className='text-center text-white w-full mt-1'>
                <Link to='/register'>
                Registro
                </Link>
            </div>
        </div>
    )
}

export default Cover