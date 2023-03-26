import { Routes, Route } from "react-router-dom";
import Login from './Login';
import React from 'react'
import AdminHomePage from './Admin/homepage'
import CareGiverHomePage from './CareGiver/Homepage'
import PatientHomePage from './Patient/homepage'
import VisitDetails from './CareGiver/VisitDetails'
import PatientDetails from "./CareGiver/PatientDetails";
import CareGiver  from "./Admin/CareGiver";
import Visits from "./Admin/Visit/Visit";
import Action from './Admin/Action/Action';
import Billing from './Admin/Billing/Billing';
import Report from "./Admin/Report/Report";
import Admin from "./Admin/Admin/Admin";
import CallDashBoard from "./Admin/Visit/CallDashBoard";
import PendingQueuePlacement from "./Admin/Action/PendingQueuePlacement";
import InvoiceSearch from "./Admin/Billing/InvoiceSearch"
import ElectronicBilling from "./Admin/Billing/ElectronicBilling"
import BillingReport from "./Admin/Report/Billing";
import EVVException from "./Admin/Report/EVVException";
import UserManagement from "./Admin/Admin/UserManagement";
import CordinatorSetup from "./Admin/Admin/CordinatorSetup";
import FileProcessing from "./Admin/Admin/FileProcessing";
import EDIImports from "./Admin/Admin/EDIImports"

function App() {
  return (
    <Routes>

      <Route path="/" element={<Login />} />
      <Route path="/AdminHome" element={<AdminHomePage />}></Route>
      <Route path="/CareGiverHome" element={<CareGiverHomePage />}></Route>
      <Route path="/PatientHome" element={<PatientHomePage />}></Route>
      <Route path="/visitdetails/:id" element={<VisitDetails />}></Route> 
      <Route path="/patientdetails/:id" element={<PatientDetails />}></Route>
      <Route path="/CareGiver" element={<CareGiver />}></Route> 
      <Route path="/Visit" element={<Visits />}></Route> 
      <Route path="/Action" element={<Action />}></Route> 
      <Route path="/Billing" element={<Billing />}></Route> 
      <Route path="/Report" element={<Report />}></Route> 
      <Route path="/Admin" element={<Admin />}></Route> 
      <Route path="/CallDashBoard" element={<CallDashBoard />}></Route>
      <Route path="/PendingQueuePlacement" element={<PendingQueuePlacement />}></Route> 
      <Route path="/InvoiceSearch" element={<InvoiceSearch />}></Route>
      <Route path="/ElectronicBilling" element={<ElectronicBilling />}></Route>
      <Route path="/BillingReport" element={<BillingReport />}></Route>
      <Route path="/EVVException" element={<EVVException />}></Route>
      <Route path="/UserManagement" element={<UserManagement />}></Route>
      <Route path="/CordinatorSetup" element={<CordinatorSetup />}></Route>
      <Route path="/FileProcessing" element={<FileProcessing />}></Route>
      <Route path="/EDIImports" element={<EDIImports />}></Route>
      
    </Routes>

  );
};

export default App;
