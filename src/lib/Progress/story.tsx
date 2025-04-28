// Packages
import { useEffect, useRef, useState } from "react";

// Components
import Progress from ".";

// Types
import type { Props } from "./types";

export default function ProgressStory(props: Props) {
  const [value, setValue] = useState(0);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const updatePercentage = () => {
      setValue((prev) => {
        if (prev === 100) {
          return prev;
        }
        frame.current = requestAnimationFrame(updatePercentage);
        return prev + 1;
      });
    };

    frame.current = requestAnimationFrame(updatePercentage);

    return () => {
      if (frame.current !== null) {
        cancelAnimationFrame(frame.current);
      }
    };
  }, []);

  return <Progress {...props} value={value} />;
}
