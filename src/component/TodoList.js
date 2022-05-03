import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";



const TodoList= () => {

    const todos = useSelector((state) => state.todos);
    return <div>
        {todos.map(todo =>{
            return < TodoItem todo ={todo}/>
        }
            )}

    
      </div>
    
  };
  export default TodoList; 