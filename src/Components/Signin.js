import React, { useState } from 'react'
import'./Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../FirebaseConfig';


const key = process.env.REACT_APP_API_KEY
function Signin() {
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")
  const [email, setmail] = useState("")
   
 
  
    let Navigation=useNavigate()

  const handle= (e )=>{
    e.preventDefault()
    const data = {
      email: email,
      password: password,
      

     
    }
    console.log(data)
    axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`, data)
    .then(res => {
      console.log(res)
      if(res.status===200  )
  
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
    <input value={email}   onChange={(e) => setmail(e.target.value)} className='box__text' type="email," placeholder='Enter Your Email'/>
    <input value={password} onChange={(e) => setpassword(e.target.value)}className= 'box__text' type="password"  placeholder='Password'/> 
    <button type='submit' className='login__btn' >Log In</button>
    </form>
    </div>
  )
}
export default Signin;
