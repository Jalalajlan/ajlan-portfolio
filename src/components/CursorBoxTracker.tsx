import usePointerPosition from "../hooks/usePointerPosition";
import "../styles/CursorBoxTracker.css";

const CursorBoxTracker = () => {
  const RadialBoxSize = 700;
  const cursorPosition = usePointerPosition();

  const getRadialBoxTop = () =>
    `${cursorPosition.yCoordinate - RadialBoxSize / 2}px`;

  const getRadialBoxLeft = () =>
    `${cursorPosition.xCoordinate - RadialBoxSize / 2}px`;

  const RadialBoxStyles = {
    width: RadialBoxSize,
    height: RadialBoxSize,
    top: getRadialBoxTop(),
    left: getRadialBoxLeft(),
  };

  return <div className="radial-box" style={RadialBoxStyles}></div>;
};

export default CursorBoxTracker;
