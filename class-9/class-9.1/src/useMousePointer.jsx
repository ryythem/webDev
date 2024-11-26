import { useEffect, useState } from "react";

export function useMousePointer() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMousePointer = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMousePointer);

    return () => {
      window.removeEventListener("mousemove", handleMousePointer);
    };
  }, []);
  return position;
}
