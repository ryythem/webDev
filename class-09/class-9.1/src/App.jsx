import React, { useEffect, useState } from "react";
import axios from "axios";
import { useIsOnline } from "./useIsOnline";
import { useMousePointer } from "./useMousePointer";
import { useDebounce } from "./useDebounce";

function App() {
  const [value, setValue] = useState("");
  const debouceValue = useDebounce(value, 500);
  return (
    <>
      Debounced value is {debouceValue}
      <br />
      <input type="text" onChange={(e) => setValue(e.target.value)} />
    </>
  );
}

export default App;
