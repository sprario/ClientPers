import React from "react";
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login'

import "./styles/index.css";

const App = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/create-account" element={<Login/>} /> */}
          {/* <Route path="/forgot-password" element={} /> */}

          {/* Place new routes over this */}
          {/* <Route path="/app" component={Layout} /> */}
        </Routes>
    </>
  );
};

export default App;
