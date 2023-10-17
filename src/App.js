import { useStore } from "./store/hooks";
import { setTodoInput,addTodoInput } from "./store/actions";

function App() {
  const [state, dispatch] = useStore()
  const {todos, todoInput} = state
  const handleAdd = () => {
    dispatch(addTodoInput(todoInput))
    setTodoInput("")
  }
  console.log(todos);
  return (
    <div className="App">
      <input 
        value={todoInput}
        placeholder="Enter todo..."
        onChange={e => {
          dispatch(setTodoInput(e.target.value))
        }}
      />
      {
        todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))
      }
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default App;
