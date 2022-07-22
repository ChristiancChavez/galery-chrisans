import React from "react";
import "./App.css";
import TableGalery from "./components/atoms/Table.tsx";

function App() {
  const items = [
    { value: "Sagrado corazón", itemId: 5, name: "Sagrado corazón" },
    { value: "misericordioso", itemId: 3, name: "misericordioso" },
    { value: "Sagrada familia", itemId: 4, name: "Sagrada familia" },
    { value: "Guadalupe", itemId: 8, name: "Guadalupe" },
  ];
  return (
    <div className="App">
      <h2>Christian</h2>
      <TableGalery />
    </div>
  );
}

export default App;
