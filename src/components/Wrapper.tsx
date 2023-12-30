import React, { ReactNode } from "react";
import useRadialBox from "../hooks/useRadialBox";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const boxSize = 700;
  const position = useRadialBox();

  const cursorStyles = {
    width: boxSize,
    height: boxSize,
    left: `${position.x - boxSize / 2}px`,
    top: `${position.y - boxSize / 2}px`,
  };

  return (
    <div className="wrapper">
      {children}
      <div className="cursor" style={cursorStyles}></div>
    </div>
  );
};

export default Wrapper;
