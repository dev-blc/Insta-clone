import React from 'react'
import logo from "../Images/logo.png";
import searchIcon from "../Images/search-icons-283914 (1).png";
import Menu from './Menu';
import './Nav.css';

function Nav() {
    return ( 
        <div className = "Nav">
            <div className = "container">
                <a href='#'>  <img className = "logo"  src = { logo } alt = "instagramlogo" /></a>

                <div className = "search" >
                   <img className = "searchIcon" src = { searchIcon } alt = "search icon" />
                    <span className = "searchText" > search </span> 
                </div> 
              <Menu />
             </div>



        </div>
    )
}

export default Nav;