import React from 'react'
import './Story.css'
import Avatar from "@mui/material/Avatar";

function Story({ ProfileStory, username ,Storyun__url}) {
    return ( 
        
         <div className = 'story' >
            <div className = "storyBorder" >
              <div className = "story__Border" >
                 <Avatar className = "storyavatar" alt = "arunvijay"  src = { ProfileStory } sx = {  { width: 61, height: 61} } onclick=""
                 /> 
              </div>


            </div> 
             <p className = 'storyun' >  { username } </p>

        </div>
    )
}

export default Story;