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
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";


function Report() {
  const [ViewSelected, setViewSelected] = useState(1);
  const navigate = useNavigate();
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isOverlayOpen2, setIsOverlayOpen2] = useState(false);
  const [isOverlayOpen3, setIsOverlayOpen3] = useState(false);
  const [isOverlayOpen4, setIsOverlayOpen4] = useState(false);
  const [isOverlayOpen5, setIsOverlayOpen5] = useState(false);
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleClickIcon = () => {
    switch (ViewSelected) {
      case 1:
        setIsOverlayOpen(true);
        break;
      case 2:
        setIsOverlayOpen2(true);
        break;
      case 3:
        setIsOverlayOpen3(true);
        break;
      case 4:
        setIsOverlayOpen4(true);
        break;
      case 5:
        setIsOverlayOpen5(true);
        break;
      default:
        break;
    }
  };
  function RenderSearchIcon(){
    switch (ViewSelected) {
      
      case 2:
        return<SearchIcon className="searchIcon" onClick={handleClickIcon} />;
      case 4:
        return<SearchIcon className="searchIcon" onClick={handleClickIcon} />;
      
      default:
        break;
    }
  }
  const handleCloseOverlay = () => {
    setIsOverlayOpen(false);
  };
  const handleCloseOverlay2 = () => {
    setIsOverlayOpen2(false);
  };
  const handleCloseOverlay3 = () => {
    setIsOverlayOpen3(false);
  };
  const handleCloseOverlay4 = () => {
    setIsOverlayOpen4(false);
  };
 
  function Overlay() {
    return (
      <div className="overlay">
        <CloseIcon className="crossIcon" onClick={handleCloseOverlay} />
        <h1 style={{textAlign:"center"}}>Set Filter from here !</h1>
        <p
          style={{
            fontSize: 15,
            fontWeight: "bold",
            color: "#042940",
            textAlign: "center",
          }}
        >
          Change Password
        </p>
        <div>
       
          <h3 style={{textAlign:"center",color:"grey"}}>This page does not include any searchable content</h3>
        </div>
        <Button className="searchButton" onClick={handleCloseOverlay}>
          Okay
        </Button>
      </div>
    );
  }
  function Overlay2() {
    return (
      <div className="overlay2">
        <CloseIcon className="crossIcon" onClick={handleCloseOverlay2} />
        <h1 style={{textAlign:"center"}}>Set Filter from here !</h1>
        <p
          style={{
            fontSize: 15,
            fontWeight: "bold",
            color: "#042940",
            textAlign: "center",
          }}
        >
          Reference Table Management
        </p>
        <div className="searchFieldsDiv1">
        <Grid container spacing={2}>
        <Grid item xs="4">
              <Box>
                <FormControl fullWidth>
                  <InputLabel>Reference Table</InputLabel>
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
        <Button className="searchButton" onClick={handleCloseOverlay3}>
          Search
        </Button>
      </div>
    );
  }
  function Overlay4() {
    return (
      <div className="overlay2">
        <CloseIcon className="crossIcon" onClick={handleCloseOverlay4} />
        <h1 style={{ textAlign:"center" }}>Set Filter from here !</h1>
        <p
          style={{
            fontSize: 15,
            fontWeight: "bold",
            color: "#042940",
            textAlign: "center",
          }}
        >
          Rate Management
        </p>
        <div className="searchFieldsDiv1">
        <Grid container spacing={2}>
        <Grid item xs="4">
              <Box>
                <FormControl fullWidth>
                  <InputLabel>MCO</InputLabel>
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
        <Button className="searchButton" onClick={handleCloseOverlay4}>
          Search
        </Button>
      </div>
    );
  }
  

  const UserManagementPressed = () => {
    //Navigate to User Managemnt
    navigate("/UserManagement");
  };

  const ChangePasswordPressed = () => {
    setViewSelected(1);
  };
  const CordinatorSetupPressed = () => {
   //Navigate to CordinatorSetUp
   navigate("/CordinatorSetup");
  };
  const ReferenceTableManagementPressed = () => {
    setViewSelected(2);
  };
  const ProviderProfilePressed = () => {
    setViewSelected(3);
  };
  const RateManagementPressed = () => {
    setViewSelected(4);
  };
  const FileProcessingPressed = () => {
   //Navigate to File Processing
   navigate("/FileProcessing");
  };
  const EdiImportPressed=()=> {
   //Navigate to EDI Imports
   navigate("/EDIImports");
    
  }

  function RenderViews() {
    switch (ViewSelected) {
      case 1:
        return ChangePasswordView();

      case 2:
        return ReferenceTableView();

      case 3:
        return ProviderProfileView();

      case 4:
        return RateManagementView();
      default:
        break;
    }
  }

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
  const jsonData2 = [
    {
      id: 1,
      name: "Hector Salamanca",
      address: "Downtown Lipsy London, SDWEI15",
    },
    {
      id: 2,
      name: "Hector Salamanca",
      address: "Downtown Lipsy London, SDWEI15",
    },
    {
      id: 3,
      name: "Hector Salamanca",
      address: "Downtown Lipsy London, SDWEI15",
    },
  ];
  //CareGiverView
  const ChangePasswordView = () => {
    return (
      <List style={{ maxHeight: "100%", overflow: "auto" }}>
        {jsonData.map((item) => (
          <ListItem className="ListItem">
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
    );
  };
  //ComplianceView
  const ReferenceTableView = () => {
    return (
      <List style={{ maxHeight: "100%", overflow: "auto" }}>
        {jsonData.map((item) => (
          <ListItem className="ListItem">
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
    );
  };
  //OtherReportsView
  const ProviderProfileView = () => {
    return (
      <List style={{ maxHeight: "100%", overflow: "auto" }}>
        {jsonData.map((item) => (
          <ListItem className="ListItem">
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
    );
  };
  //MembersView
  const RateManagementView = () => {
    return (
      <List style={{ maxHeight: "100%", overflow: "auto" }}>
        {jsonData.map((item) => (
          <ListItem className="ListItem">
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
            <Button
              className="navigationButton"
              onClick={() => {
                UserManagementPressed();
              }}
            >
              <p
                style={{
                  fontSize: "15px",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                User Management
              </p>
            </Button>

            <Button onClick={ChangePasswordPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Change Password
              </p>
            </Button>
            <Button onClick={CordinatorSetupPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Cordinator Setup
              </p>
            </Button>

            <Button onClick={ReferenceTableManagementPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Reference Table Management
              </p>
            </Button>

            <Button onClick={ProviderProfilePressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Provider Profile
              </p>
            </Button>

            <Button onClick={RateManagementPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Rate Management
              </p>
            </Button>

            <Button onClick={FileProcessingPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                File Processing
              </p>
            </Button>
            <Button onClick={EdiImportPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                EDI Import
              </p>
            </Button>
          </div>
        </Card>

        <Card className="dataDisplay">
          {RenderSearchIcon()}
          {isOverlayOpen && <Overlay />}
          {isOverlayOpen2 && <Overlay2 />}
          {isOverlayOpen4 && <Overlay4 />}
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
export default Report;

const Wrapper = styled.section`
  height: 100%;
  width: 100%;

  .CardHolder {
    display: flex;
    flex-direction: row;
  }
  .ListItem {
    margin-top: 1%;
    margin-left: 2%;
    background-color: #0b2b40;
    color: white;
    border-radius: 10px;
    width: 95%;
  }
  .ListText {
    width: 300px;
    text-align: center;
  }
  .ListItem:hover .ListText {
    color: black;
    font-weight: bold;
  }

  // overlay css end
  .overlay {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    height: 50%;
    z-index: 1000;
    background-color: white;
    padding: 1%;
  }
  .overlay2{  position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    height: 44%;
    z-index: 1000;
    background-color: white;
    padding: 1%;
  }
  .overlay3{  
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 75%;
    height: 60%;
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
    margin-left: 10%;
  }
  .searchFieldsDiv1 {
    display: flex;
    margin-top: 2.5%;
    width: 85%;
    margin-left: 36%;
  }
  .searchButton {
    margin-left: 35%;
    margin-top: 5%;
    width: 30%;
    background-color: #f26e22;
    color: white;
    font-weight: bold;
  }
  .searchButton:hover {
    background-color: #2e0f59;
    color: white;
  }
  .Field {
    width: 50%;
    margin: 2%;
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
    height: 722px;
    width: 70%;
    margin-left: 2%;
    margin-top: 3%;
    background-color: #f2f2f2;
    padding: 1.7%;
  }
  .columnName {
    display: flex;
    flex-direction: row;
    height: 5.8%;
    border-radius: 15px;
  }
  .colume1 {
    margin-left: 12%;
    font-size: 15px;
    color: grey;
    font-weight: bold;
    margin-top: 0.5%;
  }
  .colume2 {
    margin-left: 19%;
    font-size: 15px;
    color: grey;
    font-weight: bold;
    margin-top: 0.5%;
  }
  .colume3 {
    margin-left: 17.5%;
    font-size: 15px;
    color: grey;
    font-weight: bold;
    margin-top: 0.5%;
  }
  .colume4 {
    margin-left: 17%;
    font-size: 15px;
    color: grey;
    font-weight: bold;
    margin-top: 0.5%;
  }
  .colume5 {
    margin-left: 20%;
    font-size: 15px;
    color: grey;
    font-weight: bold;
    margin-top: 0.5%;
  }
  .colume6 {
    margin-left: 45%;
    font-size: 15px;
    color: grey;
    font-weight: bold;
    margin-top: 0.5%;
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
    height: 780px;
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
    margin-top: 2%;
  }

  //UserInfo Ending

  //Footer CSS Files
  .footer {
    display: flex;
    flex-direction: row;
    bottom: 0;
    width: 100%;
    height: 250px;
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
