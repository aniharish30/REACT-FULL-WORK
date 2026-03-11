import React from "react";
import ComponentC from "./ComponentC";

const ComponentB = ({ setDataa, display }) => {
  return (
    <div>
      <h2>Component B </h2>
      <button onClick={() => setDataa("Revamp B - 25")}>Change in B</button>
      <ComponentC dataA={display} />
    </div>
  );
};

export default ComponentB;
