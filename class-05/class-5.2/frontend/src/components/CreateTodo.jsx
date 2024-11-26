import { useState } from "react";
export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div>
      <input
        style={{ padding: 10, margin: 10 }}
        onChange={function (e) {
          const value = e.target.value;
          setTitle(value);
        }}
        type="text"
        placeholder="title"
      />
      <br />
      <br />
      <input
        style={{ padding: 10, margin: 10 }}
        onChange={function (e) {
          const val = e.target.value;
          setDescription(val);
        }}
        type="text"
        placeholder="description"
      />
      <br />
      <br />
      <button
        style={{ padding: 10, margin: 10 }}
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              "Content-type": "application/json",
            },
          }).then(async function (res) {
            const json = await res.json();
            alert("Todo added");
          });
        }}
      >
        Add a Todo
      </button>
    </div>
  );
}
