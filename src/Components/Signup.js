
import'./Signup.css';
import React, { useState } from 'react'
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import '../FirebaseConfig';

const key = process.env.REACT_APP_API_KEY
function Signup() {

  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")
  const [email, setmail] = useState("")
  const [Fullname, setFullname] = useState("")
  
  let Navigation=useNavigate()

  const handle= (e )=>{
    e.preventDefault()
    const data = {
      email: email,
      password: password
      
     
    }
    console.log(data)
    axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`, data)
    .then(res => {
      console.log(res)
      if(res.status===200 )
  
      {
        
        localStorage.setItem("username", username)
        return Navigation("/Home")
        
      } 
    }).catch( err =>{
      
       console.log(err)
    })
   }
 
  return (
    <div>
    <form onSubmit={handle}>
    <input value={email}  onChange={(e) => setmail(e.target.value)} className='box__text' type="text" placeholder='Mobile Number or Email'/>
    <input value={Fullname} onChange={(e) => setFullname(e.target.value)}  className='box__text' type="text" placeholder='Full Name'/>
    <input value={username} onChange={(e) => setusername(e.target.value)}className='box__text' type="text" placeholder='Username'/>
     <input value={password} onChange={(e) => setpassword(e.target.value)} className= 'box__text' type="password"  placeholder='Password'/>
    <button type='submit' className='login__btn'>Sign Up</button>
    </form>
    </div>
  )
}

export default Signup;