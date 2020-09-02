import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { SessionContext } from '../../context/session-context';

const Signin = () => {
    const { user, _signin, serverMsg } = useContext(SessionContext);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            {
                user && <Redirect to='/store'/>
            }
            {
                !user && (
                    <div className='container py-10'>
                        <div className='max-w-sm bg-gray-100 mx-auto shadow-md rounded'>
                            <div className='w-full bg-green-800 p-2 rounded-t'>
                                <p className='font-semibold text-lg text-white text-center'>Register</p>
                            </div>
                            <form onSubmit={(e) => _signin(e, username, email, password)}>
                                <div className='flex flex-wrap w-full p-4'>
                                    <label className='w-full text-gray-600 ml-1 mr-auto'>
                                        Username
                                    </label>
                                    <input type='text' className='w-full px-2 py-1 rounded border border-blue-200 focus:outline-none focus:shadow-outline bg-blue-100'
                                            name='username'
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                    />
                                    {
                                        serverMsg ?  <p className='text-small text-red-700'>{serverMsg.username}</p> : null
                                    }
                                    <label className='w-full text-gray-600 ml-1 mr-auto'>
                                        Email
                                    </label>
                                    <input type='email' className='w-full px-2 py-1 rounded border border-blue-200 focus:outline-none focus:shadow-outline bg-blue-100'
                                            name='email'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                    />
                                    {
                                        serverMsg ? <p className='text-small text-red-700'>{serverMsg.email}</p> : null
                                    }
                                    <label className='w-full text-gray-600 ml-1 mr-auto'>
                                        Password
                                    </label>
                                    <input type='password' className='w-full px-2 py-1 rounded border border-blue-200 focus:outline-none focus:shadow-outline bg-blue-100'
                                            name='password'
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            />
                                                    {
                                                        serverMsg ? <p className='text-small text-red-700'>{serverMsg.password}</p> : null
                                                    }
                                    <button type='submit' className='mt-4 bg-green-800 hover:bg-green-700 py-1 px-4 text-white focus:outline-none rounded w-full'>
                                        Register
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Signin;
