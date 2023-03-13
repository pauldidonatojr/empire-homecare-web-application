import React, { useState } from "react";
import { useParams } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { display } from "@mui/system";
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const Link = require("react-router-dom").Link;
//HELLO I HAVE BEEN PUSHED
const jsonData = [
  {
    id: 1,
    name: "Wanda De Martinez",
    address: "Upper tooting Road, SW14SW",
    expectedClockOn: "07:11 AM",
    expectedClockOut: "11:30 AM",
    date:"03/12/2023",
  },
  {
    id: 2,
    name: "Wanda De Martinez",
    address: "Upper tooting Road, SW14SW",
    expectedClockOn: "07:11 AM",
    expectedClockOut: "11:30 AM",
    date:"03/12/2023",
  },
  {
    id: 3,
    name: "Hector",
    address: "Upper tooting Road, SW14SW",
    expectedClockOn: "07:11 AM",
    expectedClockOut: "11:30 AM",
    date:"03/12/2023",
  },
  {
    id: 4,
    name: "Adam",
    address: "Upper tooting Road, SW14SW",
    expectedClockOn: "07:11 AM",
    expectedClockOut: "11:30 AM",
    date:"03/12/2023",
  },
];

const PatientDetails =()=>{

  const [ViewSelected, setViewSelected] = useState(0);

  const PatientInfoPressed = () => {
    setViewSelected(1);
  };

  const VisitsPressed = () => {
    setViewSelected(2);
  };
  function RenderViews() {
    switch (ViewSelected) {
      case 1:
        return PatientInfoView();

      case 2:
        return VisitView();

      default:
        break;
    }
  }


  const PatientInfoView=()=>{
    return (
      <div className="PatientViewHolder" >

        <Card className="contactCard">
          <p style={{textAlign:"center",fontSize:"15px",color:"grey",fontWeight:"bold"}}>Contact Information</p>

          <div className="phoneNumber">
          <PhoneIcon style={{color:"whitesmoke",fontSize:"30px",marginTop:"15%",marginRight:"5%"}} />
          <p style={{fontWeight:"bold",color:"whitesmoke",fontSize:"25px"}}>07024587956</p>
          </div>
          <div className="phoneNumber">
          <PhoneIcon style={{color:"whitesmoke",fontSize:"30px",marginTop:"15%",marginRight:"5%"}} />
          <p style={{fontWeight:"bold",color:"whitesmoke",fontSize:"25px"}}>07024587956</p>
          </div>
          <div className="phoneNumber">
          <PhoneIcon style={{fontSize:"30px",color:"whitesmoke",marginTop:"15%",marginRight:"5%"}} />
          <p style={{fontWeight:"bold",color:"whitesmoke",fontSize:"25px"}}>07024587956</p>
          </div>
          <div className="phoneNumber">
          <LocationOnIcon style={{color:"whitesmoke",fontSize:"30px",marginTop:"6%"}} />
          <p style={{fontWeight:"bold",color:"whitesmoke",fontSize:"25px"}}>262 A Upper Tooting Road, SW10DS</p>
          </div>
        </Card>

        <Card className="EmergencyCard">
          <p style={{textAlign:"center",fontSize:"15px",color:"grey",fontWeight:"bold"}}>Emergency Contact</p>

          <div className="phoneNumber">
          <PhoneIcon style={{color:"whitesmoke",fontSize:"30px",marginTop:"15%",marginRight:"5%"}} />
          <p style={{fontWeight:"bold",color:"whitesmoke",fontSize:"25px"}}>07024587956</p>
          </div>
          <div className="phoneNumber">
          <PhoneIcon style={{color:"whitesmoke",fontSize:"30px",marginTop:"15%",marginRight:"5%"}} />
          <p style={{fontWeight:"bold",color:"whitesmoke",fontSize:"25px"}}>07024587956</p>
          </div>
         
        </Card>
      </div>
    )
  }
  const VisitView =()=> {
    return (
      <List style={{ maxHeight: "100%", overflow: "auto" }}>
      {jsonData.map((item) => (
        <ListItem
          className="ListItem"
          key={item.id}
          button
          component={Link}
          to={`/visitdetails/${item.id}`}
        >
          <ListItemText
            primary={<p style={{ fontSize: "25px" }}>{item.name}</p>}
            className="ListText"
          />
          <ListItemText
            primary={<p style={{ fontSize: "20px" }}>{item.address}</p>}
            className="ListText"
          />
          <ListItemText
            primary={
              <p style={{ fontSize: "20px" }}>{item.expectedClockOn}</p>
            }
            className="ListText"
          />
          <ListItemText
            primary={
              <p style={{ fontSize: "20px" }}>{item.expectedClockOut}</p>
            }
            className="ListText"
          />
        </ListItem>
      ))}
    </List>
    )
  }
  const ColumnDiv = () => {
    return (
      <div className="columnName">
        <p className="colume1">Name</p>
        <p className="colume2">Address</p>
        <p className="colume3">Clock In</p>
        <p className="colume4">Clock Out</p>
      </div>
    );
  };
  function renderColumeName() {
    switch (ViewSelected) {
      case 2:
        return <ColumnDiv />;
      default:
        break;
    }
  }



    return (
        <Wrapper>
             <div className="Header">
        <img className="headerImage" src="./assets/logo.jpg" />
        <button className="button">Page 1</button>
        <button className="button">Page 2</button>
        <button className="button"> Page 3</button>
        <button className="button"> Page 4</button>
        <Button className="LogOutbutton" variant="outlined">
          Log Out
        </Button>
      </div>

      <div className="CardHolder">
        <Card className="TaskBar">
          <div className="UserInfo">
            <Avatar
              className="avatar"
              alt={"Hector"}
              src="/static/images/avatar/1.jpg"
            />
            <p
              style={{
                fontSize: "22px",
                marginTop: "8%",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Hector Martinez
            </p>
          </div>
          <hr />
          <p
            style={{
              marginLeft: "45%",
              fontSize: "13px",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Files
          </p>
          <div className="buttonHolder">
            <Button
              className="navigationButton"
              onClick={() => {
                PatientInfoPressed();
              }}
            >
              <p
                style={{
                  fontSize: "15px",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Patient Info
              </p>
            </Button>
            <Button onClick={VisitsPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Visits
              </p>
            </Button>
          </div>

          <div className="NeedHelpDiv">
            <p className="needHelpText">Need Help ?</p>
            <a className="NeedHelpTele" href="tel:+1234567890">
              Call us now
            </a>
          </div>
        </Card>

        <Card className="dataDisplay">
        {renderColumeName()}
          {RenderViews()}</Card>
      </div>

      <div className="footer">
        <div className="LogoHolder">
          <img src="./empire-130x130(2).png"></img>
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
          <h5 style={{ color: "white" }}>
            <FacebookIcon fontSize="small" />
            Facebook
          </h5>
          <h5 style={{ color: "white" }}>
            <TwitterIcon fontSize="small" />
            Twitter
          </h5>
          <h5 style={{ color: "white" }}>
            <LinkedInIcon fontSize="small" />
            Linkdin
          </h5>
        </div>
      </div>
        </Wrapper>
    )
}
export default PatientDetails;
const Wrapper = styled.section`
height: 100vh;%
width: 100%;

//
.ListItem{
  margin-top:1%;
  margin-left:2%;
  background-color:#0B2B40;
  color:white;
  border-radius:10px;
  width: 95%;
}
.ListText{
  width:300px;
  text-align:center;

}
//
//patient view start
.PatientViewHolder{
  display:flex;
  flex-direction:row;
}
.contactCard{
  background-color:#012E40;
  border-radius:15px;
  padding:2%;
  width:50%;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
}
.phoneNumber{
  display:flex;
  flex-direction:row;
}
.EmergencyCard{
  
  margin-left:2%;
  background-color:#012E40;
  border-radius:15px;
  padding:2%;
  width:50%;
  display:flex;
  align-items:center;
  flex-direction:column;

}

// patient view end

.CardHolder{
  display:flex;
  flex-direction:row;
}
//Header CSS FILES
.Header{
display:flex;
flex-direction:row;
margin-left:5.9%;
margin-top:0.5%;
width:93%;
background-color:white;
}
.headerImage{
width:15%;
height:5%;
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
margin-left:5.0%;
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
height:150%;
margin-top:1%;
margin-left:15%;
padding:0.5%;
border-radius:10px;
}
.LogOutbutton:hover{
color:black;
}

//Header CSS FILES ENDING

//UserInfo(TaskBar)
.TaskBar{

    width:20%;
    height:655px;
    background-color:#2A558C;
    margin-top:3%;
    margin-bottom:10%;
    margin-left:2%;
}

.UserInfo{
    display:flex;
    flex-direction:row;
    margin-top:5%;
    margin-left:10%;
}
.avatar{
    margin:2%;
    margin-top:5%;
}
.buttonHolder{
    display:flex;
    flex-direction:column;

}
.navigationButton{
    margin:2%;
}

//UserInfo Ending


//need help div start

.NeedHelpDiv{
    margin-left:35%;
    margin-top:30%;
}
.needHelpText{
    color:white;
}
.NeedHelpTele{
    color:white;
    text-decoration: none
}

//need help end


//data display card
.dataDisplay{
    height:600px;
    width:70%;
    margin-left:2%;
    margin-top:3%;
    background-color:#F2F2F2;
    padding:1.7%;
}
.columnName{
  display:flex;
  flex-direction:row;
  height:5.8%;
  border-radius:15px;
  
}
.colume1{
  margin-left:12%;
  font-size:15px;
  color:grey;
  font-weight:bold;
  margin-top:0.5%;
}
.colume2{
  margin-left:19%;
  font-size:15px;
  color:grey;
  font-weight:bold;
  margin-top:0.5%;
}
.colume3{
  margin-left:17.5%;
  font-size:15px;
  color:grey;
  font-weight:bold;
  margin-top:0.5%;
}
.colume4{
  margin-left:17%;
  font-size:15px;
  color:grey;
  font-weight:bold;
  margin-top:0.5%;
}
//data display card end
//Footer CSS Files
.footer{
    display:flex;
    flex-direction:row;
    bottom:0;
    width:100%;
    height:250px;
    background-color:#0A2740;
    margin-top:17%;
   }
   .company{
    margin-left:50%;
    margin-top:2%;
   }
   .socials{
    margin-left:5%;
    margin-top:2%;
   }
   .LogoHolder{
       margin-top:3%;
       margin-left:15%;
   }
   //Footer CSS Files end
`