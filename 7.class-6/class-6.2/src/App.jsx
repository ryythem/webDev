import { useEffect, useMemo, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [sum, setSum] = useState(1);
  let countt = useMemo(() => {
    let countt = 0;
    for (let i = 0; i <= sum; i++) {
      countt = countt + i;
    }
    return countt;
  }, [sum]);

  return (
    <div>
      <input type="text" onChange={(e) => setSum(e.target.value)} />
      <p>Sum is {countt}</p>
      <button onClick={() => setCount(count + 1)}>Counter ({count})</button>
    </div>
  );
}

export default App;
