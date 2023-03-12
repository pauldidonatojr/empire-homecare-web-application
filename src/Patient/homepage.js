
import React from 'react'
import styled from "styled-components";
import Button from "@mui/material/Button";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Card from "@mui/material/Card";

const homepage =()=>{
    return(
        <Wrapper>
               <div className='Header'>
                <img className='headerImage' src="./assets/logo.jpg"/>
                <button className='button'>Page 1</button>
                <button className='button'>Page 2</button>
                <button className='button'> Page 3</button>
                <button className='button'>Page 4</button>
                <button className='button'>Page 5</button>
                <hr />
                <Button className="LogOutbutton" variant="outlined"
                >
                Log Out
                </Button>
                
               </div>

               <></>



               <div className='footer'>
                    <img  className='footerLogo' src="./assets/FooterLogo.png"></img>
                    <div className='company'>
                        <h6 style={{color:"grey"}}>COMPANY</h6>
                        <h5 style={{color:"white"}}>About Us</h5>
                        <h5 style={{color:"white"}}>Contact Us</h5>
                        <h5 style={{color:"white"}}>Careegggrs</h5>
                        <h5 style={{color:"white"}}>Press</h5>
                    </div>
                    <div className='socials'>
                    <h6 style={{color:"grey"}}>SOCIAL MEDIA</h6>
                        <h5 style={{color:"white"}}><FacebookIcon fontSize='small'/>Facebook</h5>
                        <h5 style={{color:"white"}}><TwitterIcon fontSize='small'/>Twitter</h5>
                        <h5 style={{color:"white"}}><LinkedInIcon fontSize='small'/>Linkdin</h5>
                         
                    </div>
               </div>

        </Wrapper>
    )
}
export default homepage;

const Wrapper = styled.section`
  height: 100vh;
  width: 100%;


  //Footer CSS Files
    .footer{
        display:flex;
        flex-direction:row;
        bottom:0;
        width:100%;
        height:250px;
        background-color:#0A2740;
        margin-top:100%;
    }
    .footerLogo{
        width:20%;
        margin:07%;
    }
    .company{
        margin-left:35%;
        margin-top:2%;
    }
    .socials{
        margin-left:5%;
        margin-top:2%;
    }
  //Footer CSS Files end

  //Header CSS FILES
  .Header{
    display:flex;
    flex-direction:row;
    margin-left:5%;
    margin-top:0.5%;
    width:85%;
    background-color:white;
  }
  .headerImage{
    width:20%;
    height:100%;
  }
  .headerImage:hover{
    animation: wave 1s infinite;
  
  }
@keyframes wave {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
    100% {
      transform: translateY(0);
    }
  }
  .button{
    background-color:white;
    border-width:0;
    margin-left:2.0%;
    margin-top:0.5%;
    width:08%;
    height:50px; 
    cursor: pointer;
    transition: box-shadow 0.2s ease-in-out;
    border-radius:10px;
  }
  .button:hover{
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  }
  .LogOutbutton{
     background-color:#F26E22;
     color:white;
     width:10%;
     height:25%;
     margin-top:1%;
  }
  .LogOutbutton:hover{
    color:black;
  }
  //Header CSS FILES ENDING


  `