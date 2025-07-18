import { useState } from 'react'
import './Login.css'

export default function Login({ onLogin, onSwitch }){
   const [email,setEmail]=useState('')
   const [password,setPassword]=useState('')

   function handleSubmit(e){
    e.preventDefault()
    if(email && password){
        onLogin({name:email.split('@')[0],email})
    }
   }

   return(
    <div className="auth-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)} required/>
            <input type="password" placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)} required/>
            <button type='Submit'>Login</button>
        </form>
        <div className='s'>
        <p onClick={onSwitch}>New user? Sign up</p></div>
    </div>
   )
}
