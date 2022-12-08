import React from "react";
import AppContainer from './containers/core/AppContainer'
import { initMSW } from "./mocks/browser";

import "./styles/index.css";

initMSW();

const App = () => {
  
  return (
      <AppContainer />
  );
};

export default App;
