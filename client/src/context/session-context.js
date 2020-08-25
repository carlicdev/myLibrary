import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const SessionContext = createContext();

const SessionContextProvider = (props) => {
    const [user, setUser] = useState(null);
    const [serverMsg, setServerMsg] = useState(null);

    useEffect(() => {
        getUser();
    },[]);

    const getUser = async () => {
        let res = await axios.get('/user/');
        setUser(res.data.user);
    };

    const _signin = async (e, username, email, password) => {
        e.persist();
        e.preventDefault();
        try {
            let res = await fetch('user/signin', {
                method: 'POST',
                body: JSON.stringify({username, email, password}),
                headers: { 'Content-Type': 'application/json'}
            });
            let data = await res.json();
            if (data.errors) {
                setServerMsg(data.errors)
            } else {
                setServerMsg(null)
               _login(username, password)
            }
        } catch (err) {
            console.log(err)
        }
    }

    const _login = async (username, password) => {
        await axios.post('/user/login', {username, password});
        getUser();
    }

    const _logout = async (e) => {
        e.preventDefault();
        await axios.get('/user/logout');
        getUser();
    }

    console.log(serverMsg)
    return (
        <SessionContext.Provider value={{
            user,
            serverMsg,
            _signin,
            _login,
            _logout
        }}>
            {props.children}
        </SessionContext.Provider>
    )
}

export default SessionContextProvider
