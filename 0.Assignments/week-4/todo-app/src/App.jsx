import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  function addTodos() {
    setTodos([...todos, { title, description }]);
    setTitle("");
    setDescription("");
  }
  return (
    <div>
      <input
        type="text"
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
      />{" "}
      <br />
      <br />
      <input
        type="text"
        placeholder="description"
        onChange={(e) => setDescription(e.target.value)}
      />{" "}
      <br />
      <br />
      <button onClick={addTodos}>Add todo</button>
      <br />
      <br />
      <div>Todos</div>
      {todos.map((todo, index) => {
        return (
          <p key={index}>
            {todo.title} {todo.description}
          </p>
        );
      })}
    </div>
  );
}

export default App;
