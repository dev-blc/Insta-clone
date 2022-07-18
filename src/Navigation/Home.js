import React from 'react'
import Post from'../Post';
import Nav from '../Navigation/Nav';
import Cards from '../Navigation/Stories';
import Sidebar from '../Navigation/Sidebar';
import PostCollab from '../PostCollab';
import'./Home.css';
import Grid from '@mui/material/Grid';


function Home() {
  return (
    <div className="nav__container">
    <Nav/>

    <Grid container spacing={2}>
    
    <Grid item xs={8}>
       <div className = 'Scontainer' >
          
            <Cards />
           
           <Post username = "arunvijayno1 " UN_url="https://www.instagram.com/arunvijayno1/" CmtUN_url="https://www.instagram.com/ashikq_/" verifyimg ="../Images/verified.png" caption = "Okey Challenges are welcome to the game I'm the Don!💣💥" imageUrl = "../Images/HD-wallpaper-arun-vijay-actor-ajith-arunvijay-kollywood-mafia-saaho-tamilnadu-thala.jpg" Profilepic = "../Images/AVdp.jpeg" commantusername = "ashikq_" Commant = "❤️️🔥🔥" likes = "9,880,743 likes"  viewcomments=" View all 6,987 comments"  />

            <Post username = "ikamalhaasan" UN_url="https://www.instagram.com/ikamalhaasan/" CmtUN_url="https://www.instagram.com/lokesh.kanagaraj/" verifyimg ="../Images/verified.png" caption = "ரசிகராகத் தொடங்கி இயக்குனராக வளர்ந்து இன்று சகோதரராக மாறியிருக்கும்  @lokesh.kanagraj இனிய பிறந்த நாள் நல்வாழ்த்துக்கள்." imageUrl = "../Images/KHpost1.png" Profilepic = "../Images/KHdp.jpeg" likes = "9,890,943 likes"  commantusername = "lokesh.kanagraj"  Commant = "🤗❤️️❤️️❤️️❤️️"  viewcomments=" View all 98,987 comments" />
    
            <Post username = "actorsuriya" UN_url="https://www.instagram.com/actorsuriya/" CmtUN_url="https://www.instagram.com/ikamalhaasan/" verifyimg ="../Images/verified.png" caption = "#ROLEX 🔪📻 BTS" imageUrl = "../Images/Suryspost.jpeg" Profilepic = "../Images/Suriyadp.jpeg" likes = "8,880,543 likes"  commantusername = "ikamalhaasan"  Commant = "Thambi Sir🤗!"  viewcomments=" View all 6,987 comments"/>
  
           <Post username = "ashikq_"  UN_url="https://www.instagram.com/ashikq_/" CmtUN_url="https://www.instagram.com/arunvijayno1/" caption = "Light shines in the darkness and the darkness can't Extinguish it" imageUrl = "../Images/AshikPostjpeg.jpeg" Profilepic = "../Images/Userprofilepic.jpeg" commantusername = "arunvijayno1" Commant = "Good one da!🤩"  likes = "8,880,543 likes"  viewcomments=" View all 6,987 comments"/>

           <Post username = "nivetha.guru" UN_url="https://www.instagram.com/nivetha.guru/" CmtUN_url="https://www.instagram.com/hegdepooja/" caption = "SLAY💃" imageUrl = "../Images/NivethaPost2.jpeg" Profilepic = "../Images/NivethaProfilepic.jpeg" likes = "8,880,543 likes"  commantusername = "hegdepooja"  Commant = "Wow😍"  viewcomments=" View all 6,987 comments" />
         
           <Post username = "samantharuthprabhuoffl" UN_url="https://www.instagram.com/samantharuthprabhuoffl/" verifyimg ="../Images/verified.png" caption = "Let's Pose 🌈" imageUrl = "../Images/Samupost.jpeg" Profilepic = "../Images/Samudp.jpeg" likes = "8,880,543 likes"  commantusername = ""  Commant = ""  viewcomments=" View all 6,987 comments" />

            <Post username = "silambarasantrofficial" UN_url="https://www.instagram.com/silambarasantrofficial/" verifyimg ="../Images/verified.png" caption = "Atman" imageUrl = "../Images/STRpost.jpeg" Profilepic = "../Images/STRpost.jpeg" likes = "7,80,543 likes"  commantusername = ""  Commant = ""  viewcomments=" View all 9,987 comments" />
 
           <Post username = "__bala.s__" UN_url="https://www.instagram.com/__bala.s__/" CmtUN_url="https://www.instagram.com/ashikq_/" caption = "Demon in my soul 😈" imageUrl = "../Images/Balapost.jpeg" Profilepic = "../Images/Baladp.jpeg" likes = "8,880,543 likes"  commantusername = "ashikq_"  Commant = "Irukatum irukatum..👀"  viewcomments=" View all 6,987 comments" />

           <PostCollab username="ashikq_" username2="arunvijayno1" caption = "Lifetime Settlement Moment!💣💥" imageUrl = "../Images/collabpost1.jpeg" Profilepic = "../Images/Userprofilepic.jpeg" Profilepic2 ="../Images/AVdp.jpeg" commantusername = "arunvijayno1" Commant = "❤️️❤️️❤️️❤️️" likes = "9,880,743 likes"  viewcomments=" View all 16,987 comments"  />


           <Post username = "atharvaamurali" UN_url="https://www.instagram.com/atharvaamurali/" verifyimg ="../Images/verified.png" caption = "Verified DayDreamer! ✔️" imageUrl = "../Images/Addypost.jpeg" Profilepic = "../Images/Addydp.jpeg" likes = "8,880,543 likes"  commantusername = ""  Commant = ""  viewcomments=" View all 6,987 comments" />
 
           <Post username = "emmanual_._gregory" UN_url="https://www.instagram.com/emmanuel_._gregory/" CmtUN_url="https://www.instagram.com/ashikq_/" caption = "😎" imageUrl = "../Images/Emmapost.jpeg" Profilepic = "../Images/Emmadp.jpeg" likes = "8,880,543 likes"  commantusername = "ashikq_"  Commant = "Puli🐯🔥"  viewcomments=" View all 6,987 comments" />

           
           
            
          
          
          </div>
      
    </Grid>
    <Grid item xs={4}>
    <Sidebar />
      
    </Grid>
   
  </Grid>
       
        {/* <Nav/>
        <div className = 'Scontainer' >
          
            <Cards />
           
           <Post username = "arunvijayno1 " UN_url="https://www.instagram.com/arunvijayno1/" CmtUN_url="https://www.instagram.com/ashikq_/" verifyimg ="../Images/verified.png" caption = "Okey Challenges are welcome to the game I'm the Don!💣💥" imageUrl = "../Images/HD-wallpaper-arun-vijay-actor-ajith-arunvijay-kollywood-mafia-saaho-tamilnadu-thala.jpg" Profilepic = "../Images/AVdp.jpeg" commantusername = "ashikq_" Commant = "❤️️🔥🔥" likes = "9,880,743 likes"  viewcomments=" View all 6,987 comments"  />

            <Post username = "ikamalhaasan" UN_url="https://www.instagram.com/ikamalhaasan/" CmtUN_url="https://www.instagram.com/lokesh.kanagaraj/" verifyimg ="../Images/verified.png" caption = "ரசிகராகத் தொடங்கி இயக்குனராக வளர்ந்து இன்று சகோதரராக மாறியிருக்கும்  @lokesh.kanagraj இனிய பிறந்த நாள் நல்வாழ்த்துக்கள்." imageUrl = "../Images/KHpost1.png" Profilepic = "../Images/KHdp.jpeg" likes = "9,890,943 likes"  commantusername = "lokesh.kanagraj"  Commant = "🤗❤️️❤️️❤️️❤️️"  viewcomments=" View all 98,987 comments" />
    
            <Post username = "actorsuriya" UN_url="https://www.instagram.com/actorsuriya/" CmtUN_url="https://www.instagram.com/ikamalhaasan/" verifyimg ="../Images/verified.png" caption = "#ROLEX 🔪📻 BTS" imageUrl = "../Images/Suryspost.jpeg" Profilepic = "../Images/Suriyadp.jpeg" likes = "8,880,543 likes"  commantusername = "ikamalhaasan"  Commant = "Thambi Sir🤗!"  viewcomments=" View all 6,987 comments"/>
  
           <Post username = "ashikq_"  UN_url="https://www.instagram.com/ashikq_/" CmtUN_url="https://www.instagram.com/arunvijayno1/" caption = "Light shines in the darkness and the darkness can't Extinguish it" imageUrl = "../Images/AshikPostjpeg.jpeg" Profilepic = "../Images/Userprofilepic.jpeg" commantusername = "arunvijayno1" Commant = "Good one da!🤩"  likes = "8,880,543 likes"  viewcomments=" View all 6,987 comments"/>

           <Post username = "nivetha.guru" UN_url="https://www.instagram.com/nivetha.guru/" CmtUN_url="https://www.instagram.com/hegdepooja/" caption = "SLAY💃" imageUrl = "../Images/NivethaPost2.jpeg" Profilepic = "../Images/NivethaProfilepic.jpeg" likes = "8,880,543 likes"  commantusername = "hegdepooja"  Commant = "Wow😍"  viewcomments=" View all 6,987 comments" />
         
           <Post username = "samantharuthprabhuoffl" UN_url="https://www.instagram.com/samantharuthprabhuoffl/" verifyimg ="../Images/verified.png" caption = "Let's Pose 🌈" imageUrl = "../Images/Samupost.jpeg" Profilepic = "../Images/Samudp.jpeg" likes = "8,880,543 likes"  commantusername = ""  Commant = ""  viewcomments=" View all 6,987 comments" />

            <Post username = "silambarasantrofficial" UN_url="https://www.instagram.com/silambarasantrofficial/" verifyimg ="../Images/verified.png" caption = "Atman" imageUrl = "../Images/STRpost.jpeg" Profilepic = "../Images/STRpost.jpeg" likes = "7,80,543 likes"  commantusername = ""  Commant = ""  viewcomments=" View all 9,987 comments" />
 
           <Post username = "__bala.s__" UN_url="https://www.instagram.com/__bala.s__/" CmtUN_url="https://www.instagram.com/ashikq_/" caption = "Demon in my soul 😈" imageUrl = "../Images/Balapost.jpeg" Profilepic = "../Images/Baladp.jpeg" likes = "8,880,543 likes"  commantusername = "ashikq_"  Commant = "Irukatum irukatum..👀"  viewcomments=" View all 6,987 comments" />

           <PostCollab username="ashikq_" username2="arunvijayno1" caption = "Lifetime Settlement Moment!💣💥" imageUrl = "../Images/collabpost1.jpeg" Profilepic = "../Images/Userprofilepic.jpeg" Profilepic2 ="../Images/AVdp.jpeg" commantusername = "arunvijayno1" Commant = "❤️️❤️️❤️️❤️️" likes = "9,880,743 likes"  viewcomments=" View all 16,987 comments"  />


           <Post username = "atharvaamurali" UN_url="https://www.instagram.com/atharvaamurali/" verifyimg ="../Images/verified.png" caption = "Verified DayDreamer! ✔️" imageUrl = "../Images/Addypost.jpeg" Profilepic = "../Images/Addydp.jpeg" likes = "8,880,543 likes"  commantusername = ""  Commant = ""  viewcomments=" View all 6,987 comments" />
 
           <Post username = "emmanual_._gregory" UN_url="https://www.instagram.com/emmanuel_._gregory/" CmtUN_url="https://www.instagram.com/ashikq_/" caption = "😎" imageUrl = "../Images/Emmapost.jpeg" Profilepic = "../Images/Emmadp.jpeg" likes = "8,880,543 likes"  commantusername = "ashikq_"  Commant = "Puli🐯🔥"  viewcomments=" View all 6,987 comments" />

           
           
            
          
          <Sidebar />


  </div>*/}
    </div>
  )
}

export default Home;