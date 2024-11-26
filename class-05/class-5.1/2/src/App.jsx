import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Go to gym",
      description: "Go to gym from 7-9",
      completed: false,
    },
    {
      title: "Study DSA",
      description: "Study DSA from 9-11",
      completed: true,
    },
  ]);
  function addTodo() {
    setTodos([
      ...todos,
      {
        title: "new Todo",
        description: "new description ",
      },
    ]);
  }
  return (
    <>
      <button onClick={addTodo}>Add a random todo</button>
      {todos.map((todo) => {
        return <Todo title={todo.title} description={todo.description}></Todo>;
      })}
    </>
  );
}

function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  );
}

export default App;
