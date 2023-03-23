import React, { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
//
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
//
const Link = require("react-router-dom").Link;

function Billing() {
  const navigate = useNavigate();
  const [ViewSelected, setViewSelected] = useState(1);

  //

  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  //

  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isOverlayOpen2, setIsOverlayOpen2] = useState(false);
  const [isOverlayOpen4, setIsOverlayOpen4] = useState(false);

  const handleClickIcon = () => {
    switch (ViewSelected) {
      case 1:
        setIsOverlayOpen(true);
        break;
      case 2:
        setIsOverlayOpen2(true);
        break;

      case 4:
        setIsOverlayOpen4(true);
        break;
      default:
        break;
    }
  };
  //
  //
  const PreBillingReviewPressed = () => {
    setViewSelected(1);
  };

  const BillingReviewPressed = () => {
    setViewSelected(2);
  };
  const InvoiceSearchPressed = () => {
    //Navigate to Invoice Search Page
    navigate("/InvoiceSearch");

  };
  const NewInvoiceBatchPressed = () => {
    setViewSelected(4);
  };
  const ElectronicBillingPressed = () => {
    //Navigate to Electronic Billing
    navigate("/ElectronicBilling");
  };

  //
  const handleCloseOverlay = () => {
    setIsOverlayOpen(false);
  };
  const handleCloseOverlay2 = () => {
    setIsOverlayOpen2(false);
  };
  const handleCloseOverlay4 = () => {
    setIsOverlayOpen4(false);
  };

  //CallMaintance Search Overlay
  function Overlay() {
    return (
      <div className="overlay">
        <CloseIcon className="crossIcon" onClick={handleCloseOverlay} />
        <h1 style={{ textAlign: "center" }}>Set Filter from here !</h1>
        <p
          style={{
            fontSize: 15,
            fontWeight: "bold",
            color: "#042940",
            textAlign: "center",
          }}
        >
          Pre Billing Review
        </p>
        <div className="searchFieldsDiv">
          <Grid container spacing={3}>
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
                label="Care Giver Code"
                variant="outlined"
              />
            </Grid>
            <Grid item xs="3">
              <TextField
                id="outlined-basic"
                label="Care Giver Name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs="2.87">
              <Box>
                <FormControl fullWidth>
                  <InputLabel>Member Team</InputLabel>
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
            <Grid item xs="2.87">
              <Box>
                <FormControl fullWidth>
                  <InputLabel>Cordinator</InputLabel>
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

            <Grid item xs="2.87">
              <Box>
                <FormControl fullWidth>
                  <InputLabel>Problem</InputLabel>
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
        <Button
          className="searchButton"
          variant="outlined"
          onClick={handleCloseOverlay}
        >
          Search
        </Button>
      </div>
    );
  }

  //MissedIn
  function Overlay2() {
    return (
      <div className="overlay2">
        <CloseIcon className="crossIcon" onClick={handleCloseOverlay2} />
        <h1 style={{ marginLeft: "40%" }}>Set Filter from here !</h1>
        <p
          style={{
            fontSize: 15,
            fontWeight: "bold",
            color: "#042940",
            textAlign: "center",
          }}
        >
          Billing Review
        </p>
        <div className="searchFieldsDiv">
          <Grid container spacing={3}>
            <Grid item xs="2.87">
              <Box>
                <FormControl fullWidth>
                  <InputLabel>By Group (MCO)</InputLabel>
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
            <Grid item xs="2.87">
              <Box>
                <FormControl fullWidth>
                  <InputLabel>Member Team</InputLabel>
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
                  <InputLabel>Cordinator</InputLabel>
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
                  <InputLabel>Hold Reason</InputLabel>
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
                label="Member First Name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs="3">
              <TextField
                id="outlined-basic"
                label="Member Last Name"
                variant="outlined"
              />
            </Grid>

            <Grid item xs="3">
              <TextField
                id="outlined-basic"
                label="Visit From Date DD/MM/YYYY"
                variant="outlined"
              />
            </Grid>
            <Grid item xs="3">
              <TextField
                id="outlined-basic"
                label="Visit To Date DD/MM/YYYY"
                variant="outlined"
              />
            </Grid>

            <Grid item xs="2.87">
              <Box>
                <FormControl fullWidth>
                  <InputLabel>Display Zero Results</InputLabel>
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
                label="Batch Number"
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
                label="Invoice From Date DD/MM/YYYY"
                variant="outlined"
              />
            </Grid>
            <Grid item xs="3">
              <TextField
                id="outlined-basic"
                label="Invoice Till Date DD/MM/YYYY"
                variant="outlined"
              />
            </Grid>
            <Grid item xs="3">
              <TextField
                id="outlined-basic"
                label="Service Code"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </div>
        <Button
          className="searchButton"
          variant="outlined"
          onClick={handleCloseOverlay2}
        >
          Search
        </Button>
      </div>
    );
  }

  //Missed Call Overlay
  function Overlay4() {
    return (
      <div className="overlay4">
        <CloseIcon className="crossIcon" onClick={handleCloseOverlay4} />
        <h1 style={{ marginLeft: "40%" }}>Set Filter from here !</h1>
        <p
          style={{
            fontSize: 15,
            fontWeight: "bold",
            color: "#042940",
            textAlign: "center",
          }}
        >
          New Invoice Batch
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
            <Grid item xs="2.87">
              <Box>
                <FormControl fullWidth>
                  <InputLabel>Service Giver</InputLabel>
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
                  <InputLabel>Discipline</InputLabel>
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
            <Grid item xs="2.87">
              <Box>
                <FormControl fullWidth>
                  <InputLabel>Member Team</InputLabel>
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
                label="Member"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </div>
        <Button
          className="searchButton"
          variant="outlined"
          onClick={handleCloseOverlay4}
        >
          Search
        </Button>
      </div>
    );
  }

  function RenderViews() {
    switch (ViewSelected) {
      case 1:
        return PreBillingReviewView();
      case 2:
        return BillingReviewView();
      case 4:
        return NewInvoiceBatchView();
      case 5:
        return VisitLogView();

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

  const VisitLogView = () => {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th className="th">First Name</th>
              <th className="th">Last Name</th>
              <th className="th">Care Giver Code</th>
              <th className="th">Care Giver Name</th>
              <th className="th">Team Member</th>
              <th className="th">Assigment ID</th>
              <th className="th">Admission ID</th>

              <th className="th">Cordinator</th>

              <th className="th">From Date</th>
              <th className="th">Till Date</th>
            </tr>
          </thead>
          <tbody>
            {jsonData.map((data, i) => (
              <tr>
                <td className="td">Member ID</td>
                <td className="td">Admission ID</td>
                <td className="td">Care Giver IN</td>
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

  const NewInvoiceBatchView = () => {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th className="th">MCO</th>
              <th className="th">Service Giver</th>
              <th className="th">Discipline</th>
              <th className="th">From Date</th>
              <th className="th">To Date</th>
              <th className="th">Member Team</th>
              <th className="th">Member</th>
            </tr>
          </thead>
          <tbody>
            {jsonData.map((data, i) => (
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

      ///
    );
  };

  const PreBillingReviewView = () => {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th className="th">Member Name</th>
              <th className="th">Admission ID</th>
              <th className="th">Care Giver Code</th>
              <th className="th">Care Giver Name</th>
              <th className="th">Member Team</th>
              <th className="th">MCO</th>
              <th className="th">Cordinator</th>
              <th className="th">From Date</th>
              <th className="th">To Date</th>
              <th className="th">Problem</th>
            </tr>
          </thead>
          <tbody>
            {jsonData.map((data, i) => (
              <tr>
                <td className="td">Member ID</td>
                <td className="td">Admission ID</td>
                <td className="td">Care Giver IN</td>
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

      ///
    );
  };
  const BillingReviewView = () => {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th className="th">By Group MCO</th>
              <th className="th">MCO</th>
              <th className="th">Member Team</th>
              <th className="th">Cordinator</th>
              <th className="th">Hold Reason</th>
              <th className="th">Member First Name</th>
              <th className="th">Member Last Name</th>
              <th className="th">Visit From Date</th>
              <th className="th">Visit To Date</th>
              <th className="th">Batch Number</th>
              <th className="th">Invoice Number</th>
              <th className="th">Invoice From Date</th>
              <th className="th">Invoice Till Date</th>
              <th className="th">Service Code</th>
            </tr>
          </thead>
          <tbody>
            {jsonData.map((data, i) => (
              <tr>
                <td className="td">Member ID</td>
                <td className="td">Admission ID</td>
                <td className="td">Care Giver IN</td>
                <td className="td">Member ID</td>
                <td className="td">Admission ID</td>
                <td className="td">Care Giver IN</td>
                <td className="td">Member ID</td>
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

      ///
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
                PreBillingReviewPressed();
              }}
            >
              <p
                style={{
                  fontSize: "15px",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Pre Billing Review
              </p>
            </Button>
            <Button onClick={BillingReviewPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Billing Review
              </p>
            </Button>

            <Button onClick={InvoiceSearchPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Invoice Search
              </p>
            </Button>
            <Button
              onClick={NewInvoiceBatchPressed}
              className="navigationButton"
            >
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                New Invoice Batch
              </p>
            </Button>
            <Button
              onClick={ElectronicBillingPressed}
              className="navigationButton"
            >
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Electronic Billing
              </p>
            </Button>
          </div>
        </Card>

        <Card className="dataDisplay">
          <SearchIcon className="searchIcon" onClick={handleClickIcon} />
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
export default Billing;

const Wrapper = styled.section`
  height: 100%;
  width: 100%;

  .CardHolder {
    display: flex;
    flex-direction: row;
  }
  .table {
    border-collapse: collapse;
    padding: 1%;
    width: 100%;
    background-color: #0b2b40;
  }

  .th {
    border: 1px solid #aaaaaa;
    text-align: center;
    font-size: 17px;
    color: white;
  }
  .td {
    border: 1px solid #aaaaaa;
    text-align: center;
    color: white;
    font-size: 16px;
  }

  //
  .item1 {
    font-size: 15px;
    color: white;
    font-weight: bold;
    text-align: center;
    margin: 0.5%;
  }
  //List Items

  // overlay css end
  .overlay {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 75%;
    height: 75%;
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
    height: 75%;
    z-index: 1000;
    background-color: white;
    padding: 1%;
  }
  .overlay3 {
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
  .overlay4 {
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
  .overlay5 {
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
  .overlay6 {
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
