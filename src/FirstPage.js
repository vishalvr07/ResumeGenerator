import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {login} from './userSlice'
import './FirstPage.css'


function FirstPage() {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [loc, setLoc] = useState('');
    const [des, setDes] = useState('');
    const [email, setEmail] = useState('');
    const [ph, setPh] = useState('');
    const [profile, setProfile] = useState('');
    const [skills, setSkills] = useState('');
   

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({

            name: name,
            loc: loc,
            des: des,
            email: email,
            ph:ph,
            profile:profile,
            skills:skills,
            

        }));
    };


    return (<div>
            <div className="Head">
     <h1 > Resume Generator</h1>  </div>
        <br/>
        <br/>
        <form className="form" onSubmit={(e) => handleSubmit(e)}>


            <input className="text-box" type="text" placeholder="Full Name" name="name" value={name}
                onChange={(e) => { setName(e.target.value) }}
            /> <br />


            <input className="text-box" type="text" placeholder="Designation" name="Designation" value={des}
                onChange={(e) => { setDes(e.target.value) }} /> <br />


            <input className="text-box" type="text" placeholder="Location" name="location" value={loc}
                onChange={(e) => {setLoc(e.target.value) }} />     <br />

                
            <input className="text-box" type="text" placeholder="Email" name="Email" value={email}
                onChange={(e) => { setEmail(e.target.value) }} />     <br />


                
            <input className="text-box" type="text" placeholder="Phone no" name="Phone" value={ph}
                onChange={(e) => { setPh(e.target.value) }} />     <br />

            <input className="text-box" type="text" placeholder="Profile" name="Profile" value={profile}
                onChange={(e) => { setProfile(e.target.value) }} />     <br />

            <input className="text-box" type="text" placeholder="Skills" name="skills" value={skills}
                onChange={(e) => { setSkills(e.target.value) }} />     <br />


            <button className="btn" type="submit" >
                Submit  </button>


        </form>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        <h1> Welcome  :- {name} </h1>


    </div>
    )
}

export default FirstPage;


