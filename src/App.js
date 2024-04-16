import React from 'react';
import Component from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StartUse from "./pages/StartUse";
import ResultScore from "./pages/ResultScore";
import logo from './resource/checked.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return(
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/start-use" element={<StartUse />} />
          <Route path="/results" element={<ResultScore />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
