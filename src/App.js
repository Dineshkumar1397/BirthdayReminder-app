import React from "react";
import Home from "./components/Home";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Empdetails from "./components/Empdetails";
import Empbirthday from "./components/Empbirthday";
import Error from "./components/Error";


const App = () => {
  return (
    <Router>
      <Routes >
        <Route path="/" element={<Home/>} exact/>
        <Route path="/empdetails" element={<Empdetails/>} exact/>
        <Route path="/empbirthday" element={<Empbirthday/>} exact/>
        <Route path="*" element={<Error/>} />
      </Routes>
    </Router>
  );
};

export default App;
