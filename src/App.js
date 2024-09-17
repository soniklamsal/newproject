import './App.css'; 
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('success');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  let pickColor = () => {
    if (mode === 'success') {
      setMode('dark');
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('success');
      showAlert("Light mode has been enabled", "success"); // Changed the message for light mode
    }
    document.title = 'TextUtils - Colorpicker'
  };

  return (
    <>
      <NavBar title="TextUtils" aboutText="About TextUtils" mode={mode} />
      <Alert alert={alert} />
      {/* <button className='btn btn-primary' onClick={pickColor}>Click here</button> */}
      {/* <TextForm /> */}
      <Routes>
        <Route exact path="/textform" element={<TextForm />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/textform" element={<TextForm />} />
        <Route exact path="/navbar" element={<NavBar title="TextUtils" aboutText="About TextUtils" mode={mode} />} />
      </Routes>
    </>
  );
}

export default App;
