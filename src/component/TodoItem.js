import { useDispatch } from "react-redux";
import { deleteTodo,updateTodo } from "../redux/action";


const TodoItem =({todo}) => {
const dispatch =useDispatch()
const deleteHandler =() =>{
dispatch(deleteTodo(todo.id))


}
    return(
        <div>
            <h3>{todo.name}</h3>
            <button onClick={deleteHandler}>Delete</button>
            <button>Edit</button>
        </div>
    )
};
export default TodoItem;