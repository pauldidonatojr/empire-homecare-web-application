import { Routes, Route } from "react-router-dom";
import Login from './Login';
import React from 'react'
import AdminHomePage from './Admin/homepage'
import CareGiverHomePage from './CareGiver/homepage'
import PatientHomePage from './Patient/homepage'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/AdminHome" element={<AdminHomePage />}></Route>
      <Route path="/CareGiverHome" element={<CareGiverHomePage />}></Route>
      <Route path="/PatientHome" element={<PatientHomePage />}></Route>
    </Routes>

  );
};

export default App;
