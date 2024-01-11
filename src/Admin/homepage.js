import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Footer from "../Footer";
import { DataGrid } from '@mui/x-data-grid';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import {AuthContext} from '../components/context'
import Backdrop from '@mui/material/Backdrop';
import { getMembers } from "../API/membersApi";
import { ToastContainer, toast } from 'react-toastify';
import OverlayCustom from "./Overlay";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';


function Homepage() {

  const notify = () => toast("Data Fetching for Members!");
  const notifyAdd = () => toast("Care Giver Added Sucessfuly!");

  const [memberData, setMemberData] = useState([]);
  const { signOut } = React.useContext(AuthContext);
  const [row, setRow] = useState([]);
  var [initRow, setInitRow] = useState([]);

//
const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  //

  // Filter Data 

  const [memberID, setMemberID] = React.useState(null);
  const [admissionID, setAdmissionID] = React.useState(null);
  const [name, setName] = React.useState(null);
  const [phone, setPhone] = React.useState(null);
  const [status, setStatus] = React.useState(null);
  const [coordinator, setCoordinator] = React.useState(null);
  const [mco, setMCO] = React.useState(null);
  const [office, setOffice] = React.useState(null);
  const [venderID, setVenderID] = React.useState(null);


  // 

  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [ViewSelected, setViewSelected] = useState(1);

  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const navigate = useNavigate();
  //
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };




  const list = (anchor) => (
    <div  style={{
      height: "100vh",
      backgroundColor: "#2E0F59",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}

    >

      <div style={{ backgroundColor: "#2E0F59", display: "flex", flexDirection: "column", alignItems: "center", height: "680px" }}>

        <p
          className="Files"
          style={{
            fontSize: "20px",
            color: "#F2B90F",
            fontWeight: "bold",
          }}
        >
          Files
        </p>
        <hr className="line" style={{ width: "50%", fontSize: "10px", opacity: "0.2" }} />

        <h3 onClick={MemberPressed} style={{ color: "#F2B90F" }}>Members</h3>
        <h3 onClick={CareGiverPressed} style={{ color: "#F2B90F" }}>Care Givers</h3>
        <h3 onClick={VisitPressed} style={{ color: "#F2B90F" }}> Visits</h3>
        <h3 onClick={ActionPressed} style={{ color: "#F2B90F" }}>Action</h3>
        <h3 onClick={BillingPressed} style={{ color: "#F2B90F" }} >Billings</h3>
        <h3 onClick={ReportPressed} style={{ color: "#F2B90F" }} >Report</h3>
        <h3 onClick={AdminPressed} style={{ color: "#F2B90F" }}>Admin</h3>
      </div>
    </Box>
    </div>
  );
  //

  function CareGiverPressed() {

    navigate("/CareGiver");
  }

  function VisitPressed() {
    navigate("/Visit");

  }
  function ActionPressed() {
    navigate("/Action");

  }
  function BillingPressed() {
    navigate("/Billing");

  }
  function ReportPressed() {
    navigate("/Report");

  }
  function AdminPressed() {
    navigate("/Admin");

  }
  function MemberPressed() {
    setViewSelected(1);
  }

  const handleClickIcon = () => {
    setIsOverlayOpen(true);
    setOpen(!open);
    setRow(initRow);
  };
  const handleCloseOverlay = () => {
    setIsOverlayOpen(false);
  };

  function populateData() {
    for (var key in row) {
      if(row[key].Name == name && name != null){
        var myArray = row;
        myArray = myArray.filter(function( obj ) {
          return obj.Name == row[key].Name;
        });
        setRow(myArray)
      }
      
      
      if(row[key].Phone == phone && phone != null){
        var myArray = row;
        myArray = myArray.filter(function( obj ) {
          return obj.Phone == row[key].Phone;
        });
        setRow(myArray)
      }

      if(row[key].id == memberID && memberID != null){
        var myArray = row;
        myArray = myArray.filter(function( obj ) {
          return obj.id == row[key].id;
        });
        setRow(myArray)
      }

      if(row[key].AdmissionID == admissionID && admissionID != null){
        var myArray = row;
        myArray = myArray.filter(function( obj ) {
          return obj.AdmissionID == row[key].AdmissionID;
        });
        setRow(myArray)
      }

      if(status != 10){
        var myArray = row;
        myArray = myArray.filter(function( obj ) {
          return obj.Status == "Active";
        });
        setRow(myArray)
      }

      if(status == 20){
        var myArray = row;
        myArray = myArray.filter(function( obj ) {
          return obj.Status == "Inactive";
        });
        setRow(myArray)
      }

      
    }
  }

  const handleFilterStatus = (event) => {
    setAge(event.target.value);
    setStatus(event.target.value);
  };



  function Overlay() {

    return (
      <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
     
    >
      <div className="overlay">
        <CloseIcon className="crossIcon" onClick={handleClose} />
        <h1 style={{ textAlign: "center",color:"black" }}>Set Filter from here !</h1>
        <p style={{ fontSize: 15, fontWeight: "bold", color: "#042940", textAlign: "center" }}>Members</p>
        <div className="searchFieldsDiv">


          <Grid className="griditem">
            <TextField

              id="memberID"
              label="Member ID"
              variant="outlined"
            />
          </Grid>
          <Grid className="griditem">
            <TextField
              id="admissionID"
              label="Admission ID"
              variant="outlined"
            />
          </Grid>

          <Grid className="griditem">

            <TextField

              id="name"
              label="Name"
              variant="outlined"
            />
          </Grid>
          
          <Grid className="griditem">

            <TextField

              id="phone"
              label="Phone Number"
              variant="outlined"
            />

          </Grid>


          <Grid className="griditem2">

            <Box >
              <FormControl fullWidth>
                <InputLabel >Status</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Status"
                  onChange={handleFilterStatus}
                >
                  <MenuItem value={10}>Active</MenuItem>
                  <MenuItem value={20}>Inactive</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
          {/* <Grid className="griditem2" >

            <Box>
              <FormControl fullWidth>
                <InputLabel >Cordinator</InputLabel>
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
          <Grid className="griditem2">

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
          </Grid> */}
          {/* <Grid className="griditem2">

            <Box>
              <FormControl fullWidth>
                <InputLabel >Office</InputLabel>
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
          </Grid> */}
          {/* <Grid className="griditem2">
            <TextField

              id="venderID"
              label="Vender Tax ID"
              variant="outlined"
            />
          </Grid> */}

        </div>
        <Button className="searchButton" variant="outlined" onClick={() => {
          handleCloseOverlay();
          
          setMemberID(document.getElementById('memberID').value);
          setAdmissionID(document.getElementById('admissionID').value);
          setName(document.getElementById('name').value);
          setPhone(document.getElementById('phone').value);
          //setFilterCareGiverCode(document.getElementById('filterCareGiverCode').value);
          //setFilterAltCareGiverCode(document.getElementById('filterAltCareGiverCode').value);
          setVenderID(document.getElementById('venderID').value);
          populateData();
        }}>
          Search
        </Button>
      </div>
      </Backdrop>

    );
  }



  function RenderViews() {
    switch (ViewSelected) {
      case 1:
        return MembersView();

      default:
        break;
    }
  }
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

  function populateRows(){
      var arr = [];
      for (var key in memberData) {
        var obj = {
          id: memberData[key].MemberID,
          Name: memberData[key].FirstName,
          Gender: memberData[key].Gender,
          MCOName: memberData[key].MCOName,
          Discipline: memberData[key].Discipline,
          FirstDayofService: memberData[key].FirstDayofService,
          Location: memberData[key].Location,
          Status: memberData[key].Status,
          AdmissionID: memberData[key].AdmissionID,
          SSN: memberData[key].SSN,
          Phone: memberData[key].HomePhone
        }
        arr.push(obj);
    }
    setRow(arr);
    setInitRow(arr);
  }


  useEffect(()=>{
    notify();
    getMembers().then(res => {
      setMemberData(res.data);
    })
  },[])

  useEffect(() => {
    populateRows();
  }, [memberData]);

 

  const MembersView = () => {

    return (
      <div style={{ height: "100%", width: '100%' }}>
        <DataGrid
          rows={row}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[15]}
          checkboxSelection
       
        />
        
      </div>
    );
  };
 
  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { 
      field: 'Name', 
      headerName: 'Name', 
      width: 130, 
      renderCell: (params) => (
        <Link to={{
          pathname: "/MemberDetails",
          state: {
            name: params.value
          }
        }}>
          {params.value}
        </Link>
      )
    },
    { field: 'Gender', headerName: 'Gender', width: 100 },
    { field: 'MCOName', headerName: 'MCO Name', width: 200 },
    { field: 'Discipline', headerName: 'discipline', width: 150 },
    { field: 'FirstDayofService', headerName: 'Joining Date', width: 150 },
    { field: 'Location', headerName: 'Location', width: 250 },
    { field: 'Status', headerName: 'Status', width: 100 },
    { field: 'AdmissionID', headerName: 'Admission ID', width: 150 },
    { field: 'SSN', headerName: 'SSN', width: 150 },
    { field: 'Phone', headerName: 'Phone', width: 150 },

  ];

 
  return (
    <Wrapper>
      <ToastContainer />
      
      
    

      <div className="Header">

        <MenuIcon
          className="menuIcon"
          onClick={toggleDrawer('left', true)}
          anchor={'left'}
          open={state['left']}
          onClose={toggleDrawer('left', false)}>

        </MenuIcon>
        <img className="headerImage" src="./EmpireHomeCareLogo.png" />
        <Button className="LogOutbutton" variant="outlined" onClick={signOut}>
          Log Out
        </Button>
        <LogoutIcon onClick={signOut} className="LogoutIcon"></LogoutIcon>
      </div>

      <div className="NotificationHolder">
        <Button className="LinkNotification"> Link Notification </Button>
        <Button className="SystemNotification"> System Notification </Button>
      </div>
      <div style={{ display: "none" }}>
        {['left'].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
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
            className="Files"
            style={{
              marginLeft: "45%",
              fontSize: "20px",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Files
          </p>
          <hr className="line" style={{ width: "50%", fontSize: "10px", opacity: "0.2" }} />
          <div className="buttonHolder">
            <Button
              className="navigationButton"
              onClick={MemberPressed}>

              <p
                style={{
                  fontSize: "15px",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Members
              </p>
            </Button>

            <Button
              onClick={CareGiverPressed}
              className="navigationButton"
            >
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Care Givers
              </p>
            </Button>

            <Button
              onClick={VisitPressed}
            >
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Visits
              </p>
            </Button>

            <Button onClick={ActionPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Action
              </p>
            </Button>
            <Button onClick={BillingPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Billings
              </p>
            </Button>
            <Button onClick={ReportPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Report
              </p>
            </Button>
            <Button onClick={AdminPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Admin
              </p>
            </Button>
          </div>
        </Card>

        <Card className="dataDisplay">


          {isOverlayOpen && <Overlay />}
          <SearchIcon className="searchIcon" onClick={handleClickIcon} />
          {
          RenderViews()
          }
        </Card>
      </div>

      <Footer />
    </Wrapper>
  );
}
export default Homepage;

const Wrapper = styled.section`
  height: 100%;
  width: 100%;

  .CardHolder {
    display: flex;
    flex-direction: row;
  }

  //
  .griditem{
    width:100%;
  }
  .griditem2{
    width:68%;
  }
  .menuIcon{
    display:none;
  }

  .table {
    border-collapse: collapse;
    padding:1%;
    width:100%;
    background-color: #0b2b40;
  }
  
  .th {
    border: 1px solid #aaaaaa;
    text-align: center;
    font-size:20px;
    color:white;
  }
  .td {
    border: 1px solid #aaaaaa;
    text-align: center;
    color:white;
    font-size:17px;
    
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

  //Notification Start

  .NotificationHolder {
    padding: 15px;
    display: flex;
    
  }
  .LinkNotification {
    background-color:#2E0F59;
    color: #F2B90F;
    padding: 20px;
    font-weight: bold;
    margin-left: 2%;
    margin-right: 6%;
    border-radius: 10px;
  }
  .LinkNotification:hover {
    color: white;
    background-color: #f26e22;
  }
  .SystemNotification {
    background-color:#2E0F59;
    color: #F2B90F;
    padding: 19px;
    font-weight: bold;
    border-radius: 10px;
  }
  .SystemNotification:hover {
    color: white;
    background-color: #f26e22;
  }
  //Notification End

  // overlay css end
  .overlay {
    position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 75%;
  height: 70%;
  z-index: 1000;
  background-color: white;
  padding: 1%;
  }
  .crossIcon {
    margin-left: 95%;
    margin-top: 2%;
    color:black;
  }
  .searchFieldsDiv {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* create 3 equal columns */
    grid-gap: 10px; /* add some space between the columns */
    margin-top: 2.5%;
    width: 85%;
    margin-left: 10%;
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
    height: 668px;
    width: 70%;
    margin-left: 2%;
    margin-top: 0.5%;
    background-color: #f2f2f2;
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
    height: 725px;
    background-color:#564873;
    margin-top: 0.5%;
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
    margin-right:55%;
  }
  .headerImage:hover {
    /* animation: wave 1s infinite; */
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
  .LogoutIcon{
    display:none;
  }
  @media only screen and (max-width: 600px) {
    
    .TaskBar {
      display:none;
     
    }
    .UserInfo{
      display:none;
    }
    .hr{
      display:none;
    }
    .Files{
      display:none;
    }
    .CardHolder {
      flex-direction: column;
      margin-top: 0%;
    }
    .buttonHolder {
      flex-direction: row;
    }
    .dataDisplay {
      height: 668px;
      width: 97%;
      margin-top: 0%;
      margin-left:0%;
    }
    .line{
      display:none;
    }
    .LinkNotification{
      padding:5px;
      height:10%;
      font-size:14px;
      /* shadow-color: #000;
     .shadowOffset {
      width: 0;
      height: 7;
     }; */
    /* shadowOpacity: 0.41;
    shadowRadius: 9.11; */

    /* elevation: 14; */
    }
    .SystemNotification{
      padding:5px;
      height:10%;
      font-size:13.5px;
      /* shadow-color: "#000",
      shadow-offset: {
      width: 0;
      height: 7;
    }; */
    /* shadow-opacity: 0.41;
    shadow-radius: 9.11; */

    elevation: 14;
      
    }
    .LogOutbutton {
      width: 20%;
      height: 50%;
      display:none;
    
    }
    .headerImage {
      width: 30%;
      height: 15%;
      border-radius: 15px;
      margin-right:0;
    }
    .menuIcon{
      margin-right:20%;
      font-size:50px;
      display:inline;
      color:white;
      background-color:grey;
      border-radius:10px;
      
    }
    .LogoutIcon{
      font-size:40px;
      color:grey;
      margin-left:20%;
      display:inline;

    }
    .searchIcon {
      margin-left: 90.2%;
     
    }
    
    .crossIcon{
      margin-left:90%;
    }
    .griditem{
      width:100%;
    }
    .griditem2{
      width:92%;
    }
    .searchFieldsDiv {
      grid-template-columns: repeat(1, 1fr); /* create 3 equal columns */
    }
    .overlay {
    width: 75%;
    height: 80%;
    overflow:auto;
    }
    .searchButton {
      margin-top: 5%;
      margin-bottom: 2%;
    }
  }
`;
