import { useState, useEffect } from "react";

const useDeviceDetection = () => {
  const isScreenWidthBelow720 = () => window.innerWidth < 720;
  const [isMobile, setIsMobile] = useState(isScreenWidthBelow720());

  useEffect(() => {
    const handleScreenResize = () =>
      isScreenWidthBelow720() ? setIsMobile(true) : setIsMobile(false);

    window.addEventListener("resize", handleScreenResize);

    return () => {
      window.removeEventListener("resize", handleScreenResize);
    };
  }, []);

  return isMobile;
};

export default useDeviceDetection;
