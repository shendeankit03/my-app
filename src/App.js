
import React, { useState } from 'react'
import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Switch,
//   useLocation
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#212529eb';
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
    }
  }

  return (
    <>
      {/* <Navbar title="my-app" aboutText="About myapp"/> */}
      {/* <Navbar/> */}
//       <Router>
        <Navbar title="my-app" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-2">
//           <Routes>
//           <Route exact path='/about' element={<About/>} />
            {/* <Route path="/about">
              <About />
            </Route> */}
//             <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter the text" mode={mode} />} />
               <TextForm showAlert={showAlert} heading="Enter the text" mode={mode} />
//           </Routes>

        </div>
//       </Router>
    </>
  );
}

export default App;
