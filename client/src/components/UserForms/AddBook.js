import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { SessionContext } from '../../context/session-context';

const AddBook = () => {
    const { user } = useContext(SessionContext)

    return (
        <div>
            {
                !user  && <Redirect to='/login'/> 
            }
            {
                user && (
                    <h1>Hello user lets add a book</h1>
                )
            }
        </div>
    )
}

export default AddBook;
