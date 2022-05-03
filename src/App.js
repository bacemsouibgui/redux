import "./styles.css";
import TodoInput from "./component/TodoInput";
import TodoList from "./component/TodoList";

function App() {
  return(
    <div className="App">
      <div>
        <h2>My Todo List</h2>
        
        
      </div>
      <TodoInput />
      <TodoList />
    </div>
  );
}
 export default App;