import React, { useState } from 'react';
import './App.css';
import myJsonData from "./waste.json";
import axios from 'axios';


export function App(props) {
  const [count, setCount] = useState(0);

  const decrementCount = () => {
    if (count > 0) setCount(count - 1);
  };

  const incrementCount = () => {
    setCount(count + 1);
  };


  return (
    <div>
      <h2>{props.headerText}</h2>
      <button onClick={decrementCount}>-</button>
        <input
          type="number"
          name="clicks"
          value={count}
          onChange={(event) => {
            const value = Number(event.target.value);
            setCount(value);
          }}
	className="input-field"
        />

      <button onClick={incrementCount}>+</button>
    </div>
  );
}

export default function Buttons(){
  const headerList = myJsonData.waste;  

  return (
    <div>
        {headerList.map((header, index) => (
        <App key={index} headerText={header}/>
      ))}
    </div>
  );
}
