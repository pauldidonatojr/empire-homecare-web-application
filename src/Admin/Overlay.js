import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Backdrop from "@mui/material/Backdrop";
import CloseIcon from "@mui/icons-material/Close";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Overlay(props) {
  
  const { handleClose5 } = props;

  const [open, setOpen] = React.useState(true);
  const handleCloseOverlay = () => {
    handleClose5();
  };
  return (
    <Wrapper>
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
    >
      <div className="CustomOverlay">
        <CloseIcon className="crossIcon" onClick={handleCloseOverlay} />
        <h1 style={{ textAlign: "center", color: "black" }}>
          Set Filter from here !
        </h1>
        <p
          style={{
            fontSize: 15,
            fontWeight: "bold",
            color: "#042940",
            textAlign: "center",
          }}
        >
          Custom Overlay
        </p>
        <div className="searchFieldsDivCustom">
          <Grid className="griditem">
            <TextField id="memberID" label="Member ID" variant="outlined" />
          </Grid>
          <Grid className="griditem">
            <TextField
              id="admissionID"
              label="Admission ID"
              variant="outlined"
            />
          </Grid>

          <Grid className="griditem">
            <TextField id="name" label="Name" variant="outlined" />
          </Grid>

          <Grid className="griditem">
            <TextField id="phone" label="Phone Number" variant="outlined" />
          </Grid>
        </div>
        <Button
          className="searchButton"
          variant="outlined"
         
        >
          Search
        </Button>
      </div>
    </Backdrop>
    </Wrapper>
  );
}
export default Overlay;
const Wrapper = styled.section`
  
  .CustomOverlay {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 75%;
    height: 70%;

    background-color: white;
    background-color:white;
    padding: 1%;
   
  }
  .searchFieldsDivCustom {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* create 3 equal columns */
    grid-gap: 10px; /* add some space between the columns */
    margin-top: 2.5%;
    width: 85%;
    margin-left: 10%;
  }
  @media only screen and (max-width: 600px) {
      
    .searchFieldsDivCustom {
      grid-template-columns: repeat(1, 1fr); /* create 3 equal columns */
    }
   
   
`;
