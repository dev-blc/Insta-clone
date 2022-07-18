import React, { useState, setState } from 'react'
import Grid from '@mui/material/Grid';
import InstaLogin from'../Images/InstaLogin.png';
import Instagramfontlogin from'../Images/Instagramfontlogin.png';
import'./Login.css';
import fb from'../Images/fb.png';
import Applestore from'../Images/Applestore.png';
import gplay from'../Images/gplay.png';
import Signin from './Signin';
import Signup from './Signup';


function Login( ) {

    const [isLogin, setisLogin] = useState(true);

   const changeLogin =()=>{
    
     if(isLogin)
        setisLogin(false);
     else
        setisLogin(true);   
}
    
  return (
    <div>
       
    
       <Grid container spacing={3}>
          <Grid item xs={3}>
        
          </Grid>

          <Grid item xs={6}>
            <div className="Loginpage__main">
                <div>
                   <img className="phone__img"  src= {InstaLogin} width="400px"></img>
                
                </div>

                <div className="Entry__component" >
                  <div className="Loginpage__entrycompo">
                <img className="Instagrm__font" src={Instagramfontlogin } width="300px"></img> 
                  
                  <div className='Sign__In'>
                      
                        {isLogin ?<Signin/>:<Signup/> }

                      
                      <div  className="login__ordiv">
                       <div className="login__divider"></div>
                       <div  className="login__or">OR</div>
                       <div  className="login__divider"></div>
                     </div>

                       <div className="face__book" ><img className='fb__img'  src={fb} />Log in with Fcebook</div>
                       <div className="forgot__pw">Forgot Password?</div>
                  </div>
                  </div>
                    
                  <div className= "loginpg__signupportion">

                  {isLogin ?<div className='loginpage__signin'>Don't have an account? <span onClick={ changeLogin} style= {{"fontwidth":"bold","color":"#1895F6" }} className="signup__btn"> Sign up </span>
                            </div>:<div className='loginpage__signup'>Have an account? <span  onClick={changeLogin} style= {{"fontwidth":"bold","color":"#1895F6" }} className="signin__btn" > Sign in </span> </div>
                 }

                  
                 </div>
                 
                 <div className="get__app">Get the app.</div>
                  
                 <div className='stores'>

                 <div><a href='https://apps.apple.com/app/instagram/id389801252?vt=lo'><img className="Apple__store" src={Applestore} /></a></div>
                 <div><a href='https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D7436949A-C4FF-4345-98A5-27C82BDD08CF%26utm_content%3Dlo%26utm_medium%3Dbadge'><img className='Google__store' src={gplay}/></a></div>
                 
                 </div>
                 

                </div>

                
           
            </div>


          </Grid>



          <Grid item xs={3}>
          
          </Grid>
          <div className="footer__login1">
            <ul className="fotter1__list">
              <li ><a  className='lilog__link' href='https://about.facebook.com/'>Meta</a></li>
              <li><a  className='lilog__link'  href='https://about.instagram.com/'>About</a></li>
             
              <li><a  className='lilog__link' href='https://about.instagram.com/en_US/blog'>Blog</a></li>
              <li><a  className='lilog__link' href='https://about.instagram.com/about-us/careers'>Jobs</a></li>
              <li><a  className='lilog__link' href='https://help.instagram.com/'>Help</a></li>
              <li><a  className='lilog__link' href='https://developers.facebook.com/docs/instagram'>Api</a></li>
              <li><a  className='lilog__link' href='https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect'>Privacy</a></li>
              <li><a  className='lilog__link' href='https://help.instagram.com/581066165581870'>Terms</a></li>
              <li><a  className='lilog__link' href='https://www.instagram.com/directory/profiles/'>Top Accounts</a></li>
              <li><a  className='lilog__link' href='https://www.instagram.com/directory/hashtags/'>Hashtags</a></li>
              <li><a  className='lilog__link' href='https://www.instagram.com/explore/locations/'>Locations</a></li>
              <li><a  className='lilog__link' href='https://www.instagram.com/web/lite/'>Instagram Lite</a></li>
              <li><a  className='lilog__link' href='https://www.facebook.com/help/instagram/261704639352628'>Contact Uploading & Non-Users</a></li>
            </ul>
            
            </div>

            <div className="footer__login2">
            <ul className="fotter2__list">
            <li ><a className="lilog__link" href='https://www.instagram.com/topics/dance-and-performance/'>Dance</a></li>
            <li ><a className="lilog__link" href='https://www.instagram.com/topics/food-and-drink/'>Food & Drink</a></li>
            <li ><a className="lilog__link" href='https://www.instagram.com/topics/home-and-garden/'>Home & Garden</a></li>
            <li ><a className="lilog__link" href='https://www.instagram.com/topics/music/'>Music</a></li>
            <li ><a className="lilog__link" href='https://www.instagram.com/topics/visual-arts/'>Visual Arts</a></li>
            
            </ul>
            
            </div>
            
            <div>

               <div className = "copyrights__login" > @ 2020 INSTAGRAM FROM META </div> 
            </div>

            
          
     
       </Grid>
    </div>
  )
}

export default Login;