import React from 'react'
import Avatar from "@mui/material/Avatar";
import './Sidebar.css';
import './Suggestions';
import Suggestions from './Suggestions';

function Sidebar() {

    const toLogout =()=>{

        localStorage.clear();
        window.location.href='/';


    }

    return ( <div className = 'sidebar' >

        <div classNmae = "sidebar__header" >

        <a href="https://www.instagram.com/ashikq_/"> 
                       
                <Avatar className = "sideavatar"
                        alt = "ashik"
                        src = "../Images/Userprofilepic.jpeg"
                        sx = { { width: 56, height: 56 }} 
                        
                />
                        
     </a>
  
        <Suggestions/>
        </div>
        <div className = "sideun" > <strong> <a className = 'sideun__lin' href = "https://www.instagram.com/ashikq_/" > ashikq_ </a> </strong> <a className = 'suggestion__followb' href = '#' ><span onClick={toLogout} style= {{"color":"#1895F6" }} > Logout</span> </a> <p className='sidedis'>Ashik </p> </div>


        













        </div>
    )
}

export default Sidebar;