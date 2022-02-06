import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushi, handleMoreSushi, remainingMoney, setRemainingMoney, setPlates, plates }) {
  return (
    <div className="belt">
      {sushi.map(sush => (
        <Sushi  key={sush.id} plates={plates} setPlates={setPlates} setRemainingMoney={setRemainingMoney} remainingMoney={remainingMoney} name={sush.name} image={sush.img_url} price={sush.price} />
      ))}
      <MoreButton handleMoreSushi={handleMoreSushi} />
    </div>
  );
}

export default SushiContainer;
