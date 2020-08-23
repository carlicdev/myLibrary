import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const SessionContext = createContext();

const SessionContextProvider = (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        getUser();
    },[]);

    const getUser = async () => {
        let res = await axios.get('/user/');
        setUser(res.data.user);
    };

    const _login = async (e, username, password) => {
        e.preventDefault();
        await axios.post('/user/login', {username, password});
        getUser();
    }

    console.log(user)
    return (
        <SessionContext.Provider value={{
            user,
            _login
        }}>
            {props.children}
        </SessionContext.Provider>
    )
}

export default SessionContextProvider
