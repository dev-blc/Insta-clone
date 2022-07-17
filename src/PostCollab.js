import React from 'react'
import './Post.css'

import'./Navigation/PostMenu'


import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import PostMenu from './Navigation/PostMenu';

function PostCollab( {username,username2, caption, imageUrl, commantusername, Commant, Profilepic,Profilepic2 ,likes,viewcomments,location,verifyimg,UN_url,CmtUN_url,unmention}) {
  return (
    <div className = "post" >

           <div className = "post__header" >

           <AvatarGroup max={2}>
           <Avatar alt="ashik" src={Profilepic } sx = { { width: 26, height: 26 }} />
           <Avatar alt="av" src={Profilepic2} sx = { { width: 26, height: 26 }} />
            
         
         </AvatarGroup>
                    <h5 className = 'post__un' ><a  className="link__un" href={UN_url}> { username  } <span  style= {{"fontsize":"medium","color":"#989898"}}> & </span>  {username2}</a> <img src={verifyimg} className='verified_img'/> </h5> 
        
        
            </div>
               <img src = { imageUrl } className = "post__image" />

        

            <PostMenu/>


         <p className="post__likes"> {likes}</p>
        <p className = "post__text" > 
         <strong><a  className="link__un" href={UN_url}> { username }</a> </strong> {caption}  </p>

        

        <div className = "post__commant" >
        <p className='post__vc'> {viewcomments}</p>
        
        <p className = "post__text" > <strong> <a  className="link__un" href={CmtUN_url}>{ commantusername } </a> </strong> {Commant} </p>

        </div> 

        <div className = "post__footer" >

        <input text = "text"
        imgsrc = "./Images/Smile.svg"
        className = "post__commantbox"
        placeholder = "Add a commant..." />
        </div> 
        </div>



  )
}

export default PostCollab