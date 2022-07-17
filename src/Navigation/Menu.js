import React from 'react'
import "./Menu.css"
import { ReactComponent as Home } from "../Images/home.svg";
import { ReactComponent as Message } from "../Images/Message.svg";
import { ReactComponent as NewPost } from "../Images/newPost.svg";
import { ReactComponent as FindPeople } from "../Images/findPeople.svg";
import { ReactComponent as ActivityFeed } from "../Images/activityfeed.svg";
import Avatar from "@mui/material/Avatar";

function Menu() {

    return ( 
        
        <div className = "menu" >
          <Home className = "icon" />
          <Message className = "icon" />
          <NewPost className = "icon" />
          <FindPeople className = "icon" />
         <ActivityFeed className = "icon" />
        
           <a href="https://www.instagram.com/ashikq_/" >   <Avatar className = "profile__avatar"
               alt = "ashikq_"
                src = "../Images/Userprofilepic.jpeg"
                sx = { { width: 24, height: 24 } } />
                
            </a> 

</div>

    )
}

export default Menu;