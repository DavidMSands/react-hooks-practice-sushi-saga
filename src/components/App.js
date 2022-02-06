import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushi, setSushi] = useState([])
  const [sushiIds, setSushiIds] = useState([1,2,3,4])
  const [remainingMoney, setRemainingMoney] = useState(100)
  const [plates, setPlates] = useState([])

  
  

  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(data => {
      const currentSushi = data.filter(sushi => sushi.id === sushiIds[0] || sushi.id === sushiIds[1] || sushi.id === sushiIds[2] || sushi.id === sushiIds[3])
      setSushi(currentSushi)
      console.log(currentSushi)
      
    })
  }, [sushiIds])

  function handleMoreSushi() {
    const updatedIds = [...sushiIds];
    updatedIds.push(sushiIds[3] + 1, sushiIds[3] + 2, sushiIds[3] + 3, sushiIds[3] + 4)
    updatedIds.splice(0,4)
    console.log(updatedIds)
    setSushiIds(updatedIds)
  }

  console.log(plates)

  

  return (
    <div className="app">
      <SushiContainer setPlates={setPlates} plates={plates} setRemainingMoney={setRemainingMoney} remainingMoney={remainingMoney} handleMoreSushi={handleMoreSushi} sushi={sushi} />
      <Table plates={plates} remainingMoney={remainingMoney} />
    </div>
  );
}

export default App;
