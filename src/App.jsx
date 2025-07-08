import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import TextForm from './components/TextForm';
import About from './components/About';
import Demo from './components/demo';


function App() {
  const [mode, setMode] = useState('white');

  const togglemode = () => {
    if (mode === 'white') {
      setMode('black');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    } else {
      setMode('white');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }

  return (
    <Router>
      <div className='h-screen overflow-hidden'>
        <Nav name="Utils" title="Text" mode={mode} togglemode={togglemode} />
        <div className="container">
          <Routes>
            <Route path="/" element={<TextForm mode={mode} />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Demo/>}/>
          </Routes> 
        </div>
      </div>
    </Router>
  );
}

export default App;
