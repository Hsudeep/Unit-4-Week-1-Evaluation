import React, {useState}from "react";
import styles from "./counter.module.css";

const Counter = (props) => {
  // sample value to be replaced
  // NOTE: do not delete `data-cy` key value pair
  let [counter,setCounter] = useState(props)
 
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={()=>setCounter(counter+1)}> +</button>
      <span data-cy="task-counter-value">{counter}</span>
      <button data-cy="task-counter-decrement-button" onClick={()=>(counter>1 ? setCounter(counter-1):"" )}>-</button>
    </div>
  );
};

export default Counter;
