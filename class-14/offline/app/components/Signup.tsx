"use client";
import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="p-10 border rounded pb-4">
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="p-2 m-2"
            type="text"
            placeholder="username"
          />{" "}
          <br />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="p-2 m-2"
            type="text"
            placeholder="password"
          />{" "}
          <br />
          <div className="mt-5 flex justify-center ">
            <button
              onClick={() => {
                axios.post("http://localhost:3000/api/user", {
                  email,
                  password,
                });
              }}
            >
              Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
