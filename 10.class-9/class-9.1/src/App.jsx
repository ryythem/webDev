import React, { useEffect, useState } from "react";
import axios from "axios";

function useTodos(n) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getData() {
    const res = await axios.get("http://localhost:8080/todos");
    setTodos(res.data.todos);
    setLoading(false);
  }

  useEffect(() => {
    getData();
    const value = setInterval(() => {
      getData();
    }, n * 1000);
    return () => {
      clearInterval(value);
    };
  }, [n]);

  return { todos, loading };
}

function App() {
  const { todos, loading } = useTodos(5);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {todos.map((todo) => {
        return <Track todo={todo} />;
      })}
    </>
  );
}

function Track({ todo }) {
  return (
    <>
      <div>{todo.title}</div> <br />
      <div>{todo.description}</div>
    </>
  );
}

export default App;
