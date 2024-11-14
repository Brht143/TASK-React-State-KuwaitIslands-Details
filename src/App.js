import { useState } from "react";
import './App.css';
import Header from './Components/Header';
import IslandForm from './Components/IslandForm';
import IslandList from './Components/IslandList';


function App() {

  let island = {
    name: "Boubyan",
    img: "http://photos.wikimapia.org/p/00/02/20/48/92_big.jpg",
    visitors: 0
  }

  const [selectedIsland, setSelectedIsland] = useState(island);
  
  const [visitors, setVisitors] = useState(selectedIsland.visitors);

  console.log(`New visitor for ${selectedIsland.name}, total: ${visitors}`)
  
  return (

    <div>
      <Header />

      <div className="homePage">
        <IslandList handleSelected ={setSelectedIsland}/>
        <IslandForm island={selectedIsland} setVisitors={setVisitors} />
      </div>
    </div>
  );
}

export default App;
