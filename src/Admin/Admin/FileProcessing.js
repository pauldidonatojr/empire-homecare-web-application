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
import Footer from "../../Footer";
//
const Link = require("react-router-dom").Link;

function PendingQueuePlacement() {
  const [ViewSelected, setViewSelected] = useState(1);

  
//

const [age, setAge] = React.useState('');
const handleChange = (event) => {
  setAge(event.target.value);
};
  const [isOverlayOpen3, setIsOverlayOpen3] = useState(false);
  const [isOverlayOpen4, setIsOverlayOpen4] = useState(false);
 

  const handleClickIcon = () => {
    
    switch (ViewSelected) {
      
      case 3:
        setIsOverlayOpen3(true);
        break;
      case 4:
        setIsOverlayOpen4(true);
        break;
      
      default:
        break;
    }

  };

const ClaimFilesPressed = () => {
  setViewSelected(3);
};
const RemitancePressed = () => {
  setViewSelected(4);
};


  const handleCloseOverlay3 = () => {
    setIsOverlayOpen3(false);
  };
  const handleCloseOverlay4 = () => {
    setIsOverlayOpen4(false);
  };

  


function Overlay3() {
  return (
    <div className="overlay">
    <CloseIcon className="crossIcon" onClick={handleCloseOverlay3} />
    <h1 style={{ textAlign:"center" }}>Set Filter from here !</h1>
    <p style={{fontSize:15,fontWeight:"bold",color:"#042940",textAlign:"center"}}>Claim Files</p>
    <div className="searchFieldsDiv">
    <Grid container spacing={3}>

    <Grid item xs="2.87">
    
    <Box >
  <FormControl fullWidth>
    <InputLabel >File Type</InputLabel>
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

    <Grid item xs="3">
        <TextField
         
          id="outlined-basic"
          label="Processed From Date DD/MM/YYYY"
          variant="outlined"
        />
      </Grid>
      <Grid item xs="3">
        <TextField
         
          id="outlined-basic"
          label="Processed To Date DD/MM/YYYY"
          variant="outlined"
        />
      </Grid>
      <Grid item xs="3">
        <TextField
         
          id="outlined-basic"
          label="Batch Invoice"
          variant="outlined"
        />
      </Grid>
      <Grid item xs="3">
        <TextField
         
          id="outlined-basic"
          label="File Name"
          variant="outlined"
        />
      </Grid>
      <Grid item xs="2.87">
    
    <Box >
  <FormControl fullWidth>
    <InputLabel >Status</InputLabel>
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
    <p style={{fontSize:15,fontWeight:"bold",color:"#042940",textAlign:"center"}}>Remitances</p>
    <div className="searchFieldsDiv">
    <Grid container spacing={3}>

    <Grid item xs="2.87">
    
    <Box >
  <FormControl fullWidth>
    <InputLabel >File Type</InputLabel>
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

    <Grid item xs="3">
        <TextField
         
          id="outlined-basic"
          label="Processed From Date DD/MM/YYYY"
          variant="outlined"
        />
      </Grid>
      <Grid item xs="3">
        <TextField
         
          id="outlined-basic"
          label="Processed To Date DD/MM/YYYY"
          variant="outlined"
        />
      </Grid>
      <Grid item xs="3">
        <TextField
         
          id="outlined-basic"
          label="Batch Invoice"
          variant="outlined"
        />
      </Grid>
      <Grid item xs="3">
        <TextField
         
          id="outlined-basic"
          label="File Name"
          variant="outlined"
        />
      </Grid>
      <Grid item xs="2.87">
    
    <Box >
  <FormControl fullWidth>
    <InputLabel >Status</InputLabel>
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



  function RenderViews() {
    switch (ViewSelected) {
      
      case 3:
        return MissedOutView();
      case 4:
        return MissedCallView();

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


  
  
  const MissedCallView = () => {
    return (
      <div>
      <table className="table">
         <thead>
          <tr>
      <th className="th">Care Giver Name</th>
      <th className="th">Admission ID</th>
      <th className="th">Member Name</th>
      <th className="th">MCO</th>
      <th className="th">Cordinator</th>
      <th className="th">Team Member</th>
      <th className="th">Assigment ID</th>
      
      
          </tr>
         </thead>
         <tbody>
          {jsonData.map((data,i)=>(
            <tr>
              <td className="td">Member ID</td>
              <td className="td">Admission ID</td>
              <td className="td">Care Giver IN</td>
              <td className="td">Member ID</td>
              <td className="td">Admission ID</td>
              <td className="td">Care Giver IN</td>
              <td className="td">Member ID</td>             
            </tr>
          ))}
            
         </tbody>
      </table>      
   </div>
    );
  };
  
  const MissedOutView = () => {
    return (
      <div>
      <table className="table">
         <thead>
          <tr>
      <th className="th">Care Giver Name</th>
      <th className="th">Admission ID</th>
      <th className="th">Member Name</th>
      <th className="th">MCO</th>
      <th className="th">Cordinator</th>
      <th className="th">Team Member</th>
      <th className="th">Assigment ID</th>
      
      
          </tr>
         </thead>
         <tbody>
          {jsonData.map((data,i)=>(
            <tr>
              <td className="td">Member ID</td>
              <td className="td">Admission ID</td>
              <td className="td">Care Giver IN</td>
              <td className="td">Member ID</td>
              <td className="td">Admission ID</td>
              <td className="td">Care Giver IN</td>
              <td className="td">Member ID</td>             
            </tr>
          ))}
            
         </tbody>
      </table>      
   </div>
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
         

            <Button onClick={ClaimFilesPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Claim Files
              </p>
            </Button>
            <Button onClick={RemitancePressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Remitances
              </p>
            </Button>
           
          </div>
        </Card>

        <Card className="dataDisplay">
          <SearchIcon className="searchIcon" onClick={handleClickIcon} />
          {isOverlayOpen3 && <Overlay3 />}
          {isOverlayOpen4 && <Overlay4 />}
          {RenderViews()}
        </Card>
      </div>

    <Footer/>
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
  //

  .table {
    border-collapse: collapse;
    padding:1%;
    width:100%;
    background-color: #0b2b40;
  }
  
  .th {
    border: 1px solid #aaaaaa;
    text-align: center;
    font-size:17px;
    color:white;
  }
  .td {
    border: 1px solid #aaaaaa;
    text-align: center;
    color:white;
    font-size:16px;
    
  }

  //
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
  width: 75%;
  height: 65%;
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
  margin-top: 2.5%;
  width: 85%;
  margin-left:10%;
    
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
  font-size: 25px;
  color: white;
  margin-left: 69.2%;
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
    background-color:#564873;
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


  //Header CSS FILES
  .Header {
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content:center;
    margin-top: 0.5%;
    width: 100%;
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
