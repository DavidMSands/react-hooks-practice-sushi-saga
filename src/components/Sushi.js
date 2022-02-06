import React, {useState} from "react";
const empytPlates = []

function Sushi({image, price, name, id, setRemainingMoney, remainingMoney, setPlates, plates}) {
  const [isEaten, setIsEaten] = useState(false)
  

  function handleIsEaten(price) {
    
    if(remainingMoney - price >= 0){
    if(isEaten === false){
    setIsEaten(isEaten => !isEaten)
    setRemainingMoney(remainingMoney => remainingMoney - price)
    empytPlates.push(1)
    setPlates(empytPlates)
      console.log(empytPlates)
    }
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={() => handleIsEaten(price)}>
        {isEaten ? null : (
          <img
            src={image}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
