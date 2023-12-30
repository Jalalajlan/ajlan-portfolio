import { useState, useEffect } from "react";

interface RadialBoxState {
  x: number;
  y: number;
}

const useRadialBox = () => {
  const [position, setPosition] = useState<RadialBoxState>({ x: 0, y: 0 });

  const moveRadialBox = (event: MouseEvent) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => moveRadialBox(event);
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return position;
};

export default useRadialBox;
