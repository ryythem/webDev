import { useEffect, useState } from "react";

export function useDebounce(value, timeout) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const int = setTimeout(() => {
      setDebouncedValue(value);
    }, timeout);

    return () => {
      clearTimeout(int);
    };
  }, [value]);
  return debouncedValue;
}
