import React, { useState } from "react";
import SolarSystem from "./components/SolarSystem";
import UIControls from "./components/UIControls";
import "./App.css";

const App = () => {
  const [planetConfig, setPlanetConfig] = useState({});

  return (
    <div className="app">
      <UIControls onChange={setPlanetConfig} />
      <SolarSystem planetConfig={planetConfig} />
    </div>
  );
};

export default App;
