import React from "react";
import "./Suggestions.css";
import Avatar from "@mui/material/Avatar";


function Suggestions() {
    return ( 
        <div >
          <div className = "suggestion__container" >
            <div className = "suggestion__head" >
             <div className = "siggestion__text" >
                <p> Suggestion for you </p> 
                 <div className = "suggestion__text"> See All </div> 
                 </div> 
                 </div>

        <div className = "suggestion__body" >
        <div className = "suggestion__friends" >
        <Avatar className = "suggestion__avathar"
        alt = "Ben10"
        src = "../Images/Bendp.jpeg  "
        sx = {
            { width: 36, height: 36 } }
        /> <div className = "suggestion__un" >ben_10<a className = "suggestion__followb"
        href = "#" ><span style= {{"color":"#1895F6" }} > Follow </span> </a> <p className = "suggestion__dis" > New to Instagram </p> </div> 
        </div>

        <div className = "suggestion__friends" >
        <Avatar className = "suggestion__avathar"
        alt = "Goku"
        src = "../Images/Gokudp.jpeg "
        sx = {
            { width: 36, height: 36 } }
        /> 
        <div className = "suggestion__un" > goku__<a className = "suggestion__followb"
        href = "#"> <span style= {{"color":"#1895F6" }} >Follow </span> </a> 
        <p className = "suggestion__dis" > New to Instagram </p>
        </div>
        </div>

        <div className = "suggestion__friends" >
        <Avatar className = "suggestion__avathar"
        alt = "Ash"
        src = "../Images/Ashdp.jpeg "
        sx = {
            { width: 36, height: 36 } }
        /> 
        <div className = "suggestion__un" > ash.ket <a className = "suggestion__followb"
        href = "#"> <span style= {{"color":"#1895F6" }} > Follow </span> </a> 
        <p className = "suggestion__dis" > New to Instagram </p>
        </div>
        </div>
           

        <div className = "suggestion__friends" >
        <Avatar className = "suggestion__avathar"
        alt = "vegeta"
        src = "../Images/Vegetadp.jpeg"
        sx = {
            { width: 36, height: 36 } }
        /> 
        <div className = "suggestion__un" > _vegeta <a
        href = "#"  className = "suggestion__followb"> <span style= {{"color":"#1895F6" }} >Follow </span> </a> 
        <p className = "suggestion__dis" > New to Instagram </p>
        </div>
        </div>
         
        <div className = "suggestion__friends" >
        <Avatar className = "suggestion__avathar"
        alt = "piccolo"
        src = "../Images/pikaloodp.jpeg"
        sx = {
            { width: 36, height: 36 } }
        /> 
        <div className = "suggestion__un" > piccolo_ <a className = "suggestion__followb"
        href = "#"><span style= {{"color":"#1895F6" }} > Follow  </span></a> 
        <p className = "suggestion__dis" > New to Instagram </p>
        </div>
        </div>
         




        </div>

        <div className = "suggestion__footer" >
        <ul className = "links" >
        <li> <a className = "li__link" href = "https://about.instagram.com/" > About </a> </li> 
        <li><a className = "li__link" href = "https://help.instagram.com/" > Help </a> </li>
        <li> <a className = "li__link" href = "https://about.instagram.com/en_US/blog" >Press</a> </li> 
        <li>  <a className = "li__link" href = "https://developers.facebook.com/docs/instagram">API </a> </li> 
        <li><a className = "li__link" href = "https://about.instagram.com/about-us/careers"> Jobs </a> </li> 
        <li>  <a className = "li__link" href = "https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect"> Privacy </a> </li> 
        <li> <a className = "li__link" href = "https://help.instagram.com/581066165581870"> Terms </a> </li> 
        <li ><a className = "li__link" href = "https://www.instagram.com/explore/locations/">Location  </a> </li>
         <li> <a className = "li__link" href = "https://www.instagram.com/explore/locations/">Language</a> </li>
         </ul>

        <div className = "copyrights" > @ 2020 INSTAGRAM FROM META </div> 
        </div> 
        </div> 
        </div>
    );
}

export default Suggestions;