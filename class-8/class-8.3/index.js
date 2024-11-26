const axios = require("axios");

const { response } = require("express");

async function main() {
  const res = await fetch("http://localhost:8080/todos");
  const json = await res.json();
  console.log(json.todos);
}

async function main1() {
  const res = await axios.get("http://localhost:8080/todos");
  console.log(res.data.todos);
}

async function main2() {
  const res = await axios.post(
    "https://httpdump.app/dumps/16a74341-a678-4df9-87a6-cf7265bdae5c",
    {
      username: "rythem",
      password: "gibberish",
    },
    {
      headers: {
        Authorization: "Bearer gibberish",
      },
    }
  );
  console.log(res.data);
}

main();
