import { useState, useEffect } from "react";
import { Dimensions, ScaledSize } from "react-native";

// Define the type for the screen dimensions
interface ScreenDimensions {
  width: number;
  height: number;
}

// Custom hook to get screen dimensions
const useScreenDimensions = (): ScreenDimensions => {
  const [dimensions, setDimensions] = useState<ScreenDimensions>({
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
  });

  useEffect(() => {
    const handleChange = ({ screen }: { screen: ScaledSize }) => {
      setDimensions({
        width: screen.width,
        height: screen.height,
      });
    };

    // Add event listener for dimension changes
    const subscription = Dimensions.addEventListener("change", handleChange);
  }, []);

  return dimensions;
};

export default useScreenDimensions;
