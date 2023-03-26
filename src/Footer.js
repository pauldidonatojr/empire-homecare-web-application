import React , { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import styled from "styled-components";

function Footer(){
  return (
    <Wrapper>
    <div className="footer">
        <div className="LogoHolder">
          <img src="/LogoBK.png"></img>
        </div>
        <div className="company">
          <h6 style={{ color: "grey" }}>COMPANY</h6>
          <h5 style={{ color: "white" }}>About Us</h5>
          <h5 style={{ color: "white" }}>Contact Us</h5>
          <h5 style={{ color: "white" }}>Careers</h5>
          <h5 style={{ color: "white" }}>Press</h5>
        </div>
        <div className="socials">
          <h6 style={{ color: "grey" }}>SOCIAL MEDIA</h6>
         
          
          <h5 style={{color: "white",textAlign:"center"}}>
          <FacebookIcon style={{fontSize:"30px"}} />
           
          </h5>
       
          <h5 style={{ color: "white",textAlign:"center" }}>
            <TwitterIcon style={{fontSize:"30px"}} />
           
          </h5>
          <h5 style={{ color: "white",textAlign:"center" }}>
            <LinkedInIcon style={{fontSize:"30px"}} />
           
          </h5>
        </div>
      </div>
      </Wrapper>
  )
};


export default Footer;
const Wrapper = styled.section`

 //Footer CSS Files
 .footer {
  display: flex;
  flex-direction: row;
  bottom: 0;
  width: 100%;
  height: 260px;
  background-color: #2E0F59;
  margin-top: 0%;
}
.company {
  margin-left: 50%;
  margin-top: 2%;
}
.socials {
  margin-left: 5%;
  margin-top: 2%;
}
.LogoHolder {
  margin-top: 3%;
  margin-left: 15%;
}
//Footer CSS Files end
`