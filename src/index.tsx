import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";

import "./styles/tailwind.css";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={ <App /> } />
    </Routes>
   </BrowserRouter>,
  document.getElementById("root") as HTMLElement
);
