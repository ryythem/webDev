import axios from "axios";
async function fetchData() {
  const response = axios.get("http://localhost:3000/api/user");
  console.log("Response is : " + JSON.stringify((await response).data));
  return (await response).data;
}
export default async function User() {
  const data = await fetchData();
  return (
    <>
      <div>
        {data.name}<br/>
        {data.email}
      </div>
    </>
  );
}
