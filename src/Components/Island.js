import React from "react";
import { useState } from 'react'

export default function Island({ island, HandleSelectedIsland }) {
  const onHandleClick = () => HandleSelectedIsland(island)  
  
  return (
    <div className="Island" onClick={onHandleClick}>
      <h3>{island.name}</h3>
      {island.visitors}
      <p>Visitors {island.visitors}</p>
      <img src={island.img} alt={island.name} />
    </div>
  );
}
