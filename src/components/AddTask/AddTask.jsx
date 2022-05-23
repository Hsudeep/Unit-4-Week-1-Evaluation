import React, {useState} from "react";
import styles from "./addTask.module.css";

const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair
  const [inputData,setinputData] = useState("")
  const [inlist,setinlist] =useState([])
  
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" placeholder="Enter your text" value={inputData} onChange={(e)=>setinputData(e.target.value)}/>
      <button data-cy="add-task-button" 
      onClick={()=>{
        setinlist([...inlist,{
          "id": 5,
          "text": inputData,
          "done": false,
        }])
        setinputData("")
      }}
      >+</button>
    </div>
  );
};

export default AddTask;
