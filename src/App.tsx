import React from "react";
import { Canvas } from "react-three-fiber";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Canvas>
        <mesh>
          <boxGeometry></boxGeometry>
          <meshBasicMaterial />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
