import { useState } from 'react';
import Login from './Login'
import Signup from './Signup'
import Home from './Home'
import Account from './Account'
import './App.css'

function App(){
  const [user,setUser]=useState(null)
  const [isNewUser,setIsNewUser]=useState(false)
  const [showAccount,setShowAccount]=useState(false)

  if(!user){
    return isNewUser ?(
      <Signup onLogin={setUser} onSwitch={()=>setIsNewUser(false)} />
    ):(
      <Login onLogin={setUser} onSwitch={()=>setIsNewUser(true)} />
    )
  }

  return showAccount ? (
    <Account user={user} onLogout={()=>setUser(null)} />
  ):(
    <Home user={user} onShowAccount={()=>setShowAccount(true)} />
  )
}

export default App;