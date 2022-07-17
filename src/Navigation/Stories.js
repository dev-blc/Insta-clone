import React from 'react'
import './Stories.css';
import Story from './Story';


function Stories() {
    return ( 
        
        <div className = "stories" >

           <Story username = "roobesh_balaji" ProfileStory = "../Images/RBstory.jpeg"  />

           <Story username = "cibhibaskar" ProfileStory = "../Images/Cbstory.jpeg"/>

           <Story username = "raeesstarboy" ProfileStory = "../Images/Raeesstory.jpeg"/>

           <Story username = "a.shivamani" ProfileStory = "../Images/SManistory.jpeg"/>

           <Story username = "bigchill13" ProfileStory = "../Images/Abustory.jpeg"/>

           <Story username = "_._adithya_raj_._" ProfileStory = "../Images/Adistory.jpeg"/>

           <Story username = "inside_vichus_world" ProfileStory = "../Images/Vishaalstory.jpeg"/>

           <Story username = "post_lemon" ProfileStory = "../Images/Samstory.jpeg"/>

           
           <Story username = "irshu-sh" ProfileStory = "../Images/Irshadstory.jpeg"/>

        </div>
    );
}

export default Stories;