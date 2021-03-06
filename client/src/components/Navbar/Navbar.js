import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaCannabis } from 'react-icons/fa';
import { IoMdCloseCircle } from 'react-icons/io';
import { SessionContext } from '../../context/session-context';

const Navbar = () => {
    const { user, _logout } = useContext(SessionContext);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className='w-full bg-green-800'>
                <div className='flex p-2 justify-center content-center'>
                    <div className='text-white m-2 '>
                        <Link to='/'>
                            <FaCannabis size={25} />
                        </Link>
                    </div>
                    <div className='flex flex-wrap content-center mr-2 ml-auto'>
                        <button className='text-white mr-2  focus:outline-none hover:text-gray-400'
                                onClick={() => setIsOpen(!isOpen)}
                                >
                            {
                                isOpen ? <IoMdCloseCircle size={15} /> : <FaUserCircle size={15} />
                            }                       
                            {
                                user && <p className='text-white text-sm mr-2 inline-block'>{user}</p>
                            }
                        </button>
                    </div>
                </div>
            </div>
            {
                isOpen && (
                    <div className=' absolute top-1 right-0  text-white bg-green-600 mr-1 p-2 rounded-b'>
                        {
                            user && (
                                <div>
                                    <div className='hover:bg-green-800 mx-auto p-1 rounded' onClick={() => setIsOpen(!isOpen)}>
                                        <button type='button' className='focus:outline-none' onClick={_logout}>
                                            <Link to='/'>
                                            Logout
                                            </Link>
                                        </button>
                                    </div>
                                    <div className='hover:bg-green-800 mx-auto p-1 rounded' onClick={() => setIsOpen(!isOpen)}>
                                        <Link to='/orders'>
                                            MyOrders
                                        </Link>
                                    </div>
                                </div>
                            )
                        }
                        {
                            !user && (
                                <div>
                                    <div className='hover:bg-green-800 mx-auto p-1 rounded'
                                        onClick={() => setIsOpen(!isOpen)}
                                    >
                                        <Link to='/login'>
                                            Login
                                        </Link>
                                    </div>
                                    <div className='hover:bg-green-800 mx-auto p-1 rounded'
                                        onClick={() => setIsOpen(!isOpen)}
                                    >
                                        <Link to='/register'>
                                            Register
                                        </Link>
                                    </div>
                                </div>    
                            )
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Navbar
