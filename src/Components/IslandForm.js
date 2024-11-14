import { useState } from 'react';
export default function IslandForm({ island, setVisitors}) {
  
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(0);
  
  const handleOnClick = () => 
    {
      if (name && phone && window.confirm("Are you going to visit"))
      {
      island.visitors += 1;
      setVisitors(island.visitors)
      }
    }
      
  return (
    <div className="form">
      <h2>{island.name}</h2>
      <img src={island.img} alt={island.name} />
      <h3>Book a trip to {island.name} island</h3>
      <input placeholder="Type Full Name" type = "text" onChange={(e) => setName(e.target.value)}/>
      <input placeholder="Type Phone Number" type = "number"  onChange={(e) => setPhone(e.target.value)} />
      <button className="book" onClick={handleOnClick}>
        Book for today!
      </button>
    </div>
  );
}
