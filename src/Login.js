import styled from "styled-components";
import { Text } from "react";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { loginUser } from "./APIs/authAPI";

function Login() {
  const navigate = useNavigate();
  const [selectedRadio, setSelectedRadio] = useState("");
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  
  const handleSignIn = (selectedRadio) => {
    switch (selectedRadio) {
      case "Admin":
        //NAVIGATE TO ADMIN HOMEPAGE
        if (username != null && password != null) {
          loginUser(username, password).then(res => {
            
            if (res.data.result == "success") {
              navigate("/AdminHome");
            }
          });
        }
        break;
      case "CareGiver":
        //NAVIGATE TO CAREGIVER HOMEPAGE
        navigate("/CareGiverHome");
        break;
      case "Patient":
        //NAVIGATE TO PATIENT HOMEPAGE
        navigate("/PatientHome");
        break;
      default:
        break;
    }
  };

  const handleUsername = event => {
    setUsername(event.target.value);
  };


  const handlePassword = event => {
    setPassword(event.target.value);
  };

  return (
    <Wrapper>
      <Card className="ImageCard">
        <div className="LogoImageHolder">
          <img className="logo" src="./EmpireHomeCareLogo.png" alt="logoImageHere"></img>
        </div>
      </Card>
      <div className="cardHolder">
        <Card className="DesignCard">
          <h1 style={{ color: "white" }}>
            Purpose-Built Technology for Providers, MCOs, and State Medicaid
            Programs
          </h1>
          <div className="subText">
            <h4 style={{ color: "white" }}>
              Enable proactive homecare and better health outcomes.
            </h4>
          </div>
        </Card>
        <Card className="loginCard">
          <div>
            <h1 style={{ fontSize: "35px" }}>SIGN IN</h1>
          </div>
          <div className="radioHolder">
            <div className="radioTextHolder" >
              <input
                className="radio"
                type="radio"
                value="Admin"
                name="LoginType"
                onChange={(e) => setSelectedRadio(e.target.value)}
              />{" "}
              <h5 style={{ color: "#16232E", fontSize: "15px", marginLeft: "15%" }}>Admin</h5>
            </div>

            <div className="radioTextHolder">
              <input
                className="radio"
                type="radio"
                value="CareGiver"
                name="LoginType"
                onChange={(e) => setSelectedRadio(e.target.value)}
              />{" "}
              <h5 style={{ color: "#16232E", fontSize: "15px", marginLeft: "10%" }}>CareGiver</h5>
            </div>
            <div className="radioTextHolder">
              <input
                className="radio"
                type="radio"
                value="Patient"
                name="LoginType"
                onChange={(e) => setSelectedRadio(e.target.value)}
              />{" "}
              <h5 style={{ color: "#16232E", fontSize: "15px", marginLeft: "10%" }}>Patient</h5>
            </div>
          </div>

          <TextField
            id="standard-search"
            label="Username"
            type="search"
            variant="standard"
            className="usernameText"
            onChange={handleUsername}
          />
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
            className="PasswordText"
            onChange={handlePassword}
          />
          <Button className="signInButton" variant="outlined"
            onClick={() => handleSignIn(selectedRadio)}>
            Sign In
          </Button>
        </Card>
      </div>
    </Wrapper>
  );
};


const Wrapper = styled.section`
  height: 100vh;
  width: 100%;
  background-color: '#8ea3bf';
  
  .radioTextHolder{
    
      flex-direction:row;
      padding:1;
      width:120px;
      display:flex;
      height:100%;
      border-radius:15px;
      margin-right:1%;

  }


  .logo {
    height: 5%;
    width: 5%;
    margin-left:1%;
  }
  .ImageCard{
    background-color:#2E0F59;
  }

  .loginCard {
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    height: 350px;
    width: 30%;
    background-color: #f2f2f2;
    margin-top: 5%;
    padding: 3%;
    box-shadow: -1px 4px 19px 5px rgba(0, 0, 0, 0.43);
  }
  .radioHolder {
    display: flex;
    flex-direction: row;
    border-width: thin;
  }
  .radio{
    margin-top:5%;
  }
  .cardHolder {
    display: flex;
    flex-direction: row;
  }
  .subText {
    margin-top: 30%;
  }
  .usernameText {
    width:40%;
  }
  .PasswordText {
    margin-top: 2%;
    width:40%;
  }
  .signInButton {
    margin-top: 10%;
    background-color:#F26E22;
    color:white;
  }

  .DesignCard {
    background-color: #2a558c;
    height: 350px;
    width: 20%;
    margin-top: 5%;
    padding: 3%;
    margin-left: 18%;
    margin-right: 0.2%;
    box-shadow: -1px 4px 19px 5px rgba(0, 0, 0, 0.43);
  }
  @media only screen and (max-width: 600px) {
    .cardHolder {
        flex-direction: column;
      }
    .DesignCard{
        
        width:90%;
        margin-left:2%;
        height:200px;
    }
    .subText {
        margin-top: 10%;
      }
    .loginCard{
        width:90%;
        margin-left:2%;
        height:550px;
        margin-bottom:10%;
    }
    .logo {
        height: 40%;
        width: 40%;
      }
  }

`

export default Login;