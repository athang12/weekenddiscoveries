import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import LandingPage from './LandingPage'
import InterestsPg from './InterestsPg'
import Signup from './Signup'
import Tq from './Tq'


function App() {
  return (
    <div className="App">
    <Router>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/interests" element={<InterestsPg/>}/>
      <Route path="/thankyou" element={<Tq/>}/>
    </Routes>
  </Router>
    </div>
  );
}

export default App;
