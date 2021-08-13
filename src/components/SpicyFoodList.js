import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);


  function handleAddFood() {
    const newFood = getNewSpicyFood();
    console.log(newFood);
    setFoods((foods)=> [...foods, newFood]) 
  }

  function handleClick(id){
    const filteredFoods = foods.map((food)=> {
      if(food.id !== id){
        return food
      }else{
      return {...food, heatLevel: food.heatLevel+1}
      }})
    setFoods(filteredFoods)
  }

  const foodList = foods.map((food) => (
    <li key={food.id} onClick={()=>handleClick(food.id)}>
        {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
        </li>
  ))

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
