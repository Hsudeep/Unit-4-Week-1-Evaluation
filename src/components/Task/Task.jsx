import React from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter";
const Task = ({props}) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div>
      {props.tasks.map((element)=>(
        <li data-cy="task" className={styles.task}>
        <input type="checkbox" data-cy="task-checkbox" />
        <div data-cy="task-text">{element.text}</div>
        {/* Counter here */
          <Counter todo={element.count}></Counter>
        }
        <button data-cy="task-remove-button">X</button>
        </li>
      ))}
      
    </div>
    
  );
};

export default Task;
