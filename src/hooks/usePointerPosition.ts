import { useState, useEffect } from "react";

interface PointerPositionState {
  xCoordinate: number;
  yCoordinate: number;
}

const usePointerPosition = () => {
  const [position, setPosition] = useState<PointerPositionState>({
    xCoordinate: 0,
    yCoordinate: 0,
  });

  const handleMouseMove = (event: MouseEvent) => {
    setPosition({
      xCoordinate: event.clientX,
      yCoordinate: event.clientY,
    });
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return position;
};

export default usePointerPosition;
