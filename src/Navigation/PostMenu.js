import React from 'react'
import './PostMenu.css';
import { ReactComponent as Like } from '../Images/like.svg';
import { ReactComponent as Commant } from '../Images/Commends.svg';
import { ReactComponent as Share } from '../Images/Share.svg';
import { ReactComponent as Save } from '../Images/Save.svg';

function PostMenu() {
    return ( 
        <div className = "postMenu" >
        <Like className = "icons" />
        <Commant className = "icons" />
        <Share className = "icons" />
        <Save className = "saveicn" />

        </div>

    )
}

export default PostMenu;