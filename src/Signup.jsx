import { useState } from 'react'
import './Signup.css'
export default function Signup({ onLogin,onSwitch }){
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    function HandleSubmit(e){
        e.preventDefault();
        if(email && password){
            onLogin({name:email.split('@')[0],email})
        }
    }
    return(
        <div className="sign">
            <h2>Sign Up</h2>
            <form onSubmit={HandleSubmit}>
            <input type="text" placeholder="User-Name" required/>
            <input type="email" placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)} required/>
            <input type="Password" placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)} required/>
            <button type='Submit'>Sign Up</button>
            </form>
            <p onClick={onSwitch}>Already have an account? Login</p>
        </div>
    )
}