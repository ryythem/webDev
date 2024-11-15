import { useEffect, memo, useState, useCallback } from "react";

function App() {
  const [count, setCount] = useState(0);

  const logSomething = useCallback(() => {
    console.log("child clicked"); 
  }, []);

  return (
    <div>
      <ButtonComponent inputFuntion={logSomething} />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me {count}
      </button>
    </div>
  );
}
const ButtonComponent = memo(({ inputFuntion }) => {
  console.log("child render");

  return (
    <div>
      <button onClick={inputFuntion}>Button clicked</button>
    </div>
  );
});

export default App;
