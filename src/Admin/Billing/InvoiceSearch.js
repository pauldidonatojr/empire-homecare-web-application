import React, { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import Footer from "../../Footer";
import { DataGrid } from '@mui/x-data-grid';

function Visit() {
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [ViewSelected, setViewSelected] = useState(2);

  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isOverlayOpen2, setIsOverlayOpen2] = useState(false);
  const [isOverlayOpen3, setIsOverlayOpen3] = useState(false);

  const handleCloseOverlay = () => {
    setIsOverlayOpen(false);
  };
  const handleCloseOverlay2 = () => {
    setIsOverlayOpen2(false);
  };
  const handleCloseOverlay3 = () => {
    setIsOverlayOpen3(false);
  };

  const handleClickIcon = () => {
    switch (ViewSelected) {
      case 2:
        setIsOverlayOpen(true);
        break;
      case 3:
        setIsOverlayOpen2(true);
        break;
      case 4:
        setIsOverlayOpen3(true);
        break;
      default:
        break;
    }
  };

  function Overlay() {
    return (
      <div className="overlay">
        <CloseIcon className="crossIcon" onClick={handleCloseOverlay} />
        <h1 style={{ marginLeft: "41%" }}>Set Filter from here !</h1>
        <p
          style={{
            fontSize: 15,
            fontWeight: "bold",
            color: "#042940",
            textAlign: "center",
          }}
        >
          By Invoice
        </p>
        <div className="searchFieldsDiv">
          <Grid container spacing={3}>
            <Grid item xs="2.87">
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
            <Grid item xs="3">
              <TextField
                id="outlined-basic"
                label="Member Name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs="3">
              <TextField
                id="outlined-basic"
                label="Admission ID"
                variant="outlined"
              />
            </Grid>

            <Grid item xs="3">
              <TextField
                id="outlined-basic"
                label="Invoice Number"
                variant="outlined"
              />
            </Grid>
            <Grid item xs="3">
              <TextField
                id="outlined-basic"
                label="From Date MM/DD/YYYY"
                variant="outlined"
              />
            </Grid>

            <Grid item xs="3">
              <TextField
                id="outlined-basic"
                label="To Date MM/DD/YYYY"
                variant="outlined"
              />
            </Grid>
            <Grid item xs="3">
              <TextField
                id="outlined-basic"
                label="Batch Number"
                variant="outlined"
              />
            </Grid>

            <Grid item xs="2.87">
              <Box>
                <FormControl fullWidth>
                  <InputLabel>Office</InputLabel>
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
        <Button className="searchButton" onClick={handleCloseOverlay}>
          Search
        </Button>
      </div>
    );
  }
  function Overlay2() {
    return (
      <div className="overlay2">
        <CloseIcon className="crossIcon" onClick={handleCloseOverlay2} />
        <h1 style={{ textAlign: "center" }}>Set Filter from here !</h1>
        <p
          style={{
            fontSize: 15,
            fontWeight: "bold",
            color: "#042940",
            textAlign: "center",
          }}
        >
          By Visit
        </p>
        <div className="searchFieldsDiv">
          <Grid container spacing={2}>
            <Grid item xs="3">
              <TextField
                id="outlined-basic"
                label="Member Name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs="3">
              <TextField
                id="outlined-basic"
                label="Admission ID"
                variant="outlined"
              />
            </Grid>
            <Grid item xs="3">
              <TextField
                id="outlined-basic"
                label="From Date DD/MM/YYYY"
                variant="outlined"
              />
            </Grid>

            <Grid item xs="3">
              <TextField
                id="outlined-basic"
                label="To Date DD/MM/YYYY"
                variant="outlined"
              />
            </Grid>

            <Grid item xs="2.87">
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
            <Grid item xs="3">
              <TextField
                id="outlined-basic"
                label="Invoice Number"
                variant="outlined"
              />
            </Grid>
            <Grid item xs="2.87">
              <Box>
                <FormControl fullWidth>
                  <InputLabel>Export Status</InputLabel>
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
              <Box>
                <FormControl fullWidth>
                  <InputLabel>Billing Hold</InputLabel>
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
        <Button className="searchButton" onClick={handleCloseOverlay2}>
          Search
        </Button>
      </div>
    );
  }
  //
  function Overlay3() {
    return (
      <div className="overlay2">
        <CloseIcon className="crossIcon" onClick={handleCloseOverlay3} />
        <h1 style={{ textAlign: "center" }}>Set Filter from here !</h1>
        <p
          style={{
            fontSize: 15,
            fontWeight: "bold",
            color: "#042940",
            textAlign: "center",
          }}
        >
          By Batch
        </p>
        <div className="searchFieldsDiv">
          <Grid container spacing={2}>
            <Grid item xs="3">
              <TextField
                id="outlined-basic"
                label="Batch Number"
                variant="outlined"
              />
            </Grid>
            <Grid item xs="2.87">
              <Box>
                <FormControl fullWidth>
                  <InputLabel>Status</InputLabel>
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
                label="From Date DD/MM/YYYY"
                variant="outlined"
              />
            </Grid>
            <Grid item xs="3">
              <TextField
                id="outlined-basic"
                label="To Date DD/MM/YYYY"
                variant="outlined"
              />
            </Grid>
            <Grid item xs="3">
              <TextField
                id="outlined-basic"
                label="AR Export From Date DD/MM/YYYY"
                variant="outlined"
              />
            </Grid>
            <Grid item xs="3">
              <TextField
                id="outlined-basic"
                label="AR Export To Date DD/MM/YYYY"
                variant="outlined"
              />
            </Grid>
            <Grid item xs="3">
              <TextField
                id="outlined-basic"
                label="Billing Export From Date DD/MM/YYYY"
                variant="outlined"
              />
            </Grid>

            <Grid item xs="3">
              <TextField
                id="outlined-basic"
                label="Billing Export To Date DD/MM/YYYY"
                variant="outlined"
              />
            </Grid>
            <Grid item xs="2.87">
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
        <Button className="searchButton" onClick={handleCloseOverlay3}>
          Search
        </Button>
      </div>
    );
  }
  //

  const VisitSearchPressed = () => {
    setViewSelected(2);
  };
  const VisitQuickSearchPressed = () => {
    setViewSelected(3);
  };

  const ByBatchPressed = () => {
    setViewSelected(4);
  };

  function RenderViews() {
    switch (ViewSelected) {
      case 2:
        return ByInvoiceView();

      case 3:
        return ByVisitView();
      case 4:
        return ByBatchView();

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

  //
  const ByBatchView = () => {
    return (
      <div style={{ height: "100%", width: '100%' }}>
      <DataGrid
        rows={rows1}
        columns={columns1}
        pageSize={5}
        rowsPerPageOptions={[15]}
        checkboxSelection
      />
    </div>
    );
  };
  //
  // ByBatchView
  const columns1 = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'batchNumber', headerName: 'Batch Number', width: 120 },
    { field: 'status', headerName: 'Status', width: 110 },
    { field: 'fromDate', headerName: 'From Date', width: 110 },
    { field: 'toDate', headerName: 'To Date', width: 110 },
    { field: 'aRExportFromDate', headerName: 'AR Export From Date', width: 155 },
    { field: 'aRExportToDate', headerName: 'AR Export To Date', width: 155 },
    { field: 'billingExport', headerName: 'Billing Export', width: 120 },
    { field: 'mco', headerName: 'MCO', width: 125 },
  ];
  
  const rows1 = [
    {id:1,batchNumber:"4578",status:"Jenifer",fromDate:"Awston",toDate:"02548965478",aRExportFromDate:"Active",aRExportToDate:"Adam Fernandez",billingExport:"Delta",mco:"Delta"},
    {id:2,batchNumber:"4578",status:"Jenifer",fromDate:"Awston",toDate:"02548965478",aRExportFromDate:"Active",aRExportToDate:"Adam Fernandez",billingExport:"Delta",mco:"Delta"},
    {id:3,batchNumber:"4578",status:"Jenifer",fromDate:"Awston",toDate:"02548965478",aRExportFromDate:"Active",aRExportToDate:"Adam Fernandez",billingExport:"Delta",mco:"Delta"},
    {id:4,batchNumber:"4578",status:"Jenifer",fromDate:"Awston",toDate:"02548965478",aRExportFromDate:"Active",aRExportToDate:"Adam Fernandez",billingExport:"Delta",mco:"Delta"},
    {id:5,batchNumber:"4578",status:"Jenifer",fromDate:"Awston",toDate:"02548965478",aRExportFromDate:"Active",aRExportToDate:"Adam Fernandez",billingExport:"Delta",mco:"Delta"},
   
  ];
  const ByInvoiceView = () => {
    return (
      <div style={{ height: "100%", width: '100%' }}>
      <DataGrid
        rows={rows3}
        columns={columns3}
        pageSize={5}
        rowsPerPageOptions={[15]}
        checkboxSelection
      />
    </div>
    );
  };
  // ByInvoiceView
  const columns3 = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'mco', headerName: 'MCO', width: 100 },
    { field: 'memberName', headerName: 'Member Name', width: 130 },
    { field: 'admissionID', headerName: 'Admission ID', width: 140 },
    { field: 'invoiceNumber', headerName: 'Invoice Number', width: 140 },
    { field: 'fromDate', headerName: 'From Date', width: 125 },
    { field: 'toDate', headerName: 'To Date', width: 120 },
    { field: 'batchNumber', headerName: 'Batch Number', width: 125 },
    { field: 'office', headerName: 'Office', width: 125 },
   
  ];
  
  const rows3 = [
    {id:1,mco:"4578",memberName:"Jenifer",admissionID:"Awston",invoiceNumber:"02548965478",fromDate:"Active",toDate:"Adam Fernandez",batchNumber:"Delta",office:"Delta"},
    {id:2,mco:"4578",memberName:"Jenifer",admissionID:"Awston",invoiceNumber:"02548965478",fromDate:"Active",toDate:"Adam Fernandez",batchNumber:"Delta",office:"Delta"},
    {id:3,mco:"4578",memberName:"Jenifer",admissionID:"Awston",invoiceNumber:"02548965478",fromDate:"Active",toDate:"Adam Fernandez",batchNumber:"Delta",office:"Delta"},
    {id:4,mco:"4578",memberName:"Jenifer",admissionID:"Awston",invoiceNumber:"02548965478",fromDate:"Active",toDate:"Adam Fernandez",batchNumber:"Delta",office:"Delta"},
  
  ];
  const ByVisitView = () => {
    return (
      <div style={{ height: "100%", width: '100%' }}>
      <DataGrid
        rows={rows4}
        columns={columns4}
        pageSize={5}
        rowsPerPageOptions={[15]}
        checkboxSelection
      />
    </div>
    );
  };
   // ByVisitView
   const columns4 = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'memberName', headerName: 'Member Name', width: 120 },
    { field: 'admissionID', headerName: 'Admission ID', width: 140 },
    { field: 'fromDate', headerName: 'From Date', width: 125 },
    { field: 'toDate', headerName: 'To Date', width: 120 },
    { field: 'mco', headerName: 'MCO', width: 125 },
    { field: 'invoiceNumber', headerName: 'Invoice Number', width: 125 },
    { field: 'exportStatus', headerName: 'Export Status', width: 125 },
    { field: 'billingHold', headerName: 'Billing Hold', width: 125 },
   
  ];
  
  const rows4 = [
    {id:1,memberName:"4578",admissionID:"Jenifer",fromDate:"Awston",toDate:"02548965478",mco:"Active",invoiceNumber:"Adam Fernandez",exportStatus:"Delta",billingHold:"Delta"},
    {id:2,memberName:"4578",admissionID:"Jenifer",fromDate:"Awston",toDate:"02548965478",mco:"Active",invoiceNumber:"Adam Fernandez",exportStatus:"Delta",billingHold:"Delta"},
    {id:3,memberName:"4578",admissionID:"Jenifer",fromDate:"Awston",toDate:"02548965478",mco:"Active",invoiceNumber:"Adam Fernandez",exportStatus:"Delta",billingHold:"Delta"},
    {id:4,memberName:"4578",admissionID:"Jenifer",fromDate:"Awston",toDate:"02548965478",mco:"Active",invoiceNumber:"Adam Fernandez",exportStatus:"Delta",billingHold:"Delta"},
     
  ];

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
                ByBatchPressed();
              }}
            >
              <p
                style={{
                  fontSize: "15px",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                By Batch
              </p>
            </Button>
            <Button onClick={VisitSearchPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                By Invoice
              </p>
            </Button>

            <Button
              onClick={VisitQuickSearchPressed}
              className="navigationButton"
            >
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                By Visit
              </p>
            </Button>
          </div>
        </Card>

        <Card className="dataDisplay">
          <SearchIcon className="searchIcon" onClick={handleClickIcon} />
          {isOverlayOpen && <Overlay />}
          {isOverlayOpen2 && <Overlay2 />}
          {isOverlayOpen3 && <Overlay3 />}
          {RenderViews()}
        </Card>
      </div>

      <Footer />
    </Wrapper>
  );
}
export default Visit;

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
    padding: 1%;
    width: 100%;
    background-color: #0b2b40;
  }

  .th {
    border: 1px solid #aaaaaa;
    text-align: center;
    font-size: 18px;
    color: white;
  }
  .td {
    border: 1px solid #aaaaaa;
    text-align: center;
    color: white;
    font-size: 16px;
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
  .item1 {
    font-size: 15px;
    color: white;
    font-weight: bold;
    text-align: center;
    margin: 0.5%;
  }

  // overlay css end
  .overlay {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 75%;
    height: 55%;
    z-index: 1000;
    background-color: white;
    padding: 1%;
  }
  .overlay2 {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 75%;
    height: 62%;
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
  .searchFieldsDiv2 {
    display: flex;
    margin-top: 2.5%;
    width: 85%;
    margin-left: 30%;
  }
  .Field {
    width: 50%;
    margin: 2%;
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
  .item1 {
    font-size: 15px;
    color: white;
    font-weight: bold;
    text-align: center;
    margin: 0.5%;
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
    height: 600px;
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
    padding: 1%;
  }
  .colume1 {
    font-size: 15px;
    color: grey;
    font-weight: bold;
    text-align: center;
    margin: 0.5%;
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
    height: 650px;
    background-color: #564873;
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
    align-items: center;
    justify-content: center;
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
