import React, { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import { List, ListItem, ListItemText } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
//
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
//
const Link = require("react-router-dom").Link;

function PendingQueuePlacement() {
  const [ViewSelected, setViewSelected] = useState(1);

  
//

const [age, setAge] = React.useState('');
const handleChange = (event) => {
  setAge(event.target.value);
};

//
  const [isOverlayOpen3, setIsOverlayOpen3] = useState(false);
  const [isOverlayOpen4, setIsOverlayOpen4] = useState(false);
  const [isOverlayOpen5, setIsOverlayOpen5] = useState(false);
  const [isOverlayOpen6, setIsOverlayOpen6] = useState(false);

  const handleClickIcon = () => {
    
    switch (ViewSelected) {
      
      case 3:
        setIsOverlayOpen3(true);
        break;
      case 4:
        setIsOverlayOpen4(true);
        break;
      case 5:
        setIsOverlayOpen5(true);
        break;
      case 6:
        setIsOverlayOpen6(true);
        break;
      default:
        break;
    }

  };
  //

const MissedOutPressed = () => {
  setViewSelected(3);
};
const MissedCallPressed = () => {
  setViewSelected(4);
};
const VisitLogPressed = () => {
  setViewSelected(5);
};
const RejectedCallsPressed = () => {
  setViewSelected(6);
};

  const handleCloseOverlay3 = () => {
    setIsOverlayOpen3(false);
  };
  const handleCloseOverlay4 = () => {
    setIsOverlayOpen4(false);
  };
  const handleCloseOverlay5 = () => {
    setIsOverlayOpen5(false);
  };
  const handleCloseOverlay6 = () => {
    setIsOverlayOpen6(false);
  };


  const ColumnDiv3 = () => {
    return (
      <div className="columnName">
         <p className="colume1">Name</p>
         <hr/>
        <p className="colume1">Admission ID</p>
        <hr/>
        <p className="colume1">Member Name</p>
        <hr/>
        <p className="colume1">MCO</p>
        <hr/>
        <p className="colume1">Cordinator</p>
        <hr/>
        <p className="colume1">Team Member</p>
        <hr/>
        <p className="colume1">Assigment ID</p>
      </div>
    );
  };
  const ColumnDiv4 = () => {
    return (
      <div className="columnName">
         <p className="colume1">Name</p>
         <hr/>
        <p className="colume1">Admission ID</p>
        <hr/>
        <p className="colume1">Member Name</p>
        <hr/>
        <p className="colume1">MCO</p>
        <hr/>
        <p className="colume1">Cordinator</p>
        <hr/>
        <p className="colume1">Team Member</p>
        <hr/>
        <p className="colume1">Assigment ID</p>
      </div>
    );
  };
  const ColumnDiv5 = () => {
    return (
      <div className="columnName">
        <p className="colume1">First Name</p>
        <hr/>
        <p className="colume1">Last Name</p>
        <hr/>
        <p className="colume1">Care Giver Code</p>
        <hr/>
        <p className="colume1">Care Giver Name</p>
        <hr/>
        <p className="colume1">Team Member</p>
        <hr/>
        <p className="colume1">Assigment ID</p>
        <hr/>
        <p className="colume1">Admission ID</p>
        <hr/>
        <p className="colume1">Cordinator</p>
        <hr/>
        <p className="colume1">From Date</p>
        <hr/>
        <p className="colume1">Till Date</p>
      </div>
    );
  };
  const ColumnDiv6 = () => {
    return (
      <div className="columnName">
        <p className="colume1">Care Giver Code</p>
        <hr/>
        <p className="colume1">Care Giver Name</p>
        <hr/>
        <p className="colume1">Assigment ID</p>
        <hr/>
        <p className="colume1">Admission ID</p>
        <hr/>
        <p className="colume1">Team Member</p>
        <hr/>
        <p className="colume1">From Date</p>
        <hr/>
        <p className="colume1">Till Date</p>
      </div>
    );
  };

  function renderColumeName() {
    switch (ViewSelected) {
      
      case 3:
        return <ColumnDiv3 />;
        case 4:
          return <ColumnDiv4 />;
          case 5:
        return <ColumnDiv5 />;
        case 6:
        return <ColumnDiv6 />;
      default:
        break;
    }
  }
  
  


function Overlay3() {
  return (
    <div className="overlay">
    <CloseIcon className="crossIcon" onClick={handleCloseOverlay3} />
    <h1 style={{ marginLeft: "40%" }}>Set Filter from here !</h1>
    <p style={{fontSize:15,fontWeight:"bold",color:"#042940",textAlign:"center"}}>Missed Out</p>
    <div className="searchFieldsDiv">
    <Grid container spacing={3}>

    <Grid item xs="2.87">
    
    <Box >
  <FormControl fullWidth>
    <InputLabel >MCO</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={age}
      label="Status"
      onChange={handleChange}
    >
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </Select>
  </FormControl>
</Box>  
    </Grid>
</Grid>
    </div>
    <Button className="searchButton" variant="outlined" onClick={handleCloseOverlay3}>
      Search
    </Button>
  </div>
  );
}
function Overlay4() {
  return (
    <div className="overlay">
    <CloseIcon className="crossIcon" onClick={handleCloseOverlay4} />
    <h1 style={{ textAlign:"center" }}>Set Filter from here !</h1>
    <p style={{fontSize:15,fontWeight:"bold",color:"#042940",textAlign:"center"}}>Missed Call</p>
    <div className="searchFieldsDiv">
    <Grid container spacing={3}>
      
    <Grid item xs="2.87">
    
    <Box >
  <FormControl fullWidth>
    <InputLabel >MCdO</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={age}
      label="Status"
      onChange={handleChange}
    >
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </Select>
  </FormControl>
</Box>  
    </Grid> 
</Grid>
    </div>
    <Button className="searchButton" variant="outlined" onClick={handleCloseOverlay4}>
      Search
    </Button>
  </div>
  );
}
//Visit Log
function Overlay5() {
  return (
    <div className="overlay">
    <CloseIcon className="crossIcon" onClick={handleCloseOverlay5} />
    <h1 style={{ marginLeft: "40%" }}>Set Filter from here !</h1>
    <p style={{fontSize:15,fontWeight:"bold",color:"#042940",textAlign:"center"}}>Visit Log</p>
    <div className="searchFieldsDiv">
    <Grid container spacing={3}>
      
    <Grid item xs="2.87">
    
    <Box >
  <FormControl fullWidth>
    <InputLabel >MCO</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={age}
      label="Status"
      onChange={handleChange}
    >
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </Select>
  </FormControl>
</Box>  
    </Grid>
     
</Grid>
    </div>
    <Button className="searchButton" variant="outlined" onClick={handleCloseOverlay5}>
      Search
    </Button>
  </div>
  );
}

function Overlay6() {
  return (
    <div className="overlay">
    <CloseIcon className="crossIcon" onClick={handleCloseOverlay6} />
    <h1 style={{ marginLeft: "40%" }}>Set Filter from here !</h1>
    <p style={{fontSize:15,fontWeight:"bold",color:"#042940",textAlign:"center"}}>Total Accepted</p>
    <div className="searchFieldsDiv">
    <Grid container spacing={3}>
      
    <Grid item xs="2.87">
    
    <Box >
  <FormControl fullWidth>
    <InputLabel >MCO</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={age}
      label="Status"
      onChange={handleChange}
    >
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </Select>
  </FormControl>
</Box>  
    </Grid>
     
</Grid>
    </div>
    <Button className="searchButton" variant="outlined" onClick={handleCloseOverlay6}>
      Search
    </Button>
  </div>
  );
}


  function RenderViews() {
    switch (ViewSelected) {
      
      case 3:
        return MissedOutView();
      case 4:
        return MissedCallView();
      case 5:
        return VisitLogView();
      case 6:
        return RejectedCallsView();

      default:
        break;
    }
  }
  
  const jsonData = [
    {
      id: 1,
      name: "Wanda ",
      address: "SW14SW",
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


  const RejectedCallsView = () => {
    return (
      <List style={{maxHeight: "100%", overflow: "auto" }}>
        {jsonData.map((item) => (
          <ListItem
            className="ListItem"
            key={item.id}
           
          >
         <p className="item1">Care Giver Code</p>
         <hr style={{height:"10px"}}/>
        <p className="item1">Care Giver Name</p>
        <hr style={{height:"10px"}}/>
        <p className="item1">Assigment ID</p>
        <hr style={{height:"10px"}}/>
        <p className="item1">Admission ID</p>
        <hr style={{height:"10px"}}/>
        <p className="item1">Team Member</p>
        <hr style={{height:"10px"}}/>
        <p className="item1">From Date</p>
        <hr style={{height:"10px"}}/>
        <p className="item1">Till Date</p>
          </ListItem>
        ))}
      </List>
    );
  };

  
  const VisitLogView = () => {
    return (
      <List style={{ maxHeight: "100%", overflow: "auto" }}>
        {jsonData.map((item) => (
          <ListItem
            className="ListItem"
            key={item.id}
            
          >
            <p className="item1">First Name</p>
            <hr style={{height:"10px"}}/>
        <p className="item1">Last Name</p>
        <hr style={{height:"10px"}}/>
        <p className="item1">Care Giver Code</p>
        <hr style={{height:"10px"}}/>
        <p className="item1">Care Giver Name</p>
        <hr style={{height:"10px"}}/>
        <p className="item1">Team Member</p>
        <hr style={{height:"10px"}}/>
        <p className="item1">Assigment ID</p>
        <hr style={{height:"10px"}}/>
        <p className="item1">Admission ID</p>
        <hr style={{height:"10px"}}/>
        <p className="item1">Cordinator</p>
        <hr style={{height:"10px"}}/>
        <p className="item1">From Date</p>
        <hr style={{height:"10px"}}/>
        <p className="item1">Till Date</p>
          </ListItem>
        ))}
      </List>
    );
  };
  
  const MissedCallView = () => {
    return (
      <List style={{ maxHeight: "100%", overflow: "auto" }}>
        {jsonData.map((item) => (
          <ListItem
            className="ListItem"
            key={item.id}
            
          >
            <p className="item1">Name</p>
            <hr style={{height:"10px"}}/>
        <p className="item1">Admission ID</p>
        <hr style={{height:"10px"}}/>
        <p className="item1">Member Name</p>
        <hr style={{height:"10px"}}/>
        <p className="item1">MCO</p>
        <hr style={{height:"10px"}}/>
        <p className="item1">Cordinator</p>
        <hr style={{height:"10px"}}/>
        <p className="item1">Team Member</p>
        <hr style={{height:"10px"}}/>
        <p className="item1">Assigment ID</p>
          </ListItem>
        ))}
      </List>
    );
  };
  
  const MissedOutView = () => {
    return (
      <List style={{ maxHeight: "100%", overflow: "auto" }}>
        {jsonData.map((item) => (
          <ListItem
            className="ListItem"
            key={item.id}
            
          >
            <p className="item1">Name</p>
            <hr style={{height:"10px"}}/>
        <p className="item1">Admission ID</p>
        <hr style={{height:"10px"}}/>
        <p className="item1">Member Name</p>
        <hr style={{height:"10px"}}/>
        <p className="item1">MCO</p>
        <hr style={{height:"10px"}}/>
        <p className="item1">Cordinator</p>
        <hr style={{height:"10px"}}/>
        <p className="item1">Team Member</p>
        <hr style={{height:"10px"}}/>
        <p className="item1">Assigment ID</p>
          </ListItem>
        ))}
      </List>
    );
  };
  
  

  return (
    <Wrapper>
      <div className="Header">
        <img className="headerImage" src="./EmpireHomeCareLogo.png" />
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
              fontSize: "20px",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Files
          </p>
          <hr style={{ width: "50%", fontSize: "10px", opacity: "0.2" }} />
          <div className="buttonHolder">
         

            <Button onClick={MissedOutPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Pending
              </p>
            </Button>
            <Button onClick={MissedCallPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Total Accepted
              </p>
            </Button>
            <Button onClick={VisitLogPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Staffed
              </p>
            </Button>
            <Button onClick={RejectedCallsPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Accepted Non MasterWok
              </p>
            </Button>
          </div>
        </Card>

        <Card className="dataDisplay">
          {renderColumeName()}
          <SearchIcon className="searchIcon" onClick={handleClickIcon} />
          {isOverlayOpen3 && <Overlay3 />}
          {isOverlayOpen4 && <Overlay4 />}
          {isOverlayOpen5 && <Overlay5 />}
          {isOverlayOpen6 && <Overlay6 />}
          {RenderViews()}
        </Card>
      </div>

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
}
export default PendingQueuePlacement;

const Wrapper = styled.section`
  height: 100%;
  width: 100%;

  .CardHolder {
    display: flex;
    flex-direction: row;
  }
  .ListItem {
    margin-top: 1%;
    background-color: #0b2b40;
    color: white;
    border-radius: 10px;
    width: 100%;
  }
  .ListText {
    width: 100px;
    text-align: center;
  }
  .ListItem:hover .ListText {
    color: black;
    font-weight: bold;
    background-color: white;
  }
  .item1 {
    

    font-size: 15px;
    color: white;
    font-weight: bold;
    text-align:center;
    margin:0.5%;
  }
  //List Items

  // overlay css end
  .overlay {
    position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
  height: 50%;
  z-index: 1000;
  background-color: white;
  padding: 1%;
  }
 
  .crossIcon {
    margin-left: 95%;
    margin-top: 2%;
  }
  .searchFieldsDiv {
    display: flex; 
    margin-top:2.5%;
    width:85%;
    margin-left:40%;
  }

  .searchButton {
    margin-left: 35%;
    margin-top: 5%;
    width:30%;
    background-color:#f26e22;
    color:white;
    font-weight:bold;
  }
  .searchButton:hover {
    background-color:#2E0F59;
    color:white;
  }

  //overlay css end

  //need help div start

  .NeedHelpDiv {
    margin-left: 35%;
    margin-top: 30%;
  }
  .needHelpText {
    color: white;
  }
  .NeedHelpTele {
    color: white;
    text-decoration: none;
  }

  //need help end

  //data display card
  .dataDisplay {
    height: 645px;
    width: 70%;
    margin-left: 2%;
    margin-top: 3%;
    background-color:#F2F2F2;
    padding: 1.7%;
  }
  .columnName {
    display: flex;
    flex-direction: row;
    height: 5.8%;
    border-radius: 15px;
    padding:1%;
  }
  .colume1 {
    
    font-size: 15px;
    color: grey;
    font-weight: bold;
    text-align:center;
    margin:0.5%;
  }

  
  .searchIcon {
    position: absolute;
    z-index: 999;
    padding: 1%;
    font-size: 50px;
    color: white;
    margin-left: 65%;
    cursor: pointer;
    background-color: grey;
    border-radius: 500px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  }

  //data display card end

  //UserInfo(TaskBar)
  .TaskBar {
    width: 20%;
    height: 700px;
    background-color: #2a558c;
    margin-top: 3%;
    margin-bottom: 10%;
    margin-left: 2%;
  }

  .UserInfo {
    display: flex;
    flex-direction: row;
    margin-top: 5%;
    margin-left: 10%;
  }
  .avatar {
    margin: 2%;
    margin-top: 5%;
  }
  .buttonHolder {
    display: flex;
    flex-direction: column;
  }
  .navigationButton {
    margin: 2%;
  }

  //UserInfo Ending

  //Footer CSS Files
  .footer {
    display: flex;
    flex-direction: row;
    bottom: 0;
    width: 100%;
    height: 250px;
    background-color: #0a2740;
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

  //Header CSS FILES
  .Header {
    display: flex;
    flex-direction: row;
    margin-left: 5.9%;
    margin-top: 0.5%;
    width: 93%;
    background-color: white;
  }
  .headerImage {
    width: 7%;
    height: 1%;
    border-radius: 15px;
  }
  .headerImage:hover {
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
  .button {
    background-color: white;
    border-width: 0;
    margin-left: 5%;
    margin-top: 0.5%;
    width: 08%;
    height: 50px;
    cursor: pointer;
    transition: box-shadow 0.2s ease-in-out;
    border-radius: 10px;
  }
  .button:hover {
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  }
  .LogOutbutton {
    background-color: #f26e22;
    color: white;
    width: 10%;
    height: 150%;
    margin-top: 1%;
    margin-left: 15%;
    padding: 0.5%;
    border-radius: 10px;
  }
  .LogOutbutton:hover {
    color: black;
  }
  //Header CSS FILES ENDING
`;
