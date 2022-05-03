import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/action";
import { v1 as uuid } from "uuid";





const TodoInput= () => {
const dispatch = useDispatch()
    
    const [name,setName] = useState();
    const addHandler =() => {
        dispatch(addTodo({id: uuid(),name: name}));

    }
    return(
      <div>
        <input type="text"
        onChange={(e) =>setName(e.target.value)}
         />
        <button onClick={addHandler}>Add</button>
      </div>
    )
  };
  export default TodoInput;