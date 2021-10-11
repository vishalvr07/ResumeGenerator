import Cv from './cv'
import React from 'react'
import { logout } from './userSlice';
import { useDispatch } from 'react-redux';

const Resume = () => {

    const dispatch = useDispatch();

    const handleback = (e) => {
        e.preventDefault();

        dispatch(logout());
    }
    return (
        <div>


            <button onClick={(e) => handleback(e)}>Back
            </button>

            


            <Cv />


            <br />  <br />
            <button >Download & Print
            </button>

        </div>
    )


}
export default Resume
