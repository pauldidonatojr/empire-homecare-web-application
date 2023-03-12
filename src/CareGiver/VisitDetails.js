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
//
const jsonData = [
  {
    id: 1,
    name: "Wanda De Martinez",
    address: "Upper tooting Road, SW14SW",
    expectedClockOn: "07:11 AM",
    expectedClockOut: "11:30 AM",
    date: "03/12/2023",
  },
  {
    id: 2,
    name: "Wanda De Martinez",
    address: "Upper tooting Road, SW14SW",
    expectedClockOn: "07:11 AM",
    expectedClockOut: "11:30 AM",
    date: "03/12/2023",
  },
  {
    id: 3,
    name: "Hector",
    address: "Upper tooting Road, SW14SW",
    expectedClockOn: "07:11 AM",
    expectedClockOut: "11:30 AM",
    date: "03/12/2023",
  },
  {
    id: 4,
    name: "Adam",
    address: "Upper tooting Road, SW14SW",
    expectedClockOn: "07:11 AM",
    expectedClockOut: "11:30 AM",
    date: "03/12/2023",
  },
];

const PlanOfCareList = [
    {
      id: 1,
      name: "Clothes Washing",
    },
    {
      id: 2,
      name: "Bath",
    },
    {
      id: 3,
      name: "House Clean",
    },
  ];
  const OtherTaskList = [
    {
      id: 1,
      name: "Bath",
    },
    {
      id: 2,
      name: "Hair Care",
    },
    {
      id: 3,
      name: "Park Visit",
    },
  ];

const VisitDetails = () => {
  const { id } = useParams();
  const selectedItem = jsonData.find((item) => item.id === parseInt(id));
  const [ViewSelected, setViewSelected] = useState(0);

  if (!selectedItem) {
    return <div>Item not found</div>;
  }

  function RenderViews() {
    switch (ViewSelected) {
      case 1:
        return ClockInOutView();

      case 2:
        return DirectionView();

      case 3:
        return PatientView();

      default:
        break;
    }
  }

  const PatientInfoPressed = () => {
    setViewSelected(3);
  };
  const DirectionPressed = () => {
    setViewSelected(2);
  };
  const ClockInOutPressed = () => {
    setViewSelected(1);
  };

  const ClockInOutView = () => {
    return (
        <div>
      <div className="ClockCardHolder">
        <Card className="clockInCard">
          <div className="DateHolder">
            <CalendarMonthIcon className="dateIcon" />
            <p style={{ color: "white", fontWeight: "bold" }}>
              {selectedItem.date}
            </p>
          </div>
          <Button className="clockBtn">Clock In</Button>
          <div className="DateHolder">
            <QueryBuilderIcon className="ClockIcon" />
            <p style={{ color: "white", fontWeight: "bold" }}>
              {selectedItem.expectedClockOn}
            </p>
          </div>
        </Card>

        <Card className="clockOutCard">
          <div className="DateHolder">
            <CalendarMonthIcon className="dateIcon" />
            <p style={{ color: "white", fontWeight: "bold" }}>
              {selectedItem.date}
            </p>
          </div>
          <Button className="clockBtn">Clock Out</Button>
          <div className="DateHolder">
            <QueryBuilderIcon className="ClockIcon" />
            <p style={{ color: "white", fontWeight: "bold" }}>
              {selectedItem.expectedClockOut}
            </p>
          </div>
        </Card>
      </div>
      <div className="ListHolder">

        <div className="PlanofCareList">
        <List style={{ maxHeight: "100%", overflow: "auto" }}>
        {jsonData.map((item) => (
          <ListItem
            className="ListItem"
          >
            <ListItemText
              primary={<p style={{ fontSize: "25px" }}>{item.name}</p>}
              className="ListText"
            />
            
          </ListItem>
        ))}
      </List>
        </div>

      </div>
      </div>
    );
  };
  const DirectionView = () => {
    return (
      <div>
        <h1>Visit Details</h1>
        <p>Name: {selectedItem.name}</p>
        <p>Addresdss: {selectedItem.address}</p>
        <p>Expected Clock On: {selectedItem.expectedClockOn}</p>
        <p>Expected Clock Out: {selectedItem.expectedClockOut}</p>
      </div>
    );
  };
  const PatientView = () => {
    return (
      <div>
        <h1>Visit Details</h1>
        <p>Namedd: {selectedItem.name}</p>
        <p>Address: {selectedItem.address}</p>
        <p>Expected Clock On: {selectedItem.expectedClockOn}</p>
        <p>Expected Clock Out: {selectedItem.expectedClockOut}</p>
      </div>
    );
  };

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
                ClockInOutPressed();
              }}
            >
              <p
                style={{
                  fontSize: "15px",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Clock In / Out
              </p>
            </Button>
            <Button onClick={DirectionPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Direction
              </p>
            </Button>
            <Button onClick={PatientInfoPressed}>
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Patient Info
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

        <Card className="dataDisplay">{RenderViews()}</Card>
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
  );
};

export default VisitDetails;
const Wrapper = styled.section`
height: 100vh;%
width: 100%;

.CardHolder{
    display:flex;
    flex-direction:row;
}
//Clock in/Out View
.ClockCardHolder{
    display:flex;
    flex-direction:row;

}
.clockInCard{
    background-color:#002333;
    width:50%;
    display:flex;
    align-items:center;
    place-items:center;
    justify-content:center;
    flex-direction:column;
    height:180px;
    border-radius:15px;
}
.clockOutCard{
    
    background-color:#002333;
    width:50%;
    display:flex;
    flex-direction:column;
    align-items:center;
    place-items:center;
    justify-content:center;
    margin-left:1%;
    height:180px;
    border-radius:15px;
}
.DateHolder{
    display:flex;
    flex-direction:row;
    
}
.dateIcon{
    margin-top:12%;
    margin-right:5%;
    color:white;
}
.ClockIcon{
    margin-top:14%;
    color:white;
}
.clockBtn{
    color:white;
    font-size:20px;
    background-color:black;
    border-radius:15px;
    width:150px;
}

//Clock in/Out View


//data display card
.dataDisplay{
    height:600px;
    width:70%;
    margin-left:2%;
    margin-top:3%;
    background-color:#F2F2F2;
    padding:1.7%;
}
//data display card end

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
   `;
