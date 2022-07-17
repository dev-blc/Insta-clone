import React from 'react'
import './Post.css'

import'./Navigation/PostMenu'


import Avatar from '@mui/material/Avatar';
import PostMenu from './Navigation/PostMenu';

function Post({ username, caption, imageUrl, commantusername, Commant, Profilepic ,likes,viewcomments,location,verifyimg,UN_url,CmtUN_url,unmention}) {
    return ( 
        <div className = "post" >

           <div className = "post__header" >

                 <Avatar className = "post__avatar"
                 alt = "arunvijay"
                 src = { Profilepic }
                 /> 
                    <h3 className = 'post__un' ><a  className="link__un" href={UN_url}> { username  }</a> <img src={verifyimg} className='verified_img'/> </h3> 
        
        
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
export default Post;