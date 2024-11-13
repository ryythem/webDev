import React, { useEffect, useState } from "react";
function App() {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    async function fetchTodo() {
      fetch("http://localhost:3000/todos").then(async (res) => {
        const json = await res.json();
        setTodo(json.todos);
      });
    }
    setInterval(fetchTodo, 1000);
  }, []);
  return (
    <div>
      {todo.map((todo) => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </div>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </div>
  );
}

export default App;
