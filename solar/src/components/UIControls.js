// import React, { useState } from 'react';
// import { saveConfiguration, loadConfigurations } from '../services/api';
// import SolarSystem from './SolarSystem';

// const UIControls = () => {
//     const [planetProperties, setPlanetProperties] = useState({
//         Mercury: { size: 0.4, speed: 1.2, orbitDistance: 10 },
//         Venus: { size: 0.8, speed: 0.8, orbitDistance: 20 },
//         Earth: { size: 1, speed: 1, orbitDistance: 30 },
//     });

//     const handleChange = (planet, property, value) => {
//         setPlanetProperties((prev) => ({
//             ...prev,
//             [planet]: { ...prev[planet], [property]: parseFloat(value) },
//         }));
//     };

//     const handleSave = async () => {
//         await saveConfiguration(planetProperties);
//         alert('Configuration saved!');
//     };

//     const handleLoad = async () => {
//         const configurations = await loadConfigurations();
//         if (configurations.length > 0) {
//             setPlanetProperties(configurations[0].config);
//         }
//     };

//     return (
//         <div>
//             <SolarSystem planetProperties={planetProperties} />

//             <div>
//                 {Object.keys(planetProperties).map((planet) => (
//                     <div key={planet}>
//                         <h3>{planet}</h3>
//                         <label>Size:</label>
//                         <input
//                             type="range"
//                             min="0.1"
//                             max="2"
//                             step="0.1"
//                             value={planetProperties[planet].size}
//                             onChange={(e) => handleChange(planet, 'size', e.target.value)}
//                         />
//                         <label>Speed:</label>
//                         <input
//                             type="range"
//                             min="0.1"
//                             max="5"
//                             step="0.1"
//                             value={planetProperties[planet].speed}
//                             onChange={(e) => handleChange(planet, 'speed', e.target.value)}
//                         />
//                         <label>Orbit Distance:</label>
//                         <input
//                             type="range"
//                             min="5"
//                             max="50"
//                             step="1"
//                             value={planetProperties[planet].orbitDistance}
//                             onChange={(e) => handleChange(planet, 'orbitDistance', e.target.value)}
//                         />
//                     </div>
//                 ))}
//             </div>

//             <button onClick={handleSave}>Save Configuration</button>
//             <button onClick={handleLoad}>Load Configuration</button>
//         </div>
//     );
// };

// export default UIControls;


import React, { useState } from "react";

const UIControls = ({ onChange }) => {
  const [config, setConfig] = useState({});

  const handleUpdate = (planet, key, value) => {
    setConfig((prev) => {
      const updatedConfig = { ...prev, [planet]: { ...prev[planet], [key]: value } };
      onChange(updatedConfig);
      return updatedConfig;
    });
  };

  return (
    <div className="controls">
      {Object.keys(config).map((planet) => (
        <div key={planet} className="planet-controls">
          <h3>{planet}</h3>
          <label>Size:</label>
          <input
            type="range"
            min="0.1"
            max="2"
            step="0.01"
            onChange={(e) => handleUpdate(planet, "size", parseFloat(e.target.value))}
          />
          <label>Speed:</label>
          <input
            type="range"
            min="0.01"
            max="0.5"
            step="0.01"
            onChange={(e) => handleUpdate(planet, "speed", parseFloat(e.target.value))}
          />
          <label>Distance:</label>
          <input
            type="range"
            min="5"
            max="50"
            step="1"
            onChange={(e) => handleUpdate(planet, "distance", parseFloat(e.target.value))}
          />
        </div>
      ))}
    </div>
  );
};

export default UIControls;
