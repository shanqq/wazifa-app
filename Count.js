import React from "react";
import { useState } from "react";
//import {useEffect} from 'react'
import "./App.css";
function Count(props) {
  const [Count, setCount] = useState(props.Count);

  const decrement_count = () => {
    if (Count > 1) {
      setCount(Count - 1);
    } else {
      setCount(0);

      alert("You have done the things for today");
    }
  };

  return (
    <button className="Count_button" onClick={decrement_count}>
      {Count}
    </button>
  );
}

export default Count;
