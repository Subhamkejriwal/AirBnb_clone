import React from 'react';
import Navbar from './component/Navbar';
import Login from './component/Login';
import Registration from './component/Registration';
import Requirement from "./component/Requirement";
import Homepage from './component/Homepage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Registration" element={<Registration/>} />
        <Route path="/Requirement" element={<Requirement/>} />
      </Routes>
    </Router>
  );
}

export default App;